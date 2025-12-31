# Quick Start: Pillar-Cluster Content Strategy

## What You're Building

A **pillar-cluster SEO content hub** that establishes Roundi as the authority on delivery management in Kenya.

```
           Homepage
               ↓
        Pillar Article
     (Main comprehensive guide)
               ↓
     ┌─────────┼─────────┐
     ↓         ↓         ↓
  Sendy     Leta    Uber/Bolt
(Comparisons link back to pillar)
```

---

## The 4 Articles You Need to Add

### 1. **Pillar Article** (Main Hub)
- **Title**: Delivery Management Software in Kenya: Complete Guide for SMEs
- **Slug**: `delivery-management-software-kenya`
- **Length**: ~2000 words
- **Links**: To all 3 comparison articles
- **Content**: See `PILLAR_ARTICLE_CONTENT.md`

### 2. **Roundi vs Sendy** (Comparison)
- **Title**: Roundi vs Sendy: What Kenyan SMEs Learned After Sendy Closed
- **Slug**: `roundi-vs-sendy`
- **Length**: ~1000 words
- **Links**: Back to pillar + to other 2 comparisons
- **Content**: See `COMPARISON_CONTENT_TEMPLATES.md` (Section 1)

### 3. **Roundi vs Leta** (Comparison)
- **Title**: Roundi vs Leta: SME Delivery Management vs Enterprise Logistics
- **Slug**: `roundi-vs-leta`
- **Length**: ~800 words
- **Links**: Back to pillar + to other 2 comparisons
- **Content**: See `COMPARISON_CONTENT_TEMPLATES.md` (Section 2)

### 4. **Roundi vs Uber/Bolt** (Comparison)
- **Title**: Roundi vs Uber & Bolt Delivery: Managing Deliveries vs Buying Trips
- **Slug**: `roundi-vs-uber-bolt-delivery`
- **Length**: ~800 words
- **Links**: Back to pillar + to other 2 comparisons
- **Content**: See `COMPARISON_CONTENT_TEMPLATES.md` (Section 3)

---

## Step-by-Step: Add to Sanity CMS

### Step 1: Start Sanity Studio

```bash
cd ../roundi-sanity-studio
npm run dev
```

Opens at: `http://localhost:3333`

---

### Step 2: Add Pillar Article First

1. **Click "Create" → "Blog Post"**

2. **Fill in metadata:**
   - Title: `Delivery Management Software in Kenya: Complete Guide for SMEs`
   - Click "Generate slug" → Should create: `delivery-management-software-kenya`
   - Subtitle: `Everything Kenyan SMEs need to know about choosing and using delivery management software in 2025`
   - Category: `Delivery Management`
   - Tags: `Delivery Management`, `Software`, `Kenya`, `SME`, `Guide`
   - Featured: ✅ Check
   - Read Time: `8`
   - Author: `Roundi Team`
   - Date: Today

