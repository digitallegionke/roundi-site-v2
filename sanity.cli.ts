import { defineCliConfig } from 'sanity/cli'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || import.meta.env.VITE_SANITY_PROJECT_ID || '8029w8ob'
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || import.meta.env.VITE_SANITY_DATASET || 'production'

export default defineCliConfig({
  api: {
    projectId,
    dataset,
  },
  studioHost: 'roundi-blog',
})
