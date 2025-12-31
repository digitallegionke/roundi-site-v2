"use client"

import { PortableText } from '@portabletext/react'
import imageUrlBuilder from '@sanity/image-url'
import { client } from '@/lib/sanity.client'
import Link from 'next/link'
import { ComparisonTable } from './comparison-table'

const builder = imageUrlBuilder(client)

function urlFor(source: any) {
  return builder.image(source)
}

const portableTextComponents = {
  types: {
    image: ({ value }: any) => {
      if (!value?.asset) return null
      return (
        <div className="my-8">
          <img
            src={urlFor(value).width(1200).url()}
            alt={value.alt || ' '}
            className="rounded-lg shadow-md max-w-full h-auto"
          />
          {value.caption && (
            <p className="text-sm text-muted-foreground mt-2 text-center italic">
              {value.caption}
            </p>
          )}
        </div>
      )
    },
    divider: () => {
      return (
        <hr className="my-8 border-t border-border" />
      )
    },
    comparisonTable: ({ value }: any) => {
      if (!value?.rows || !value?.competitor) return null
      return (
        <ComparisonTable
          competitor={value.competitor}
          rows={value.rows}
        />
      )
    },
  },
  block: {
    h1: ({ children }: any) => (
      <h1 className="text-4xl font-bold text-foreground mb-6 mt-8">{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-3xl font-bold text-foreground mb-4 mt-6">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-2xl font-bold text-foreground mb-4 mt-6">{children}</h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-xl font-bold text-foreground mb-3 mt-4">{children}</h4>
    ),
    normal: ({ children }: any) => (
      <p className="text-base text-foreground leading-relaxed mb-6">{children}</p>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-gray-300 pl-4 italic my-6 text-gray-700">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="list-disc pl-6 mb-6 space-y-2">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className="list-decimal pl-6 mb-6 space-y-2">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }: any) => (
      <li className="text-foreground">{children}</li>
    ),
    number: ({ children }: any) => (
      <li className="text-foreground">{children}</li>
    ),
  },
  marks: {
    strong: ({ children }: any) => (
      <strong className="font-bold">{children}</strong>
    ),
    em: ({ children }: any) => (
      <em className="italic">{children}</em>
    ),
    code: ({ children }: any) => (
      <code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-sm font-mono">
        {children}
      </code>
    ),
    link: ({ children, value }: any) => {
      const href = value?.href || ''
      const isExternal = href.startsWith('http')

      if (isExternal) {
        return (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 underline"
          >
            {children}
          </a>
        )
      }

      return (
        <Link href={href} className="text-blue-600 hover:text-blue-800 underline">
          {children}
        </Link>
      )
    },
  },
}

interface PortableTextRendererProps {
  content: any
}

export function PortableTextRenderer({ content }: PortableTextRendererProps) {
  if (!content) return null

  return (
    <div className="prose prose-lg dark:prose-invert max-w-none">
      <PortableText value={content} components={portableTextComponents} />
    </div>
  )
}
