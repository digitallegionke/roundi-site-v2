import { BlogList } from "@/components/blog-list"
import { getContentfulBlogPosts } from "@/lib/contentful"
import { Footer } from "@/components/home/Footer"
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
