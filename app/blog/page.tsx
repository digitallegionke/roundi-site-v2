import { BlogList } from "@/components/blog-list"
import { getContentfulBlogPosts } from "@/lib/contentful"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Blog - Read Our Latest Articles",
  description: "Explore our collection of articles and insights.",
}

// Revalidate this page every 60 seconds
export const revalidate = 60

export default async function BlogPage() {
  const blogPosts = await getContentfulBlogPosts()
  return (
    <main className="min-h-screen bg-background">
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">All Blog Posts</h1>
        <p className="text-lg text-muted-foreground">A collection of thoughts and insights from our team.</p>
      </section>

      {/* Blog Posts */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <BlogList posts={blogPosts} />
      </section>
    </main>
  )
}
