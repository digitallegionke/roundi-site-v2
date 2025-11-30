# Deployment Guide

## 🚀 Deploy to Vercel (Recommended)

### Step 1: Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit: Blog with Notion CMS"
git branch -M main
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

### Step 2: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click **"New Project"**
3. Import your GitHub repository
4. Configure Environment Variables:
   - `NOTION_API_KEY`: Your Notion integration token
   - `NOTION_DATABASE_ID`: Your Notion database ID
5. Click **"Deploy"**

### Step 3: Use in Framer

Once deployed, you'll get a URL like: `https://your-project.vercel.app`

#### Option A: Embed HTML (Recommended)
In Framer, add a **Custom Code** component and paste:
```html
<iframe
  src="https://your-project.vercel.app/embed.html"
  width="100%"
  height="800px"
  frameborder="0"
  style="border: none; overflow: hidden;"
></iframe>
```

#### Option B: Direct Embed
Or just use the embed URL directly: `https://your-project.vercel.app/embed.html`

---

## 📍 Available Routes

After deployment:

- **Blog Embed**: `https://your-project.vercel.app/embed.html`
- **Blog API**: `https://your-project.vercel.app/api/blog`
- **Blog Home**: `https://your-project.vercel.app`
- **Blog List**: `https://your-project.vercel.app/blog`
- **Blog Post**: `https://your-project.vercel.app/blog/[slug]`

---

## ✅ What's Already Configured

✅ Auto-detection of production vs development URLs
✅ CORS headers for cross-origin requests
✅ Notion CMS integration
✅ OpenRunde custom fonts
✅ Responsive design
✅ API endpoint for blog data

---

## 🔧 Update Notion Credentials

After deployment, go to Vercel Dashboard:
1. Select your project
2. Go to **Settings** → **Environment Variables**
3. Update:
   - `NOTION_API_KEY`
   - `NOTION_DATABASE_ID`
4. Redeploy if needed

---

## 📝 Notion Database Setup

Your Notion database should have these properties:
- **Title** or **Name** (title) - Post title
- **Slug** (rich text) - URL slug
- **Excerpt** (rich text) - Short description
- **Date** (date) - Publication date
- **Published** (checkbox) - Show/hide posts
- **Featured** (checkbox) - Mark as featured
- **ReadTime** (number) - Reading time
- **Author** (rich text) - Author name
- **AuthorTitle** (rich text) - Author job title
- **AuthorAvatar** (files) - Author photo
- **Image** or **Cover** (files) - Post cover image
- **Category** (select) - Post category

---

## 🎨 Customization

To customize colors/styles in the embed, edit:
`public/embed.html` (lines 7-220 for CSS)
