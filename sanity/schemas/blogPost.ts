import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'blogPost',
  title: 'Blog Post',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Title',
      type: 'string',
      description: 'The blog post title (matches Contentful "name" field)',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Optional subtitle (can be rich text)',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'copy',
      title: 'Main Content',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H1', value: 'h1' },
            { title: 'H2', value: 'h2' },
            { title: 'H3', value: 'h3' },
            { title: 'H4', value: 'h4' },
            { title: 'Quote', value: 'blockquote' },
          ],
          lists: [
            { title: 'Bullet', value: 'bullet' },
            { title: 'Numbered', value: 'number' },
          ],
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
              { title: 'Code', value: 'code' },
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Link',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'URL',
                  },
                ],
              },
            ],
          },
        },
        {
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative Text',
            },
            {
              name: 'caption',
              type: 'string',
              title: 'Caption',
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt (Fallback Content)',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Rich text excerpt used as fallback if main content is empty (matches Contentful "excerpt" field)',
    }),
    defineField({
      name: 'cover',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Featured image for the post (matches Contentful "cover" field)',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'imageCredits',
      title: 'Image Credits',
      type: 'string',
      description: 'Attribution for the cover image',
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'date',
      description: 'Publication date (matches Contentful "date" field)',
      initialValue: () => new Date().toISOString().split('T')[0],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'author',
      title: 'Author Name',
      type: 'string',
      description: 'Author name as simple text (matches Contentful "author" field)',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'authorBio',
      title: 'Author Bio',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Author biography (can be rich text, matches Contentful "authorBio" field)',
    }),
    defineField({
      name: 'readTime',
      title: 'Read Time (minutes)',
      type: 'number',
      description: 'Estimated reading time in minutes. Leave empty to auto-calculate.',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Delivery Management', value: 'Delivery Management' },
          { title: 'Logistics', value: 'Logistics' },
          { title: 'Technology', value: 'Technology' },
          { title: 'Business', value: 'Business' },
          { title: 'Customer Success', value: 'Customer Success' },
          { title: 'General', value: 'General' },
        ],
      },
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    }),
    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      description: 'Mark this post as featured',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'category',
      media: 'cover',
      date: 'date',
    },
    prepare(selection) {
      const { title, subtitle, media, date } = selection
      return {
        title,
        subtitle: `${subtitle || 'Uncategorized'} • ${new Date(date).toLocaleDateString()}`,
        media,
      }
    },
  },
})
