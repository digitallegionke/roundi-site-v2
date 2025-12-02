import Link from "next/link"
import type { BlogPost } from "@/lib/blog-data"
import { formatDate } from "@/lib/utils/date"

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
          <time className="text-sm text-muted-foreground">{formatDate(post.date)}</time>
          <h3 className="text-base font-semibold text-foreground line-clamp-2 group-hover:text-primary transition-colors mt-2">
            {post.title}
          </h3>
          {post.subtitle && (
            <p className="text-sm text-muted-foreground line-clamp-2 mt-1">{post.subtitle}</p>
          )}
        </article>
      </Link>
    )
  }

  return (
    <Link href={`/blog/${post.slug}`}>
      <article className="group cursor-pointer bg-[#fafafa] rounded-xl overflow-hidden flex flex-col transition-transform duration-300 ease-in-out hover:-translate-y-1">
        <div className="relative overflow-hidden">
          <img
            src={post.image || "/placeholder.svg"}
            alt={post.title}
            className="w-full h-[200px] object-cover"
          />
        </div>
        <div className="p-6 flex flex-col flex-1">
          <div className="flex items-center gap-2 mb-4 text-sm text-[#666]">
            <time>{formatDate(post.date)}</time>
            <span>•</span>
            <span>{post.readTime} min read</span>
          </div>
          <h3 className="text-xl font-semibold text-[#1a1a1a] mb-3 leading-[1.4]">
            {post.title}
          </h3>
          {post.subtitle && (
            <p className="text-[0.95rem] text-[#666] leading-[1.6] mb-4">{post.subtitle}</p>
          )}
          <div className="mt-auto pt-4">
            <span className="text-sm font-medium text-[#1a1a1a]">{post.author.name}</span>
          </div>
        </div>
      </article>
    </Link>
  )
}
