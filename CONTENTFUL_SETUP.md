# Contentful Setup Guide

This project now uses Contentful as the content management system for blog posts.

## Prerequisites

1. Create a Contentful account at https://www.contentful.com
2. Create a new space for your blog

## Content Model Setup

In your Contentful space, create a new content type called `blogPost` with the following fields:

### Required Fields

| Field Name | Field ID | Type | Description |
|------------|----------|------|-------------|
| Title | `title` | Short text | Blog post title |
| Slug | `slug` | Short text | URL-friendly identifier (unique) |
| Excerpt | `excerpt` | Long text | Brief summary of the post |
| Content | `content` | Long text | Full blog post content (markdown supported) |
| Date | `date` | Date and time | Publication date |
| Published | `published` | Boolean | Whether the post is published |
| Image | `image` | Media (single file) | Featured image |
| Author Name | `authorName` | Short text | Author's full name |
| Author Title | `authorTitle` | Short text | Author's job title |
| Author Avatar | `authorAvatar` | Media (single file) | Author's profile picture |
| Read Time | `readTime` | Number (integer) | Estimated reading time in minutes |
| Category | `category` | Short text | Post category |
| Featured | `featured` | Boolean | Whether the post is featured |

### Field Configuration Tips

1. Make `slug` field **required** and **unique**
2. Set `published` field default value to `false`
3. Set `featured` field default value to `false`
4. Set `readTime` default value to `5`

## Environment Variables

1. Copy `.env.example` to `.env.local` if you haven't already:
   ```bash
   cp .env.example .env.local
   ```

2. Get your Contentful credentials:
   - Go to Settings → API keys in your Contentful space
   - Create a new API key or use an existing one
   - Copy the **Space ID** and **Content Delivery API - access token**

3. Update `.env.local` with your credentials:
   ```
   CONTENTFUL_SPACE_ID=your_space_id_here
   CONTENTFUL_ACCESS_TOKEN=your_access_token_here
   ```

## Creating Your First Post

1. Go to Content in your Contentful space
2. Click "Add entry" → "Blog Post"
3. Fill in all the required fields:
   - Title: Your post title
   - Slug: URL-friendly version (e.g., "my-first-post")
   - Excerpt: Brief summary
   - Content: Full post content
   - Date: Publication date
   - Published: Check this to make it visible
   - Upload images for the featured image and author avatar
   - Fill in author information
   - Add category and read time
   - Optionally mark as featured

4. Click "Publish" to make it live

## API Endpoints

The application provides the following API endpoints:

- `GET /api/blog` - Fetch all published blog posts
- Blog pages will automatically fetch and display Contentful content

## Content Structure

The Contentful integration expects the following structure:

```typescript
{
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  date: string
  readTime: number
  author: {
    name: string
    title: string
    avatar: string
  }
  image: string
  category: string
  featured: boolean
}
```

## Migration from Notion

If you previously used Notion:

1. Export your Notion database content
2. Recreate the posts in Contentful using the content model above
3. The old Notion environment variables are commented out in `.env.local`
4. The `lib/notion.ts` file can be safely deleted once migration is complete

## Troubleshooting

### Posts not showing up?

1. Verify the content type ID is exactly `blogPost` (case-sensitive)
2. Check that posts have the `published` field set to `true`
3. Verify your environment variables are correct
4. Check the browser console and server logs for errors

### Images not loading?

1. Ensure images are uploaded to Contentful (not external URLs initially)
2. The integration automatically adds `https:` prefix to Contentful asset URLs
3. Check that image fields are properly configured in the content model

### API Rate Limits?

Contentful has rate limits on their free tier. Consider:
1. Implementing caching strategies
2. Upgrading to a paid plan for higher limits
3. Using `revalidate` in Next.js for static generation

## Resources

- [Contentful Documentation](https://www.contentful.com/developers/docs/)
- [Contentful JavaScript SDK](https://github.com/contentful/contentful.js)
- [Next.js + Contentful Guide](https://www.contentful.com/developers/docs/javascript/tutorials/integrate-contentful-with-nextjs/)
