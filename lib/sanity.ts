import { client } from './sanity.client'
import type { BlogPost } from './blog-data'
import imageUrlBuilder from '@sanity/image-url'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'

// Helper to build image URLs from Sanity images
const builder = imageUrlBuilder(client)

function urlFor(source: SanityImageSource) {
  return builder.image(source)
}

// Helper to calculate read time from portable text
function calculateReadTime(content: any[]): number {
  if (!content || !Array.isArray(content)) return 5

  let wordCount = 0

  const extractText = (blocks: any[]): void => {
    blocks.forEach((block) => {
      if (block._type === 'block' && block.children) {
        block.children.forEach((child: any) => {
          if (child.text) {
            wordCount += child.text.split(/\s+/).length
          }
        })
      }
    })
  }

  extractText(content)
  return Math.ceil(wordCount / 200) || 5
}

// Helper to extract text from portable text (for excerpts)
function getPlainTextFromPortableText(portableText: any[]): string {
  if (!portableText || !Array.isArray(portableText)) return ''

  return portableText
    .map((block) => {
      if (block._type === 'block' && block.children) {
        return block.children.map((child: any) => child.text).join('')
      }
      return ''
    })
    .join(' ')
}

// Fetch all blog posts from Sanity
export async function getSanityBlogPosts(): Promise<BlogPost[]> {
  try {
    const posts = await client.fetch(
      `*[_type == "blogPost"] | order(date desc) {
        _id,
        name,
        subtitle,
        slug,
        copy,
        excerpt,
        cover,
        imageCredits,
        date,
        author,
        authorBio,
        readTime,
        category,
        tags,
        featured
      }`
    )

    return posts.map((post: any) => {
      // Use copy as main content, fall back to excerpt (same as Contentful)
      const richContent = post.copy || post.excerpt
      const contentText = getPlainTextFromPortableText(richContent)

      // Handle subtitle - extract text if it's portable text
      const subtitleText = post.subtitle ? getPlainTextFromPortableText(post.subtitle) : ''

      // Handle author bio - extract text if it's portable text
      const authorBioText = post.authorBio ? getPlainTextFromPortableText(post.authorBio) : ''

      return {
        id: post._id,
        title: post.name || '',
        subtitle: subtitleText,
        slug: post.slug?.current || post._id,
        excerpt: contentText.substring(0, 200) + (contentText.length > 200 ? '...' : ''),
        content: contentText,
        richContent: richContent, // Store portable text for rendering
        image: post.cover ? urlFor(post.cover).width(1200).height(630).url() : '/placeholder.webp',
        imageCredits: post.imageCredits || '',
        date: post.date || new Date().toISOString().split('T')[0],
        author: {
          name: post.author || 'Anonymous',
          title: 'Writer',
          avatar: '/placeholder-user.webp',
          bio: authorBioText,
        },
        readTime: post.readTime || calculateReadTime(richContent),
        category: post.category || 'General',
        featured: post.featured || false,
        publishedDate: post.date, // Alias for compatibility
        updatedDate: post.date, // Could be a separate field in the future
        tags: post.tags || [],
      }
    })
  } catch (error) {
    console.error('Error fetching blog posts from Sanity:', error)
    return []
  }
}

// Fetch a single blog post by slug
export async function getSanityBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const post = await client.fetch(
      `*[_type == "blogPost" && slug.current == $slug][0] {
        _id,
        name,
        subtitle,
        slug,
        copy,
        excerpt,
        cover,
        imageCredits,
        date,
        author,
        authorBio,
        readTime,
        category,
        tags,
        featured
      }`,
      { slug }
    )

    if (!post) return null

    // Use copy as main content, fall back to excerpt (same as Contentful)
    const richContent = post.copy || post.excerpt
    const contentText = getPlainTextFromPortableText(richContent)

    // Handle subtitle - extract text if it's portable text
    const subtitleText = post.subtitle ? getPlainTextFromPortableText(post.subtitle) : ''

    // Handle author bio - extract text if it's portable text
    const authorBioText = post.authorBio ? getPlainTextFromPortableText(post.authorBio) : ''

    return {
      id: post._id,
      title: post.name || '',
      subtitle: subtitleText,
      slug: post.slug?.current || post._id,
      excerpt: contentText.substring(0, 200) + (contentText.length > 200 ? '...' : ''),
      content: contentText,
      richContent: richContent,
      image: post.cover ? urlFor(post.cover).width(1200).height(630).url() : '/placeholder.webp',
      imageCredits: post.imageCredits || '',
      date: post.date || new Date().toISOString().split('T')[0],
      author: {
        name: post.author || 'Anonymous',
        title: 'Writer',
        avatar: '/placeholder-user.webp',
        bio: authorBioText,
      },
      readTime: post.readTime || calculateReadTime(richContent),
      category: post.category || 'General',
      featured: post.featured || false,
      publishedDate: post.date, // Alias for compatibility
      updatedDate: post.date, // Could be a separate field in the future
      tags: post.tags || [],
    }
  } catch (error) {
    console.error('Error fetching blog post from Sanity:', error)
    return null
  }
}

// Fetch featured posts
export async function getSanityFeaturedPosts(limit = 3): Promise<BlogPost[]> {
  try {
    const posts = await client.fetch(
      `*[_type == "blogPost" && featured == true] | order(date desc) [0...$limit] {
        _id,
        name,
        subtitle,
        slug,
        copy,
        excerpt,
        cover,
        imageCredits,
        date,
        author,
        authorBio,
        readTime,
        category,
        tags,
        featured
      }`,
      { limit: limit - 1 }
    )

    // If no featured posts, return latest posts
    if (posts.length === 0) {
      return getSanityBlogPosts().then(allPosts => allPosts.slice(0, limit))
    }

    return posts.map((post: any) => {
      // Use copy as main content, fall back to excerpt (same as Contentful)
      const richContent = post.copy || post.excerpt
      const contentText = getPlainTextFromPortableText(richContent)

      // Handle subtitle - extract text if it's portable text
      const subtitleText = post.subtitle ? getPlainTextFromPortableText(post.subtitle) : ''

      // Handle author bio - extract text if it's portable text
      const authorBioText = post.authorBio ? getPlainTextFromPortableText(post.authorBio) : ''

      return {
        id: post._id,
        title: post.name || '',
        subtitle: subtitleText,
        slug: post.slug?.current || post._id,
        excerpt: contentText.substring(0, 200) + (contentText.length > 200 ? '...' : ''),
        content: contentText,
        richContent: richContent,
        image: post.cover ? urlFor(post.cover).width(1200).height(630).url() : '/placeholder.webp',
        imageCredits: post.imageCredits || '',
        date: post.date || new Date().toISOString().split('T')[0],
        author: {
          name: post.author || 'Anonymous',
          title: 'Writer',
          avatar: '/placeholder-user.webp',
          bio: authorBioText,
        },
        readTime: post.readTime || calculateReadTime(richContent),
        category: post.category || 'General',
        featured: post.featured || false,
        publishedDate: post.date, // Alias for compatibility
        updatedDate: post.date, // Could be a separate field in the future
        tags: post.tags || [],
      }
    })
  } catch (error) {
    console.error('Error fetching featured posts from Sanity:', error)
    return []
  }
}
