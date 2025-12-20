"use client"

import { useState, useMemo } from "react"
import type { BlogPost } from "@/lib/blog-data"
import { BlogList } from "./blog-list"

interface BlogPageContentProps {
  posts: BlogPost[]
}

export function BlogPageContent({ posts }: BlogPageContentProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All")

  // Extract unique categories from posts
  const categories = useMemo(() => {
    const uniqueCategories = new Set<string>()
    posts.forEach((post) => {
      if (post.category) {
        uniqueCategories.add(post.category)
      }
    })
    return ["All", ...Array.from(uniqueCategories).sort()]
  }, [posts])

  // Filter posts based on selected category
  const filteredPosts = useMemo(() => {
    if (selectedCategory === "All") {
      return posts
    }
    return posts.filter((post) => post.category === selectedCategory)
  }, [posts, selectedCategory])

  return (
    <>
      {/* Filter Chips */}
      <section className="max-w-7xl mx-auto pb-8">
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Blog Posts */}
      <section className="max-w-7xl mx-auto py-8">
        <BlogList posts={filteredPosts} />
      </section>
    </>
  )
}
