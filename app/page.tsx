import Link from "next/link"
import { BlogList } from "@/components/blog-list"
import { getContentfulFeaturedPosts } from "@/lib/contentful"
import { Button } from "@/components/ui/button"

export default async function Home() {
  const featuredPosts = await getContentfulFeaturedPosts(3)

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 sm:pb-[0]">
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4 text-balance">
            Read our blog
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Discover insights, stories, and updates from our team about delivery innovation and business growth.
          </p>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <BlogList posts={featuredPosts} />
      </section>
    </main>
  )
}
