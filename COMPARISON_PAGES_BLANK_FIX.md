# Why Comparison Pages Are Blank - And How to Fix It

## The Issue

The comparison article pages (`/blog/roundi-vs-sendy`, `/blog/roundi-vs-leta`, `/blog/roundi-vs-uber-bolt-delivery`) are blank because **the blog posts don't exist in Sanity CMS yet**.

I built all the technical infrastructure (components, schemas, rendering), but the actual content needs to be added to your CMS.

## What I've Fixed ✅

1. **Updated Sanity Studio Schema** - Added comparison table support
2. **Created Components** - ComparisonTable renders beautifully
3. **Updated Renderer** - PortableTextRenderer supports comparison tables
4. **Added Internal Links** - Homepage FAQ links to comparison articles

## What Needs to Happen Next

You have **two options** to add the comparison articles:

---

## Option 1: Manual (Recommended) - Use Sanity Studio UI

### Step 1: Start Sanity Studio

```bash
cd ../roundi-sanity-studio
npm run dev
```

This opens Sanity Studio at `http://localhost:3333`

### Step 2: Create Each Article

1. Click **"Create"** → **"Blog Post"**
2. Fill in the fields using the content from `COMPARISON_CONTENT_TEMPLATES.md`
3. **For "Roundi vs Sendy" for example:**
   - Title: `Roundi vs Sendy: What Kenyan SMEs Learned After Sendy Closed`
   - Slug: Click "Generate" or enter `roundi-vs-sendy`
   - Category: `Delivery Management`
   - Tags: `Sendy`, `Comparison`, `Alternatives`, `Kenya`
   - Featured: ✅ Check this
   - Read Time: `5`
   - Author: `Roundi Team`
   - Date: Today's date

4. **Add Main Content:**
   - Copy paragraphs from `COMPARISON_CONTENT_TEMPLATES.md`
   - Add **Divider** blocks between sections
   - Add a **Comparison Table** block (you'll see this option now!)
   - Fill in the comparison data

5. **Add Cover Image:**
   - Upload a placeholder image or create a comparison graphic

6. **Publish!**

### Step 3: Repeat for Other Articles

- Roundi vs Leta
- Roundi vs Uber/Bolt Delivery

---

## Option 2: Automated - Run a Script

### Prerequisites

You need a Sanity API token with write access.

### Step 1: Get Sanity API Token

1. Go to https://www.sanity.io/manage
2. Select your project (8029w8ob)
3. Go to **API** → **Tokens**
4. Click **"Add API token"**
5. Name it: "Content Creator"
6. Permissions: **Editor**
7. Copy the token

### Step 2: Add Token to Environment

```bash
cd ../roundi-sanity-studio
echo "SANITY_API_TOKEN=your-token-here" >> .env
```

### Step 3: Run the Script

```bash
cd ../roundi-sanity-studio
npx tsx scripts/add-comparison-articles.ts
```

This will create all 3 comparison articles automatically!

**Note:** The script currently only has the Sendy article. I can add the other two if you want to go this route.

---

## Verification Steps

After adding articles (either way):

1. **Check Sanity Studio** - You should see 3 new published blog posts
2. **Visit your site:**
   - http://localhost:3000/blog/roundi-vs-sendy
   - http://localhost:3000/blog/roundi-vs-leta
   - http://localhost:3000/blog/roundi-vs-uber-bolt-delivery
3. **Check the homepage FAQ** - Links should now work

---

## Quick Fix Summary

**Why blank?** → No articles in Sanity CMS yet
**Solution** → Add articles via Sanity Studio UI (Option 1) or script (Option 2)
**Status** → Infrastructure complete, just needs content

---

## Recommended Next Steps

I suggest **Option 1 (Manual)** because:
- You can see exactly what you're creating
- You can customize content as you go
- You can upload proper cover images
- No need to manage API tokens
- More control over the content

But if you want speed and have lots of articles to create, **Option 2 (Script)** is faster.

---

## Need Help?

Want me to:
1. **Complete the script** with all 3 articles?
2. **Walk you through** adding one article manually?
3. **Create cover images** for the articles?
4. **Deploy the schema changes** to production Sanity?

Let me know which option you prefer!
