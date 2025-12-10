import { NextRequest, NextResponse } from 'next/server';
import { addEarlyAccessToNotion } from '@/lib/notion';

export async function POST(req: NextRequest) {
  try {
    const formData = await req.json();

    const mailerliteApiKey = process.env.MAILERLITE_API_KEY;
    const mailerliteGroupId = process.env.MAILERLITE_GROUP_ID;

    if (!mailerliteApiKey || !mailerliteGroupId) {
      return NextResponse.json({ message: 'Server configuration error: MailerLite API key or Group ID not set.' }, { status: 500 });
    }

    const response = await fetch('https://connect.mailerlite.com/api/subscribers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${mailerliteApiKey}`
      },
      body: JSON.stringify({
        email: formData.businessEmail,
        fields: {
          name: formData.fullName,
          company: formData.businessName,
          phone: formData.phoneNumber,
          // Add other custom fields as needed, e.g.:
          // business_type: formData.businessType,
          // deliveries_per_day: formData.deliveriesPerDay,
          // delivery_team_size: formData.deliveryTeamSize,
          // biggest_challenge: formData.biggestChallenge,
        },
        groups: [mailerliteGroupId],
        status: 'active'
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('MailerLite API error:', errorData);
      return NextResponse.json({ message: 'Failed to subscribe to MailerLite.', details: errorData }, { status: response.status });
    }

    // Add to Notion database (non-blocking)
    await addEarlyAccessToNotion(formData);

    return NextResponse.json({ message: 'Successfully subscribed to MailerLite.' });
  } catch (error) {
    console.error('Serverless function error:', error);
    return NextResponse.json({ message: 'Internal server error.' }, { status: 500 });
  }
}
