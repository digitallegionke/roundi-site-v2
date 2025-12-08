import { MetadataRoute } from 'next'
import { getContentfulBlogPosts } from '@/lib/contentful'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://roundi.africa'

  // Get all blog posts for dynamic routes
  const blogPosts = await getContentfulBlogPosts()

  const blogUrls = blogPosts.map((post) => {
    // Use publishedDate, fall back to date, or use current date if both are invalid
    const dateValue = post.publishedDate || post.date
    const lastModified = dateValue ? new Date(dateValue) : new Date()

    return {
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: isNaN(lastModified.getTime()) ? new Date() : lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    }
  })

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/early-access-form`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    ...blogUrls,
  ]
}
