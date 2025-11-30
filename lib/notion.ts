import { Client } from "@notionhq/client"
import { NotionToMarkdown } from "notion-to-md"
import type { BlogPost } from "./blog-data"

// Helper to extract plain text from Notion rich text
function getPlainText(richText: any[]): string {
  if (!richText || !richText.length) return ""
  return richText.map((text) => text.plain_text).join("")
}

// Helper to extract image URL from Notion files
function getImageUrl(files: any[]): string {
  if (!files || !files.length) return ""
  const file = files[0]
  return file.type === "external" ? file.external.url : file.file.url
}

// Fetch all blog posts from Notion
export async function getNotionBlogPosts(): Promise<BlogPost[]> {
  const notion = new Client({ auth: process.env.NOTION_API_KEY })
  const n2m = new NotionToMarkdown({ notionClient: notion })
  const databaseId = process.env.NOTION_DATABASE_ID || ""

  console.log("Notion Database ID:", databaseId)

  try {
    const response = await notion.databases.query({
      database_id: databaseId,
      filter: {
        property: "Published",
        checkbox: {
          equals: true,
        },
      },
      sorts: [
        {
          property: "Date",
          direction: "descending",
        },
      ],
    })

    console.log("Notion API Response:", JSON.stringify(response, null, 2))

    const posts: BlogPost[] = await Promise.all(
      response.results.map(async (page: any) => {
        const properties = page.properties

        // Get page content
        const mdblocks = await n2m.pageToMarkdown(page.id)
        const mdString = n2m.toMarkdownString(mdblocks)
        const content = mdString.parent || ""

        return {
          id: page.id,
          title: getPlainText(properties.Title?.title || properties.Name?.title || []),
          slug: getPlainText(properties.Slug?.rich_text || []) || page.id,
          excerpt: getPlainText(properties.Excerpt?.rich_text || []),
          content: content,
          date: properties.Date?.date?.start || new Date().toISOString().split("T")[0],
          readTime: properties.ReadTime?.number || 5,
          author: {
            name: getPlainText(properties.Author?.rich_text || []) || "Anonymous",
            avatar: getImageUrl(properties.AuthorAvatar?.files || []) || "/placeholder-user.jpg",
            title: getPlainText(properties.AuthorTitle?.rich_text || []) || "Writer",
          },
          image: getImageUrl(properties.Image?.files || properties.Cover?.files || []) || "/placeholder.jpg",
          category: getPlainText(properties.Category?.select ? [{ plain_text: properties.Category.select.name }] : []) || "General",
          featured: properties.Featured?.checkbox || false,
        }
      })
    )

    return posts
  } catch (error) {
    console.error("Error fetching blog posts from Notion:", error)
    return []
  }
}

// Fetch a single blog post by slug
export async function getNotionBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  const notion = new Client({ auth: process.env.NOTION_API_KEY })
  const n2m = new NotionToMarkdown({ notionClient: notion })
  const databaseId = process.env.NOTION_DATABASE_ID || ""

  try {
    const response = await notion.databases.query({
      database_id: databaseId,
      filter: {
        and: [
          {
            property: "Published",
            checkbox: {
              equals: true,
            },
          },
          {
            property: "Slug",
            rich_text: {
              equals: slug,
            },
          },
        ],
      },
    })

    if (response.results.length === 0) {
      return null
    }

    const page: any = response.results[0]
    const properties = page.properties

    // Get page content
    const mdblocks = await n2m.pageToMarkdown(page.id)
    const mdString = n2m.toMarkdownString(mdblocks)
    const content = mdString.parent || ""

    return {
      id: page.id,
      title: getPlainText(properties.Title?.title || properties.Name?.title || []),
      slug: getPlainText(properties.Slug?.rich_text || []) || page.id,
      excerpt: getPlainText(properties.Excerpt?.rich_text || []),
      content: content,
      date: properties.Date?.date?.start || new Date().toISOString().split("T")[0],
      readTime: properties.ReadTime?.number || 5,
      author: {
        name: getPlainText(properties.Author?.rich_text || []) || "Anonymous",
        avatar: getImageUrl(properties.AuthorAvatar?.files || []) || "/placeholder-user.jpg",
        title: getPlainText(properties.AuthorTitle?.rich_text || []) || "Writer",
      },
      image: getImageUrl(properties.Image?.files || properties.Cover?.files || []) || "/placeholder.jpg",
      category: getPlainText(properties.Category?.select ? [{ plain_text: properties.Category.select.name }] : []) || "General",
      featured: properties.Featured?.checkbox || false,
    }
  } catch (error) {
    console.error("Error fetching blog post from Notion:", error)
    return null
  }
}

// Fetch featured posts
export async function getNotionFeaturedPosts(limit = 3): Promise<BlogPost[]> {
  const allPosts = await getNotionBlogPosts()
  return allPosts.filter((post) => post.featured).slice(0, limit)
}
