# Sanity Studio Separation

## Overview

The Sanity Studio has been separated into its own standalone project for better organization and deployment flexibility.

## Project Structure

### Main Site (this repository)
- **Purpose**: Roundi website frontend
- **Sanity Usage**: Reads content from Sanity CMS via API
- **Dependencies**:
  - `@sanity/image-url` - For image URL generation
  - `next-sanity` - For fetching content in Next.js

### Sanity Studio (separate repository)
- **Location**: `../roundi-sanity-studio/`
- **Purpose**: Content management interface
- **Deployment**: Separate Vercel deployment
- **Repository**: Create a separate GitHub repository

## Configuration

Both projects connect to the same Sanity project:
- **Project ID**: `8029w8ob`
- **Dataset**: `production`

## Development Workflow

### Running Locally

**Main Site:**
```bash
npm run dev
```

**Sanity Studio (in separate directory):**
```bash
cd ../roundi-sanity-studio
npm run dev
```

### Deployment

**Main Site:**
- Deploy via Vercel (existing setup)
- Requires environment variables:
  - `NEXT_PUBLIC_SANITY_PROJECT_ID=8029w8ob`
  - `NEXT_PUBLIC_SANITY_DATASET=production`

**Sanity Studio:**
- Deploy separately to Vercel (see `roundi-sanity-studio/DEPLOYMENT.md`)
- Create separate GitHub repository
- Deploy to Vercel as standalone project

## Benefits

1. **Separation of Concerns**: Content management is separate from the website
2. **Independent Deployment**: Update studio without redeploying the site
3. **Cleaner Dependencies**: Each project has only what it needs
4. **Easier Collaboration**: Content editors only need access to the studio

## Content Management

To manage blog content:
1. Access the deployed Sanity Studio (once deployed to Vercel)
2. Or run locally: `cd ../roundi-sanity-studio && npm run dev`
3. Make changes to blog posts
4. Changes are immediately available to the main site via the Sanity API
