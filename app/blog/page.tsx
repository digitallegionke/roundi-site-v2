import { BlogList } from "@/components/blog-list"
import { getContentfulBlogPosts } from "@/lib/contentful"
import { Footer } from "@/components/home/Footer"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Delivery Management Blog for Kenyan Businesses | Roundi Insights",
  description: "Expert insights on delivery management for Kenyan and East African businesses. Learn logistics best practices, Nairobi delivery tips, and success stories from African SMEs using Roundi.",
  keywords: ["delivery management blog Kenya", "logistics tips Nairobi", "Kenya delivery optimization", "African logistics insights", "Nairobi business delivery", "East Africa logistics blog", "Kenyan SME delivery strategies"],
  openGraph: {
    title: "Delivery Management Blog for Kenyan Businesses | Roundi",
    description: "Expert insights on delivery management for Kenyan businesses. Learn Nairobi logistics tips and best practices from East African SMEs.",
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
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Delivery Management Insights for Kenyan Businesses</h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Expert tips on managing deliveries in Nairobi and across Kenya. Learn from real stories, best practices, and insights on optimizing logistics for East African SMEs.
          </p>
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
