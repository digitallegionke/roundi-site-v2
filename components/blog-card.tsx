import Link from "next/link"
import type { BlogPost } from "@/lib/blog-data"

interface BlogCardProps {
  post: BlogPost
  variant?: "default" | "compact"
}

export function BlogCard({ post, variant = "default" }: BlogCardProps) {
  if (variant === "compact") {
    return (
      <Link href={`/blog/${post.slug}`}>
        <article className="group cursor-pointer">
          <div className="relative overflow-hidden rounded-lg mb-3">
            <img
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <time className="text-sm text-muted-foreground">{post.date}</time>
          <h3 className="text-base font-semibold text-foreground line-clamp-2 group-hover:text-primary transition-colors mt-2">
            {post.title}
          </h3>
        </article>
      </Link>
    )
  }

  return (
    <Link href={`/blog/${post.slug}`}>
      <article className="group cursor-pointer">
        <div className="relative overflow-hidden rounded-lg mb-4">
          <img
            src={post.image || "/placeholder.svg"}
            alt={post.title}
            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="flex items-center gap-2 mb-3">
          <time className="text-sm text-muted-foreground">{post.date}</time>
          <span className="text-sm text-muted-foreground">•</span>
          <span className="text-sm text-muted-foreground">{post.readTime} min read</span>
        </div>
        <h2 className="text-xl font-bold text-foreground line-clamp-2 group-hover:text-primary transition-colors mb-2">
          {post.title}
        </h2>
        <p className="text-base text-muted-foreground line-clamp-2">{post.excerpt}</p>
        <div className="flex items-center gap-3 mt-4">
          <img
            src={post.author.avatar || "/placeholder.svg"}
            alt={post.author.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <p className="text-sm font-medium text-foreground">{post.author.name}</p>
            <p className="text-xs text-muted-foreground">{post.author.title}</p>
          </div>
        </div>
      </article>
    </Link>
  )
}
