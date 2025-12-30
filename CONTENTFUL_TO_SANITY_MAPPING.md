# Contentful to Sanity Field Mapping

This document shows the exact field mapping between Contentful and Sanity schemas.

## Field Comparison

| Contentful Field | Contentful Type | Sanity Field | Sanity Type | Notes |
|-----------------|----------------|--------------|-------------|-------|
| `name` | Text | `name` | String | Blog post title |
| `subtitle` | Rich Text or Text | `subtitle` | Portable Text Array | Optional subtitle |
| `slug` | Slug | `slug` | Slug | URL-friendly identifier |
| `copy` | Rich Text | `copy` | Portable Text Array | Main blog content |
| `excerpt` | Rich Text | `excerpt` | Portable Text Array | Fallback content if copy is empty |
| `cover` | Asset (Image) | `cover` | Image | Featured image |
| `imageCredits` | Text | `imageCredits` | String | Image attribution |
| `date` | Date | `date` | Date | Publication date |
| `author` | Text | `author` | String | Author name (simple text field) |
| `authorBio` | Rich Text or Text | `authorBio` | Portable Text Array | Author biography |
| `category` | Text | `category` | String with options | Post category |
| - | - | `readTime` | Number | Reading time in minutes (auto-calculated) |
| - | - | `tags` | Array of Strings | Tags for organization |
| - | - | `featured` | Boolean | Mark posts as featured |

## Key Differences

### 1. Rich Text Format
- **Contentful**: Uses Contentful Rich Text Document format
- **Sanity**: Uses Portable Text format (more flexible and portable)
- **Migration**: The `lib/sanity.ts` file handles conversion to match your existing BlogPost interface

### 2. Author Field
- **Contentful**: Simple text field for author name, separate `authorBio` field
- **Sanity**: Same structure - simple text for `author`, separate `authorBio` for biography
- **Note**: Your `lib/sanity.ts` converts this to an author object with name, title, avatar, and bio for consistency with your interface

### 3. Date Fields
- **Contentful**: Used `date` field
- **Sanity**: Uses `date` field (same)
- **Note**: `publishedDate` and `updatedDate` are added as aliases in the data layer for compatibility

### 4. Image Fields
- **Contentful**: `cover` field
- **Sanity**: `cover` field (same name)
- **Note**: Sanity uses its image CDN with automatic optimization

## Additional Fields in Sanity

These fields were added to enhance functionality:

1. **readTime** - Auto-calculated reading time based on content word count
2. **tags** - Array of tags for better content organization
3. **featured** - Boolean flag to mark important posts

## Content Type Name

- **Contentful**: `roundiblogs`
- **Sanity**: `blogPost`

## Data Fetching Functions

All Contentful functions have been replaced with Sanity equivalents:

| Contentful Function | Sanity Replacement |
|--------------------|--------------------|
| `getContentfulBlogPosts()` | `getSanityBlogPosts()` |
| `getContentfulBlogPostBySlug(slug)` | `getSanityBlogPostBySlug(slug)` |
| `getContentfulFeaturedPosts(limit)` | `getSanityFeaturedPosts(limit)` |

## Migration Checklist

When migrating content from Contentful to Sanity:

- [ ] Export all blog posts from Contentful
- [ ] For each post, map the fields according to the table above
- [ ] Import images to Sanity and link them in the `cover` field
- [ ] Convert Contentful Rich Text to Portable Text (can be done manually in Sanity Studio)
- [ ] Verify all content renders correctly on your site
- [ ] Update environment variables to point to Sanity
- [ ] Test all blog pages thoroughly
- [ ] Once confirmed working, you can remove Contentful dependencies

## Environment Variables

### Contentful (Old)
```env
CONTENTFUL_SPACE_ID=your_space_id
CONTENTFUL_ACCESS_TOKEN=your_access_token
```

### Sanity (New)
```env
NEXT_PUBLIC_SANITY_PROJECT_ID=8029w8ob
NEXT_PUBLIC_SANITY_DATASET=production
```

## Files Updated

The following files were updated to use Sanity instead of Contentful:

1. `app/blog/page.tsx` - Uses `getSanityBlogPosts()`
2. `app/blog/[slug]/page.tsx` - Uses `getSanityBlogPostBySlug()`
3. `app/api/blog/route.ts` - API endpoint updated
4. `app/sitemap.ts` - Sitemap generation updated
5. `lib/sanity.ts` - New data fetching layer (replaces `lib/contentful.ts`)
6. `components/portable-text-renderer.tsx` - New renderer for Sanity's Portable Text
