import { NextResponse } from "next/server"
import { getContentfulBlogPosts } from "@/lib/contentful"

export async function GET() {
  try {
    const posts = await getContentfulBlogPosts()

    return NextResponse.json({
      success: true,
      posts: posts,
    }, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    })
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    return NextResponse.json({
      success: false,
      error: 'Failed to fetch blog posts',
      posts: [],
    }, {
      status: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    })
  }
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  })
}
