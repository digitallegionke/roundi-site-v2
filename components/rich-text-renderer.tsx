"use client"

interface RichTextRendererProps {
  content: any
}

export function RichTextRenderer({ content }: RichTextRendererProps) {
  if (!content || !content.content) {
    return null
  }

  const renderNode = (node: any, index: number): React.ReactNode => {
    const key = `${node.nodeType}-${index}`

    switch (node.nodeType) {
      case "text":
        if (!node.value) return null
        if (node.marks && node.marks.length > 0) {
          let text = <span key={key}>{node.value}</span>
          node.marks.forEach((mark: any) => {
            if (mark.type === "bold") {
              text = <strong key={`${key}-bold`}>{node.value}</strong>
            } else if (mark.type === "italic") {
              text = <em key={`${key}-italic`}>{node.value}</em>
            } else if (mark.type === "underline") {
              text = <u key={`${key}-underline`}>{node.value}</u>
            } else if (mark.type === "code") {
              text = <code key={`${key}-code`} className="bg-gray-100 px-1 rounded">{node.value}</code>
            }
          })
          return text
        }
        return node.value

      case "paragraph":
        return (
          <p key={key} className="text-base text-foreground leading-relaxed mb-6">
            {node.content?.map((child: any, i: number) => renderNode(child, i))}
          </p>
        )

      case "heading-1":
        return (
          <h1 key={key} className="text-4xl font-bold text-foreground mb-6 mt-8">
            {node.content?.map((child: any, i: number) => renderNode(child, i))}
          </h1>
        )

      case "heading-2":
        return (
          <h2 key={key} className="text-3xl font-bold text-foreground mb-4 mt-6">
            {node.content?.map((child: any, i: number) => renderNode(child, i))}
          </h2>
        )

      case "heading-3":
        return (
          <h3 key={key} className="text-2xl font-bold text-foreground mb-4 mt-6">
            {node.content?.map((child: any, i: number) => renderNode(child, i))}
          </h3>
        )

      case "heading-4":
        return (
          <h4 key={key} className="text-xl font-bold text-foreground mb-3 mt-4">
            {node.content?.map((child: any, i: number) => renderNode(child, i))}
          </h4>
        )

      case "heading-5":
        return (
          <h5 key={key} className="text-lg font-bold text-foreground mb-3 mt-4">
            {node.content?.map((child: any, i: number) => renderNode(child, i))}
          </h5>
        )

      case "heading-6":
        return (
          <h6 key={key} className="text-base font-bold text-foreground mb-2 mt-3">
            {node.content?.map((child: any, i: number) => renderNode(child, i))}
          </h6>
        )

      case "unordered-list":
        return (
          <ul key={key} className="list-disc pl-6 mb-6 space-y-2">
            {node.content?.map((child: any, i: number) => renderNode(child, i))}
          </ul>
        )

      case "ordered-list":
        return (
          <ol key={key} className="list-decimal pl-6 mb-6 space-y-2">
            {node.content?.map((child: any, i: number) => renderNode(child, i))}
          </ol>
        )

      case "list-item":
        const listItemContent = node.content?.map((child: any, i: number) => {
          // For list items, we want to extract the text without the paragraph wrapper
          if (child.nodeType === "paragraph" && child.content) {
            return child.content.map((textNode: any, j: number) => renderNode(textNode, j))
          }
          return renderNode(child, i)
        })

        return (
          <li key={key} className="text-foreground">
            {listItemContent}
          </li>
        )

      case "hyperlink":
        return (
          <a
            key={key}
            href={node.data?.uri}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 underline"
          >
            {node.content?.map((child: any, i: number) => renderNode(child, i))}
          </a>
        )

      case "blockquote":
        return (
          <blockquote key={key} className="border-l-4 border-gray-300 pl-4 italic my-6 text-gray-700">
            {node.content?.map((child: any, i: number) => renderNode(child, i))}
          </blockquote>
        )

      case "hr":
        return <hr key={key} className="my-8 border-gray-300" />

      case "code":
        return (
          <pre key={key} className="bg-gray-100 p-4 rounded mb-6 overflow-x-auto">
            <code>{node.content?.map((child: any, i: number) => renderNode(child, i))}</code>
          </pre>
        )

      default:
        // For unknown node types, try to render children
        if (node.content) {
          return node.content.map((child: any, i: number) => renderNode(child, i))
        }
        return null
    }
  }

  return (
    <div className="prose prose-lg dark:prose-invert max-w-none">
      {content.content.map((node: any, index: number) => renderNode(node, index))}
    </div>
  )
}
