import { NextRequest, NextResponse } from 'next/server';

const MAILERLITE_API_KEY = process.env.MAILERLITE_API_KEY;
const MAILERLITE_GROUP_ID = process.env.MAILERLITE_GROUP_ID;
const MAILERLITE_ENQUIRY_GROUP_ID = process.env.MAILERLITE_ENQUIRY_GROUP_ID;

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    // Validate API key is configured
    if (!MAILERLITE_API_KEY) {
      console.error('MAILERLITE_API_KEY is not configured');
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    const body: ContactFormData = await request.json();

    // Validate required fields
    if (!body.name || !body.email || !body.subject || !body.message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Subscribe to MailerLite using v2 API - Create subscriber first
    const createPayload = {
      email: body.email,
      fields: {
        name: body.name,
        phone: body.phone || '',
        subject: body.subject,
        message: body.message,
      },
    };

    console.log('Creating/updating MailerLite subscriber:', { email: body.email, groupId: MAILERLITE_GROUP_ID });

    let subscriberId: string | null = null;

    const mailerliteResponse = await fetch(
      'https://connect.mailerlite.com/api/subscribers',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${MAILERLITE_API_KEY}`,
        },
        body: JSON.stringify(createPayload),
      }
    );

    const responseData = await mailerliteResponse.json().catch(() => ({}));
    console.log('MailerLite create response status:', mailerliteResponse.status);

    if (!mailerliteResponse.ok) {
      console.error('MailerLite API error:', responseData);

      // If subscriber already exists, get their ID for updating
      if (mailerliteResponse.status === 409 || mailerliteResponse.status === 422) {
        console.log('Subscriber exists, attempting to get and update...');

        // Try to get the subscriber
        const getResponse = await fetch(
          `https://connect.mailerlite.com/api/subscribers?filter[email]=${encodeURIComponent(body.email)}`,
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${MAILERLITE_API_KEY}`,
            },
          }
        );

        if (getResponse.ok) {
          const getResponseData = await getResponse.json();
          if (getResponseData.data && getResponseData.data.length > 0) {
            subscriberId = getResponseData.data[0].id;
            console.log('Found existing subscriber ID:', subscriberId);
          }
        }
      } else {
        return NextResponse.json(
          { error: 'Failed to create subscriber', details: responseData },
          { status: 500 }
        );
      }
    } else {
      // Successfully created subscriber
      subscriberId = responseData.data?.id || null;
      console.log('Successfully created MailerLite subscriber, ID:', subscriberId);
    }

    // Now add to enquiry group only (not main group)
    if (subscriberId) {
      const groupIds = [];

      // Only add to enquiry group for contact form submissions
      if (MAILERLITE_ENQUIRY_GROUP_ID) {
        groupIds.push(MAILERLITE_ENQUIRY_GROUP_ID);
      }

      if (groupIds.length > 0) {
        console.log('Adding subscriber to enquiry group:', groupIds);

        const groupPayload = {
          groups: groupIds,
        };

        const groupResponse = await fetch(
          `https://connect.mailerlite.com/api/subscribers/${subscriberId}`,
          {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${MAILERLITE_API_KEY}`,
            },
            body: JSON.stringify(groupPayload),
          }
        );

        if (!groupResponse.ok) {
          const groupErrorData = await groupResponse.json().catch(() => ({}));
          console.error('Failed to add subscriber to groups:', groupErrorData);
          return NextResponse.json(
            { error: 'Failed to add to groups', details: groupErrorData },
            { status: 500 }
          );
        } else {
          console.log('Successfully added subscriber to groups');
        }
      }
    } else {
      console.warn('No subscriber ID available, skipping group assignment');
      return NextResponse.json(
        { error: 'Could not identify subscriber' },
        { status: 500 }
      );
    }

    // Additional: You could also send an email notification here
    // or log the submission to a database

    return NextResponse.json(
      {
        success: true,
        message: 'Contact form submitted successfully',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
