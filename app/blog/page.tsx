import { BlogList } from "@/components/blog-list"
import { blogPosts } from "@/lib/blog-data"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Blog - Read Our Latest Articles",
  description: "Explore our collection of articles and insights.",
}

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border sticky top-0 bg-background/80 backdrop-blur-sm z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-primary">
            Blog
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/blog" className="text-sm text-primary font-medium">
              All Posts
            </Link>
            <Button variant="default" size="sm">
              Subscribe
            </Button>
          </div>
        </nav>
      </header>

      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">All Blog Posts</h1>
        <p className="text-lg text-muted-foreground">A collection of thoughts and insights from our team.</p>
      </section>

      {/* Blog Posts */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <BlogList posts={blogPosts} />
      </section>

      {/* Footer */}
      <footer className="border-t border-border mt-16 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 Your Company. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
