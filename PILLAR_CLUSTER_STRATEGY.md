# Pillar-Cluster SEO Strategy for Roundi Blog

## Visual Structure

```
                         ┌─────────────────┐
                         │   Homepage      │
                         │  (roundi.africa)│
                         └────────┬────────┘
                                  │
                    ┌─────────────┼─────────────┐
                    │             │             │
                    ▼             ▼             ▼
              ┌─────────┐   ┌─────────┐   ┌─────────┐
              │  Blog   │   │  FAQ    │   │  CTA    │
              │ Index   │   │ Section │   │ Buttons │
              └────┬────┘   └────┬────┘   └─────────┘
                   │             │
                   │   ┌─────────┴──────┐
                   │   │                │
                   │   ▼                ▼
                   │  Links to:    Links to:
                   │  • Uber/Bolt  • Uber/Bolt
                   │  • Leta       • Leta
                   │
                   ▼
        ┌──────────────────────┐
        │   PILLAR ARTICLE     │
        │  Delivery Management │
        │   Software Kenya     │
        │                      │
        │  Target: 2000 words  │
        │  Slug: delivery-     │
        │  management-software-│
        │  kenya               │
        └──────────┬───────────┘
                   │
        ┌──────────┼──────────┐
        │          │          │
        ▼          ▼          ▼
   ┌────────┐ ┌────────┐ ┌────────┐
   │Roundi  │ │Roundi  │ │Roundi  │
   │  vs    │ │  vs    │ │  vs    │
   │ Sendy  │ │ Leta   │ │ Uber/  │
   │        │ │        │ │ Bolt   │
   │~1000   │ │~800    │ │~800    │
   │words   │ │words   │ │words   │
   └───┬────┘ └───┬────┘ └───┬────┘
       │          │          │
       └──────────┼──────────┘
                  │
         All link back to:
              PILLAR
```

---

## Internal Linking Map

### Homepage → Everything

**From Homepage FAQ Section:**
- "How is Roundi different from Uber delivery?" → `/blog/roundi-vs-uber-bolt-delivery`
- "How is Roundi different from Leta?" → `/blog/roundi-vs-leta`

**From Homepage (NEW - Optional):**
- Add link to pillar article in Features or Intro section
- Example: "Learn more about [delivery management software in Kenya →](/blog/delivery-management-software-kenya)"

---

### Pillar Article → Comparison Articles

**From: `/blog/delivery-management-software-kenya`**

**Links to all 3 comparisons:**

1. **In "On-Demand Marketplaces" Section:**
   ```
   [Read more: Roundi vs Uber & Bolt →](/blog/roundi-vs-uber-bolt-delivery)
   ```

2. **In "Enterprise Logistics Platforms" Section:**
   ```
   [Read more: Roundi vs Leta →](/blog/roundi-vs-leta)
   ```

3. **In "What Happened to Sendy" Section:**
   ```
   [Read more: Roundi vs Sendy →](/blog/roundi-vs-sendy)
   ```

4. **In "Comparison Resources" Section (Near End):**
   ```
   * [Roundi vs Sendy: What SMEs Learned →](/blog/roundi-vs-sendy)
   * [Roundi vs Leta: SME vs Enterprise →](/blog/roundi-vs-leta)
   * [Roundi vs Uber & Bolt: Management vs On-Demand →](/blog/roundi-vs-uber-bolt-delivery)
   ```

**Total Pillar→Comparison Links:** 6 (2 to each comparison)

---

### Comparison Articles → Pillar Article

**From Each Comparison:**

**At the end, before "Related Comparisons":**
```markdown
## Want to Learn More?

This comparison is part of our complete guide to delivery management in Kenya.

[Read: Delivery Management Software in Kenya — Complete Guide →](/blog/delivery-management-software-kenya)
```

---

### Comparison Articles → Other Comparisons

**From Each Comparison (in "Related Comparisons" section):**

**Example from Sendy article:**
```markdown
### Related Comparisons

Want to see how Roundi compares to other platforms?

* [Roundi vs Leta: SME vs Enterprise →](/blog/roundi-vs-leta)
* [Roundi vs Uber & Bolt: Management vs On-Demand →](/blog/roundi-vs-uber-bolt-delivery)
```

