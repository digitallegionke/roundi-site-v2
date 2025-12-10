import { Client } from '@notionhq/client';

// Initialize Notion client
const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

// Type definitions
interface EarlyAccessFormData {
  fullName: string;
  businessName: string;
  businessEmail: string;
  phoneNumber: string;
  businessType: string;
  deliveriesPerDay: string;
  deliveryTeamSize: string;
  biggestChallenge: string;
}

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

/**
 * Add an early access form submission to Notion database
 */
export async function addEarlyAccessToNotion(
  formData: EarlyAccessFormData
): Promise<void> {
  const databaseId = process.env.NOTION_EARLY_ACCESS_DB_ID;

  if (!databaseId) {
    console.warn('NOTION_EARLY_ACCESS_DB_ID not configured, skipping Notion submission');
    return;
  }

  console.log('Attempting to add to Notion Early Access DB:', databaseId);
  console.log('Form data:', formData);

  try {
    await notion.pages.create({
      parent: { database_id: databaseId },
      properties: {
        'Full Name': {
          title: [
            {
              text: {
                content: formData.fullName,
              },
            },
          ],
        },
        'Business Email': {
          email: formData.businessEmail,
        },
        'Business Name': {
          rich_text: [
            {
              text: {
                content: formData.businessName,
              },
            },
          ],
        },
        'Phone Number': {
          phone_number: formData.phoneNumber,
        },
        'Business Type': {
          multi_select: [
            {
              name: formData.businessType,
            },
          ],
        },
        'Number of Deliveries per Day': {
          multi_select: [
            {
              name: formData.deliveriesPerDay,
            },
          ],
        },
        'Delivery Team Size': {
          rich_text: [
            {
              text: {
                content: formData.deliveryTeamSize,
              },
            },
          ],
        },
        'Biggest Challenge': {
          rich_text: [
            {
              text: {
                content: formData.biggestChallenge || '',
              },
            },
          ],
        },
        'Submission At': {
          date: {
            start: new Date().toISOString(),
          },
        },
      },
    });

    console.log('✅ Early access submission added to Notion successfully');
  } catch (error: any) {
    console.error('❌ Error adding early access submission to Notion:', error);
    if (error.body) {
      console.error('Error details:', error.body);
    }
    // Don't throw error - we don't want to fail the whole submission if Notion fails
  }
}

/**
 * Add a contact form submission to Notion database
 */
export async function addContactToNotion(
  formData: ContactFormData
): Promise<void> {
  const databaseId = process.env.NOTION_CONTACT_DB_ID;

  if (!databaseId) {
    console.warn('NOTION_CONTACT_DB_ID not configured, skipping Notion submission');
    return;
  }

  console.log('Attempting to add to Notion Contact DB:', databaseId);
  console.log('Form data:', formData);

  try {
    await notion.pages.create({
      parent: { database_id: databaseId },
      properties: {
        'Name': {
          title: [
            {
              text: {
                content: formData.name,
              },
            },
          ],
        },
        'Email': {
          email: formData.email,
        },
        'Phone': {
          phone_number: formData.phone || null,
        },
        'Subject': {
          select: {
            name: formData.subject,
          },
        },
        'Message': {
          rich_text: [
            {
              text: {
                content: formData.message,
              },
            },
          ],
        },
        'Submitted At': {
          date: {
            start: new Date().toISOString(),
          },
        },
      },
    });

    console.log('✅ Contact form submission added to Notion successfully');
  } catch (error: any) {
    console.error('❌ Error adding contact form submission to Notion:', error);
    if (error.body) {
      console.error('Error details:', error.body);
    }
    // Don't throw error - we don't want to fail the whole submission if Notion fails
  }
}