3. **Add main content:**
   - Open `PILLAR_ARTICLE_CONTENT.md`
   - Copy content section by section
   - Add as text blocks in "Main Content (copy)" field
   - Use H2 for main headings (##)
   - Use H3 for subheadings (###)
   - Add **Divider** blocks between major sections

4. **Add internal links:**
   When you see link text like `[Roundi vs Sendy →](/blog/roundi-vs-sendy)`:
   - Select the text "Roundi vs Sendy →"
   - Click the link icon
   - Enter URL: `/blog/roundi-vs-sendy`
   - Repeat for all links

5. **Add cover image** (placeholder or create graphic)

6. **Save as draft** (don't publish yet)

---

### Step 3: Add Comparison Articles

**Do this for each comparison article:**

1. **Create new blog post**

2. **Fill metadata** (from `COMPARISON_CONTENT_TEMPLATES.md`)

3. **Add content:**
   - Copy from templates
   - Add dividers between sections
   - Add **Comparison Table** block (THIS IS NEW!)

4. **Add Comparison Table:**
   - Click `+` in content area
   - Select "Comparison Table"
   - Competitor Name: (e.g., "Sendy (Before Closure)")
   - Add rows:
     - Click "Add row"
     - Feature: "Rider Management"
     - Roundi: "You manage your own riders"
     - Competitor: "Marketplace model"
     - Repeat for all rows in template

5. **Add internal links:**
   - Link back to pillar article
   - Link to other comparisons

6. **Add cover image**

7. **Save as draft**

---

### Step 4: Verify Links

Before publishing, check all internal links:

**From Pillar:**
- [ ] Link to Sendy comparison works
- [ ] Link to Leta comparison works
- [ ] Link to Uber/Bolt comparison works
- [ ] All 6 total links from pillar are added

**From Each Comparison:**
- [ ] Link back to pillar works
- [ ] Links to other 2 comparisons work
- [ ] Total 3 links from each comparison

---

### Step 5: Publish All 4 Articles

1. **Publish Pillar first**
2. **Then publish all 3 comparisons**
3. **Verify live URLs work:**
   - `/blog/delivery-management-software-kenya`
   - `/blog/roundi-vs-sendy`
   - `/blog/roundi-vs-leta`
   - `/blog/roundi-vs-uber-bolt-delivery`

---

## Quick Reference: Content Files

```
📄 PILLAR_ARTICLE_CONTENT.md
   └─ Complete pillar article content

📄 COMPARISON_CONTENT_TEMPLATES.md
   ├─ Roundi vs Sendy (Section 1)
   ├─ Roundi vs Leta (Section 2)
   └─ Roundi vs Uber/Bolt (Section 3)

📄 PILLAR_CLUSTER_STRATEGY.md
   └─ Visual diagrams & SEO strategy

📄 COMPARISON_SEO_DATA.md
   └─ Meta tags & structured data

📄 COMPARISON_PAGES_BLANK_FIX.md
   └─ Why pages are blank + solutions
```

---

## Expected Time

- **Pillar Article**: 20-30 minutes
- **Each Comparison**: 10-15 minutes
- **Total**: 60-75 minutes

---

## After Publishing Checklist

### Immediate (Same Day)

- [ ] Test all 4 article URLs load
- [ ] Click every internal link to verify
- [ ] Test on mobile device
- [ ] Check comparison tables render correctly

### Within 48 Hours

- [ ] Submit all 4 URLs to Google Search Console
- [ ] Share pillar article on LinkedIn
- [ ] Share comparison articles on social media

### Within 1 Week

- [ ] Monitor Google Search Console for indexing
- [ ] Check for any 404 errors
- [ ] Review analytics for initial traffic

---

## Common Issues & Solutions

### Issue: "Comparison Table doesn't appear in editor"

**Solution**:
1. Make sure Sanity Studio is restarted after schema changes
2. Refresh your browser
3. Try creating a new blog post
4. If still not showing, check `COMPARISON_PAGES_BLANK_FIX.md`

### Issue: "Internal links don't work"

**Solution**:
1. Make sure target articles are published (not draft)
2. Verify slug matches exactly (no typos)
3. Links should start with `/blog/` not `https://roundi.africa/blog/`

### Issue: "Dividers don't show up"

**Solution**:
1. This was fixed earlier - dividers should work
2. Make sure you're using the "Divider" block type
3. Check frontend is deployed with latest changes

---

## SEO Timeline

### Week 1-2: Indexing
- Google discovers and indexes articles
- Internal links recognized
- Site structure updated

### Month 1: Initial Rankings
- Articles appear in search results
- Usually page 2-3 for target keywords
- Internal link equity builds

### Month 3: Movement
- Rankings improve to page 1
- Featured snippets possible
- Comparison searches start converting

### Month 6+: Authority
- Top 5 rankings for primary keywords
- Pillar ranks for main topic
- Consistent organic traffic
- New articles benefit from cluster authority

---

## What Makes This Strategy Work

### 1. Topic Clustering
- Pillar establishes broad topic authority
- Comparisons target specific searches
- All reinforce each other via links

### 2. User Intent Matching
- Comparison searches → Comparison articles
- General research → Pillar article
- Both paths lead to conversion

### 3. Link Equity Flow
```
Homepage (authority)
    ↓
Pillar (receives authority)
    ↓
Comparisons (receive authority)
    ↓
Link back (reinforce pillar)
```

### 4. Conversion Paths
- Organic search → Article → CTA → Conversion
- Multiple entry points, same destination

---

## Maintenance Schedule

### Weekly
- Monitor rankings
- Check for comments/questions
- Track which articles drive traffic

### Monthly
- Update statistics if needed
- Add new FAQs based on questions
- Refresh examples

### Quarterly
- Content audit
- Update competitor information
- Add new comparisons if needed

---

## Success Metrics

### Track These:

**Traffic:**
- Organic sessions per article
- Entry pages from organic
- Time on page

**Rankings:**
- "Delivery management software Kenya"
- "Roundi vs [Competitor]"
- Position changes weekly

**Conversions:**
- Early access signups by source article
- Contact form submissions
- Internal link clicks

**Engagement:**
- Average time on page (target: 2+ min)
- Bounce rate (target: <60%)
- Pages per session

---

## You're Ready! 🚀

Everything is built and ready. You just need to:

1. **Add 4 articles to Sanity CMS** (60-75 min)
2. **Publish them all**
3. **Submit to Google**
4. **Monitor performance**

All content templates are ready to copy and paste. All technical infrastructure is complete. The internal linking structure is mapped out.

**Start with the pillar article, then add the three comparisons.**

Questions? Check the detailed guides:
- `PILLAR_ARTICLE_CONTENT.md` - Full pillar content
- `COMPARISON_CONTENT_TEMPLATES.md` - All comparison content
- `PILLAR_CLUSTER_STRATEGY.md` - SEO strategy details
- `COMPARISON_PAGES_BLANK_FIX.md` - Troubleshooting

**Let's go! 🎯**