**Each comparison links to the other 2 comparisons**

---

### Blog Index → Featured Articles

**From: `/blog`**

**Add a "Featured Guides" section:**

```tsx
<section className="mb-12">
  <h2 className="text-3xl font-bold mb-6">Featured Guide</h2>
  <div className="bg-[#c8e298]/10 border border-[#c8e298]/30 rounded-xl p-8">
    <h3 className="text-2xl font-bold mb-4">
      Delivery Management Software in Kenya: Complete Guide
    </h3>
    <p className="text-muted-foreground mb-6">
      Everything Kenyan SMEs need to know about choosing and using delivery management software in 2025
    </p>
    <Link
      href="/blog/delivery-management-software-kenya"
      className="inline-flex items-center gap-2 text-[#162318] font-semibold hover:underline"
    >
      Read the complete guide →
    </Link>
  </div>
</section>

<section className="mb-12">
  <h2 className="text-3xl font-bold mb-6">Platform Comparisons</h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {/* Comparison article cards */}
  </div>
</section>
```

---

## SEO Benefits of This Structure

### 1. Topic Authority
- Pillar article establishes you as the authority on "delivery management software Kenya"
- Comparison articles target specific comparison searches
- All link together = stronger topic cluster

### 2. Keyword Coverage

**Pillar Article Targets:**
- Delivery management software Kenya (primary)
- Delivery management system Kenya
- Best delivery software Kenya
- How to manage deliveries Kenya

**Comparison Articles Target:**
- Roundi vs Sendy
- Sendy alternatives Kenya
- Roundi vs Leta
- Leta alternatives SME
- Roundi vs Uber delivery
- Uber alternatives business Kenya

**Combined Coverage:** 15+ high-intent keywords

### 3. Internal Link Equity

```
Homepage (high authority)
    ↓ passes link juice to
Pillar Article
    ↓ passes link juice to
Comparison Articles
    ↓ link back to
Pillar Article (reinforces authority)
```

### 4. User Journey

**Discovery Path:**
```
Google: "Sendy alternatives Kenya"
    ↓
Lands on: Roundi vs Sendy comparison
    ↓
Reads comparison
    ↓
Clicks: "Complete Guide" link
    ↓
Reads pillar article
    ↓
Clicks: "Get Early Access" CTA
    ↓
Conversion!
```

---

## Content Calendar

### Week 1: Foundation
- ✅ Build technical infrastructure (DONE)
- ⏳ Add Pillar Article to Sanity
- ⏳ Add comparison articles to Sanity

### Week 2: Enhancement
- Update blog index with Featured Guide section
- Create cover images for all articles
- Add structured data to pillar

### Week 3: Promotion
- Share pillar article on LinkedIn
- Share comparison articles individually
- Email to early access list

### Week 4: Monitor & Optimize
- Track rankings
- Monitor engagement
- Update based on data

---

## Implementation Checklist

### Content Creation

- [ ] **Pillar Article** (`/blog/delivery-management-software-kenya`)
  - [ ] Add to Sanity CMS
  - [ ] Link to all 3 comparisons (6 total links)
  - [ ] Add CTAs to Early Access
  - [ ] Add cover image
  - [ ] Publish

- [ ] **Roundi vs Sendy** (`/blog/roundi-vs-sendy`)
  - [ ] Add to Sanity CMS
  - [ ] Link back to pillar article
  - [ ] Link to other 2 comparisons
  - [ ] Add comparison table
  - [ ] Add cover image
  - [ ] Publish

- [ ] **Roundi vs Leta** (`/blog/roundi-vs-leta`)
  - [ ] Add to Sanity CMS
  - [ ] Link back to pillar article
  - [ ] Link to other 2 comparisons
  - [ ] Add comparison table
  - [ ] Add cover image
  - [ ] Publish

- [ ] **Roundi vs Uber/Bolt** (`/blog/roundi-vs-uber-bolt-delivery`)
  - [ ] Add to Sanity CMS
  - [ ] Link back to pillar article
  - [ ] Link to other 2 comparisons
  - [ ] Add comparison table
  - [ ] Add cover image
  - [ ] Publish

