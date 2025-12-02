import type { BlogPost } from "@/lib/blog-data"
import { BlogCard } from "./blog-card"

interface BlogListProps {
  posts: BlogPost[]
  limit?: number
}

export function BlogList({ posts, limit }: BlogListProps) {
  const displayPosts = limit ? posts.slice(0, limit) : posts

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
      {displayPosts.map((post) => (
        <BlogCard key={post.id} post={post} />
      ))}
    </div>
  )
}
