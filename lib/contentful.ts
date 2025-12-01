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

// Helper to extract text from Rich Text field
function getRichTextContent(richText: any): string {
  if (!richText) return ""

  // If it's already a string, return it
  if (typeof richText === "string") return richText

  // Handle Rich Text Document structure
  if (!richText.content || !Array.isArray(richText.content)) {
    console.log("Invalid rich text structure:", richText)
    return ""
  }

  const extractText = (nodes: any[]): string => {
    return nodes
      .map((node: any) => {
        // Handle text nodes
        if (node.nodeType === "text") {
          return node.value || ""
        }

        // Handle paragraph, heading, and other block nodes
        if (node.content && Array.isArray(node.content)) {
          const text = extractText(node.content)
          // Add line breaks after block elements
          if (["paragraph", "heading-1", "heading-2", "heading-3", "heading-4", "heading-5", "heading-6"].includes(node.nodeType)) {
            return text + "\n\n"
          }
          return text
        }

        return ""
      })
      .join("")
  }

  const result = extractText(richText.content).trim()
  console.log("Extracted text result:", result)
  return result
}

// Fetch all blog posts from Contentful
export async function getContentfulBlogPosts(): Promise<BlogPost[]> {
  try {
    const response = await client.getEntries({
      content_type: "roundiblogs",
      order: ["-fields.date"],
    })

    const posts: BlogPost[] = response.items.map((item: any) => {
      const fields = item.fields

      return {
        id: item.sys.id,
        title: fields.name || "",
        slug: fields.slug || item.sys.id,
        excerpt: getRichTextContent(fields.excerpt) || "",
        content: getRichTextContent(fields.excerpt) || "", // Using excerpt as content since you don't have separate content field
        date: fields.date || new Date().toISOString().split("T")[0],
        readTime: 5, // Default read time since you don't have this field
        author: {
          name: fields.author || "Anonymous",
          avatar: "/placeholder-user.jpg", // Default avatar since you don't have this field
          title: "Writer", // Default title since you don't have this field
        },
        image: fields.cover ? getImageUrl(fields.cover) : "/placeholder.jpg",
        category: fields.category || "General",
        featured: false, // Default to false since you don't have this field
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
      content_type: "roundiblogs",
      "fields.slug": slug,
      limit: 1,
    })

    if (response.items.length === 0) {
      return null
    }

    const item: any = response.items[0]
    const fields = item.fields

    // Debug logging
    console.log("Contentful fields:", JSON.stringify(fields, null, 2))
    console.log("Excerpt field:", fields.excerpt)
    console.log("Extracted content:", getRichTextContent(fields.excerpt))

    return {
      id: item.sys.id,
      title: fields.name || "",
      slug: fields.slug || item.sys.id,
      excerpt: getRichTextContent(fields.excerpt) || "",
      content: getRichTextContent(fields.excerpt) || "",
      date: fields.date || new Date().toISOString().split("T")[0],
      readTime: 5,
      author: {
        name: fields.author || "Anonymous",
        avatar: "/placeholder-user.jpg",
        title: "Writer",
      },
      image: fields.cover ? getImageUrl(fields.cover) : "/placeholder.jpg",
      category: fields.category || "General",
      featured: false,
    }
  } catch (error) {
    console.error("Error fetching blog post from Contentful:", error)
    return null
  }
}

// Fetch featured posts (just returns the latest posts since you don't have a featured field)
export async function getContentfulFeaturedPosts(limit = 3): Promise<BlogPost[]> {
  try {
    const response = await client.getEntries({
      content_type: "roundiblogs",
      limit: limit,
      order: ["-fields.date"],
    })

    const posts: BlogPost[] = response.items.map((item: any) => {
      const fields = item.fields

      return {
        id: item.sys.id,
        title: fields.name || "",
        slug: fields.slug || item.sys.id,
        excerpt: getRichTextContent(fields.excerpt) || "",
        content: getRichTextContent(fields.excerpt) || "",
        date: fields.date || new Date().toISOString().split("T")[0],
        readTime: 5,
        author: {
          name: fields.author || "Anonymous",
          avatar: "/placeholder-user.jpg",
          title: "Writer",
        },
        image: fields.cover ? getImageUrl(fields.cover) : "/placeholder.jpg",
        category: fields.category || "General",
        featured: false,
      }
    })

    return posts
  } catch (error) {
    console.error("Error fetching featured posts from Contentful:", error)
    return []
  }
}
