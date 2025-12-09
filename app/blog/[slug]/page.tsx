import { getContentfulBlogPostBySlug, getContentfulBlogPosts } from "@/lib/contentful"
import { BlogCard } from "@/components/blog-card"
import { RichTextRenderer } from "@/components/rich-text-renderer"
import { Footer } from "@/components/home/Footer"
import { formatDate } from "@/lib/utils/date"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import { notFound } from "next/navigation"

interface BlogPostPageProps {
  params: Promise<{
    slug: string
  }>
}

// Revalidate this page every 60 seconds
export const revalidate = 60

// Enable dynamic params to allow new blog posts to be generated
export const dynamicParams = true

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

  const publishedDate = new Date(post.publishedDate || post.date)
  const modifiedDate = new Date(post.updatedDate || post.date)

  return {
    title: post.title,
    description: post.excerpt || post.subtitle,
    keywords: post.tags || ["delivery management", "logistics", "Roundi"],
    authors: [{ name: post.author.name }],
    openGraph: {
      title: post.title,
      description: post.excerpt || post.subtitle,
      url: `https://roundi.africa/blog/${post.slug}`,
      type: 'article',
      publishedTime: publishedDate.toISOString(),
      modifiedTime: modifiedDate.toISOString(),
      authors: [post.author.name],
      images: [
        {
          url: post.image || '/hero-bg.webp',
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt || post.subtitle,
      images: [post.image || '/hero-bg.webp'],
    },
    alternates: {
      canonical: `https://roundi.africa/blog/${post.slug}`,
    },
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

  // Structured data for the blog post
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt || post.subtitle,
    "image": post.image || "https://roundi.africa/hero-bg.webp",
    "datePublished": new Date(post.publishedDate || post.date).toISOString(),
    "dateModified": new Date(post.updatedDate || post.date).toISOString(),
    "author": {
      "@type": "Person",
      "name": post.author.name,
    },
    "publisher": {
      "@type": "Organization",
      "name": "Roundi",
      "logo": {
        "@type": "ImageObject",
        "url": "https://roundi.africa/logo.svg"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://roundi.africa/blog/${post.slug}`
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <main className="min-h-screen bg-background px-10 flex-grow">
        {/* Post Content */}
        <article className="max-w-4xl mx-auto py-12 sm:py-0 mt-16">
          {/* Back Button */}
          <Link
            href="/blog"
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
          <div className="mb-8">
            <div className="rounded-lg overflow-hidden">
              <img src={post.image || "/placeholder.webp"} alt={post.title} className="w-full h-96 object-cover" />
            </div>
            {post.imageCredits && (
              <p className="text-xs text-muted-foreground mt-2 italic">
                {post.imageCredits}
              </p>
            )}
          </div>

          {/* Subtitle Section */}
          {post.subtitle && (
            <div className="mb-8">
              <p className="text-xl text-muted-foreground leading-relaxed">{post.subtitle}</p>
            </div>
          )}

          {/* Meta Information */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-8 mb-8 border-b border-border">
            <div className="flex items-center gap-4">
              <p className="font-medium text-foreground">{post.author.name}</p>
            </div>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <time>{formatDate(post.date)}</time>
              <span>•</span>
              <span>{post.readTime} min read</span>
            </div>
          </div>

          {/* Post Body */}
          <div className="mb-12">
            {post.richContent ? (
              <RichTextRenderer content={post.richContent} />
            ) : (
              <div className="prose prose-lg dark:prose-invert max-w-none">
                {post.content.split("\n\n").map((paragraph, index) => (
                  <p key={index} className="text-base text-foreground leading-relaxed mb-6">
                    {paragraph}
                  </p>
                ))}
              </div>
            )}
          </div>

          {/* CTA Section */}
          <div className="bg-[#c8e298]/10 border border-[#c8e298]/30 rounded-xl p-8 mb-12">
            <div className="max-w-2xl mx-auto text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Ready to Transform Your Delivery Operations in Kenya?
              </h3>
              <p className="text-base text-muted-foreground mb-6 leading-relaxed">
                Join Kenyan businesses in Nairobi and across East Africa using Roundi to manage deliveries efficiently. Track orders in real-time, optimize routes, and delight your customers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="/early-access-form"
                  className="inline-flex items-center justify-center px-6 py-3 bg-[#c8e298] hover:bg-[#b8d288] text-[#162318] font-semibold rounded-full transition-colors w-full sm:w-auto"
                >
                  Get Early Access
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-[#162318] hover:bg-[#162318] hover:text-white text-[#162318] font-semibold rounded-full transition-colors w-full sm:w-auto"
                >
                  Talk to Us
                </Link>
              </div>
            </div>
          </div>

          {/* Author Bio - Deactivated for now */}
          {/* {post.author.bio && (
            <div className="bg-card border border-border rounded-lg p-6 mb-12">
              <div>
                <h3 className="font-semibold text-foreground mb-3">{post.author.name}</h3>
                <p className="text-sm text-foreground">
                  {post.author.bio}
                </p>
              </div>
            </div>
          )} */}
        </article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="bg-card border-t border-border">
            <div className="max-w-7xl mx-auto py-12 sm:py-16">
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
      
      <Footer />
    </div>
  )
}
