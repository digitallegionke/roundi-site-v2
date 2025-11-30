import { createClient } from "contentful"
import type { BlogPost } from "./blog-data"

// Initialize Contentful client
const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID || "",
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || "",
})

// Helper to extract image URL from Contentful assets
function getImageUrl(asset: any): string {
  if (!asset || !asset.fields) return "/placeholder.jpg"
  return asset.fields.file?.url ? `https:${asset.fields.file.url}` : "/placeholder.jpg"
}

// Fetch all blog posts from Contentful
export async function getContentfulBlogPosts(): Promise<BlogPost[]> {
  try {
    const response = await client.getEntries({
      content_type: "blogPost",
      order: ["-fields.date"],
      "fields.published": true,
    })

    const posts: BlogPost[] = response.items.map((item: any) => {
      const fields = item.fields

      return {
        id: item.sys.id,
        title: fields.title || "",
        slug: fields.slug || item.sys.id,
        excerpt: fields.excerpt || "",
        content: fields.content || "",
        date: fields.date || new Date().toISOString().split("T")[0],
        readTime: fields.readTime || 5,
        author: {
          name: fields.authorName || "Anonymous",
          avatar: fields.authorAvatar ? getImageUrl(fields.authorAvatar) : "/placeholder-user.jpg",
          title: fields.authorTitle || "Writer",
        },
        image: fields.image ? getImageUrl(fields.image) : "/placeholder.jpg",
        category: fields.category || "General",
        featured: fields.featured || false,
      }
    })

    return posts
  } catch (error) {
    console.error("Error fetching blog posts from Contentful:", error)
    return []
  }
}

// Fetch a single blog post by slug
export async function getContentfulBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const response = await client.getEntries({
      content_type: "blogPost",
      "fields.slug": slug,
      "fields.published": true,
      limit: 1,
    })

    if (response.items.length === 0) {
      return null
    }

    const item: any = response.items[0]
    const fields = item.fields

    return {
      id: item.sys.id,
      title: fields.title || "",
      slug: fields.slug || item.sys.id,
      excerpt: fields.excerpt || "",
      content: fields.content || "",
      date: fields.date || new Date().toISOString().split("T")[0],
      readTime: fields.readTime || 5,
      author: {
        name: fields.authorName || "Anonymous",
        avatar: fields.authorAvatar ? getImageUrl(fields.authorAvatar) : "/placeholder-user.jpg",
        title: fields.authorTitle || "Writer",
      },
      image: fields.image ? getImageUrl(fields.image) : "/placeholder.jpg",
      category: fields.category || "General",
      featured: fields.featured || false,
    }
  } catch (error) {
    console.error("Error fetching blog post from Contentful:", error)
    return null
  }
}

// Fetch featured posts
export async function getContentfulFeaturedPosts(limit = 3): Promise<BlogPost[]> {
  try {
    const response = await client.getEntries({
      content_type: "blogPost",
      "fields.featured": true,
      "fields.published": true,
      limit: limit,
      order: ["-fields.date"],
    })

    const posts: BlogPost[] = response.items.map((item: any) => {
      const fields = item.fields

      return {
        id: item.sys.id,
        title: fields.title || "",
        slug: fields.slug || item.sys.id,
        excerpt: fields.excerpt || "",
        content: fields.content || "",
        date: fields.date || new Date().toISOString().split("T")[0],
        readTime: fields.readTime || 5,
        author: {
          name: fields.authorName || "Anonymous",
          avatar: fields.authorAvatar ? getImageUrl(fields.authorAvatar) : "/placeholder-user.jpg",
          title: fields.authorTitle || "Writer",
        },
        image: fields.image ? getImageUrl(fields.image) : "/placeholder.jpg",
        category: fields.category || "General",
        featured: fields.featured || false,
      }
    })

    return posts
  } catch (error) {
    console.error("Error fetching featured posts from Contentful:", error)
    return []
  }
}
