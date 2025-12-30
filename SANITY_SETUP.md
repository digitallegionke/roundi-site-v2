# Sanity CMS Setup Guide

Your blog has been migrated from Contentful to Sanity CMS. Follow these steps to complete the setup.

## 1. Create a Sanity Account & Project

1. Go to [sanity.io](https://www.sanity.io/) and create a free account
2. Create a new project or use an existing one
3. Note down your **Project ID** and **Dataset name** (default is `production`)

## 2. Configure Environment Variables

Add the following to your `.env.local` file:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_SANITY_DATASET=production
```

Replace `your_project_id_here` with your actual Sanity project ID from step 1.

## 3. Start Sanity Studio

Run the following command to start Sanity Studio locally:

```bash
npm run sanity
```

This will start the Sanity Studio at `http://localhost:3333` (or another available port).

## 4. Deploy Sanity Studio (Optional but Recommended)

To deploy your Sanity Studio to the web for easier content management:

```bash
npm run sanity:deploy
```

Follow the prompts to choose a studio hostname (e.g., `roundi-blog.sanity.studio`).

## 5. Create Your First Blog Post

1. Open Sanity Studio (locally or deployed)
2. Click "Create new" → "Blog Post"
3. Fill in the required fields:
   - **Title** (field name: `name`): Your blog post title
   - **Slug**: Click "Generate" to auto-generate from title
   - **Main Content** (field name: `copy`): Your blog post content (supports rich text, images, headings, lists, etc.)
   - **Excerpt (Fallback Content)**: Rich text used as fallback if main content is empty
   - **Cover Image** (field name: `cover`): Upload a featured image
   - **Date**: Set the publication date
   - **Author Name** (field name: `author`): Enter author name as text
   - **Author Bio** (field name: `authorBio`): Author biography (optional)
   - **Category**: Choose a category (Delivery Management, Logistics, etc.)
   - **Tags**: Add relevant tags (optional)
   - **Featured**: Check to mark as featured

4. Click "Publish" when ready

**Note**: The field names in Sanity match exactly with Contentful for easy migration:
- `name` → Blog title (was "title" in some systems)
- `copy` → Main content
- `cover` → Featured image
- `author` → Simple text field (not an object)
- `authorBio` → Separate field for author biography

## 6. Verify the Setup

1. Start your Next.js development server:
   ```bash
   npm run dev
   ```

2. Visit `http://localhost:3000/blog` to see your blog posts

## Available Scripts

- `npm run sanity` - Start Sanity Studio locally at http://localhost:3333
- `npm run sanity:build` - Build Sanity Studio for production
- `npm run sanity:deploy` - Deploy Sanity Studio to the web

## Schema Structure (Matches Contentful Fields)

Your blog post schema includes all Contentful fields:

- **Name** (required) - The blog post title (Contentful: `name`)
- **Subtitle** - Optional subtitle as rich text (Contentful: `subtitle`)
- **Slug** (required) - URL-friendly identifier (Contentful: `slug`)
- **Copy** (Portable Text) - Main content, rich text with support for:
  - Headings (H1-H4)
  - Paragraphs
  - Bold, italic, and code formatting
  - Links (internal and external)
  - Bullet and numbered lists
  - Images with captions
  - Blockquotes
  (Contentful: `copy`)
- **Excerpt** - Fallback rich text content used if copy is empty (Contentful: `excerpt`)
- **Cover** (required) - Featured image for the post (Contentful: `cover`)
- **Image Credits** - Attribution for the cover image (Contentful: `imageCredits`)
- **Date** (required) - Publication date (Contentful: `date`)
- **Author** - Author name as simple text (Contentful: `author`)
- **Author Bio** - Author biography as rich text (Contentful: `authorBio`)
- **Read Time** - Auto-calculated or manually set in minutes
- **Category** - Post category (Delivery Management, Logistics, etc.) (Contentful: `category`)
- **Tags** - Array of tags for better organization
- **Featured** - Mark important posts as featured

## Migrating Existing Content

To migrate your existing Contentful blog posts to Sanity:

1. Export your content from Contentful
2. Use Sanity's import tools or manually create posts in Sanity Studio
3. Once all content is migrated, you can remove the Contentful package and configuration

## Need Help?

- [Sanity Documentation](https://www.sanity.io/docs)
- [Sanity Community Slack](https://slack.sanity.io/)
- [Next.js + Sanity Integration Guide](https://www.sanity.io/guides/nextjs)

## What Changed?

### Files Created:
- `sanity.config.ts` - Sanity Studio configuration
- `sanity.cli.ts` - Sanity CLI configuration
- `sanity/schemas/blogPost.ts` - Blog post schema definition
- `sanity/schemas/index.ts` - Schema exports
- `lib/sanity.client.ts` - Sanity client setup
- `lib/sanity.ts` - Data fetching functions for blog posts
- `components/portable-text-renderer.tsx` - Renders Sanity's Portable Text format

### Files Updated:
- `app/blog/page.tsx` - Uses `getSanityBlogPosts()` instead of `getContentfulBlogPosts()`
- `app/blog/[slug]/page.tsx` - Uses `getSanityBlogPostBySlug()` instead of `getContentfulBlogPostBySlug()`
- `app/api/blog/route.ts` - Updated to use Sanity
- `app/sitemap.ts` - Updated to use Sanity
- `.env.example` - Added Sanity environment variables
- `package.json` - Added Sanity scripts

### Legacy Files (Can be removed after migration):
- `lib/contentful.ts` - Old Contentful integration
- `components/rich-text-renderer.tsx` - Old Contentful rich text renderer (replaced by `portable-text-renderer.tsx`)
