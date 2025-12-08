import { BlogList } from "@/components/blog-list"
import { getContentfulBlogPosts } from "@/lib/contentful"
import { Footer } from "@/components/home/Footer"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Blog - Delivery Management Insights & Tips",
  description: "Expert insights on delivery management, logistics optimization, and growing your business in Africa. Learn best practices, industry trends, and success stories from Roundi.",
  keywords: ["delivery management blog", "logistics tips", "delivery optimization", "African logistics insights", "business delivery strategies"],
  openGraph: {
    title: "Blog - Delivery Management Insights & Tips",
    description: "Expert insights on delivery management, logistics optimization, and growing your business in Africa.",
    url: "https://roundi.africa/blog",
  },
  alternates: {
    canonical: "https://roundi.africa/blog",
  },
}

// Revalidate this page every 60 seconds
export const revalidate = 60

export default async function BlogPage() {
  const blogPosts = await getContentfulBlogPosts()
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow min-h-screen bg-background px-10">
        {/* Page Header */}
        <section className="max-w-7xl mx-auto py-12 sm:py-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">All Blog Posts</h1>
          <p className="text-lg text-muted-foreground">A collection of thoughts and insights from our team.</p>
        </section>

        {/* Blog Posts */}
        <section className="max-w-7xl mx-auto py-8">
          <BlogList posts={blogPosts} />
        </section>
      </main>
      
      <Footer />
    </div>
  )
}
