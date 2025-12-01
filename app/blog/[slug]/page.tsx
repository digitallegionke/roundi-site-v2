import { getContentfulBlogPostBySlug, getContentfulBlogPosts } from "@/lib/contentful"
import { BlogCard } from "@/components/blog-card"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import { notFound } from "next/navigation"

interface BlogPostPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  const blogPosts = await getContentfulBlogPosts()
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const resolvedParams = await params
  const post = await getContentfulBlogPostBySlug(resolvedParams.slug)

  if (!post) {
    return {
      title: "Post not found",
    }
  }

  return {
    title: post.title,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const resolvedParams = await params
  const post = await getContentfulBlogPostBySlug(resolvedParams.slug)

  if (!post) {
    notFound()
  }

  const blogPosts = await getContentfulBlogPosts()
  const relatedPosts = blogPosts.filter((p) => p.id !== post.id).slice(0, 3)

  return (
    <main className="min-h-screen bg-background">
      {/* Post Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-0 mt-16">
        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ChevronLeft className="w-4 h-4" />
          Back to blog
        </Link>

        {/* Title Section */}
        <div className="mb-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance">{post.title}</h1>
        </div>

        {/* Featured Image */}
        <div className="mb-8 rounded-lg overflow-hidden">
          <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-96 object-cover" />
        </div>

        {/* Meta Information */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-8 mb-8 border-b border-border">
          <div className="flex items-center gap-4">
            <img
              src={post.author.avatar || "/placeholder.svg"}
              alt={post.author.name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <p className="font-medium text-foreground">{post.author.name}</p>
              <p className="text-sm text-muted-foreground">{post.author.title}</p>
            </div>
          </div>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <time>{post.date}</time>
            <span>•</span>
            <span>{post.readTime} min read</span>
          </div>
        </div>

        {/* Post Body */}
        <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
          {post.content.split("\n\n").map((paragraph, index) => (
            <p key={index} className="text-base text-foreground leading-relaxed mb-6">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Author Bio */}
        <div className="bg-card border border-border rounded-lg p-6 mb-12">
          <div className="flex items-start gap-4">
            <img
              src={post.author.avatar || "/placeholder.svg"}
              alt={post.author.name}
              className="w-16 h-16 rounded-full object-cover flex-shrink-0"
            />
            <div>
              <h3 className="font-semibold text-foreground mb-1">{post.author.name}</h3>
              <p className="text-sm text-muted-foreground mb-3">{post.author.title}</p>
              <p className="text-sm text-foreground">
                Passionate about building products that make a difference. Follow along for insights on design,
                engineering, and entrepreneurship.
              </p>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="bg-card border-t border-border">
          <div className="max-w-7xl mx-auto lg:px-8 py-12 sm:py-16 sm:px-1663px]62px]61px]59px]58px]455px]52px]51px]50px]49px]247px]46px]45px]143px]42px]41px]039px]38px]37px]35px]34px]30px]29px]27px]26px]25px] px-6">
            <h2 className="text-3xl font-bold text-foreground mb-8">Read more</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <BlogCard key={relatedPost.id} post={relatedPost} variant="compact" />
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  )
}