### Site Updates

- [ ] **Homepage FAQ** (DONE ✅)
  - [x] Link to Uber/Bolt comparison
  - [x] Link to Leta comparison

- [ ] **Blog Index Page** (Optional)
  - [ ] Add "Featured Guide" section highlighting pillar
  - [ ] Add "Platform Comparisons" section
  - [ ] Feature comparison articles prominently

### SEO

- [ ] **Pillar Article SEO**
  - [ ] Meta title optimized
  - [ ] Meta description compelling
  - [ ] Structured data (Article schema)
  - [ ] Internal links verified
  - [ ] URL submitted to Google Search Console

- [ ] **Each Comparison Article SEO**
  - [ ] Meta titles optimized
  - [ ] Meta descriptions compelling
  - [ ] FAQ schema added
  - [ ] Internal links verified
  - [ ] URLs submitted to Google Search Console

### Monitoring

- [ ] **Set up tracking**
  - [ ] Google Analytics events
  - [ ] Google Search Console monitoring
  - [ ] Rank tracking for target keywords
  - [ ] Internal link click tracking

---

## Link Anchor Text Strategy

### From Pillar to Comparisons

**Good anchor text (use these):**
- "Roundi vs Uber & Bolt"
- "Roundi vs Leta"
- "Roundi vs Sendy"
- "Read the full comparison"
- "Learn how they compare"

**Avoid:**
- "Click here"
- "Read more"
- Generic text

### From Comparisons to Pillar

**Good anchor text:**
- "Delivery Management Software in Kenya — Complete Guide"
- "Complete guide to delivery management in Kenya"
- "Our complete guide"

### Between Comparisons

**Good anchor text:**
- "Roundi vs [Competitor]: [Benefit]"
- Example: "Roundi vs Leta: SME vs Enterprise"

---

## Content Refresh Schedule

### Monthly
- Update statistics and data
- Add new FAQs based on customer questions
- Refresh examples

### Quarterly
- Review keyword rankings
- Add new comparisons if needed
- Update competitor information
- Expand pillar article with new sections

### Annually
- Major content audit
- Rewrite underperforming sections
- Add new chapter to pillar if market changes

---

## Expected Outcomes

### Month 1-2
- Articles indexed in Google
- Initial traffic from brand searches
- Internal link structure established

### Month 3-4
- Rankings for comparison keywords
- Featured snippets possible
- Organic traffic growth begins

### Month 6+
- Top 5 rankings for primary keywords
- Pillar article ranking for "delivery management software Kenya"
- Comparisons ranking for specific searches
- Consistent organic traffic

---

## Quick Reference: All URLs

```
Homepage:
https://roundi.africa

Pillar:
https://roundi.africa/blog/delivery-management-software-kenya

Comparisons:
https://roundi.africa/blog/roundi-vs-sendy
https://roundi.africa/blog/roundi-vs-leta
https://roundi.africa/blog/roundi-vs-uber-bolt-delivery

CTAs:
https://roundi.africa/early-access-form
https://roundi.africa/contact
```

---

## Next Steps

1. **Add Pillar Article to Sanity** (use `PILLAR_ARTICLE_CONTENT.md`)
2. **Add Comparison Articles to Sanity** (use `COMPARISON_CONTENT_TEMPLATES.md` - updated with pillar links)
3. **Verify all internal links** work after publishing
4. **Submit to Google Search Console**
5. **Monitor performance** weekly

---

## Pro Tips

### For Maximum SEO Impact:
- Link from pillar to comparisons high up in the content (not just at bottom)
- Use descriptive anchor text
- Keep content fresh and updated
- Add new comparisons as competitors emerge

### For Maximum User Value:
- Make it easy to navigate between articles
- Use "Related Content" sections generously
- Add CTAs at natural points in content
- Track which paths users take

### For Maximum Conversion:
- Add Early Access CTAs in pillar article
- Include social proof in comparisons
- Make it easy to contact you
- Track conversion paths from each article

---

This pillar-cluster strategy will establish Roundi as the authority on delivery management software in Kenya while capturing high-intent comparison searches. 🚀
