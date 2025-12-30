import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './sanity/schemas'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || import.meta.env.VITE_SANITY_PROJECT_ID || '8029w8ob'
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || import.meta.env.VITE_SANITY_DATASET || 'production'

export default defineConfig({
  name: 'default',
  title: 'Roundi Blog',

  projectId,
  dataset,

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
