# Comparison Articles Implementation Plan

## Executive Summary

This plan outlines the strategy and implementation steps for adding three high-intent SEO comparison articles to the Roundi website:

1. **Roundi vs Sendy** - Targeting legacy Sendy users
2. **Roundi vs Leta** - Positioning against enterprise solutions
3. **Roundi vs Uber/Bolt Delivery** - Differentiating from on-demand platforms

These articles will capture search traffic, support sales conversations, and establish Roundi's positioning in the Kenyan delivery management market.

---

## 1. Content Strategy

### Article Goals
- **SEO**: Capture high-intent comparison searches ("Roundi vs Sendy", "alternatives to Uber delivery Kenya", etc.)
- **GEO (AI Search)**: Provide quotable, authoritative comparisons for AI-generated answers
- **Sales Enablement**: Give prospects clear differentiation during sales conversations
- **Education**: Help SMEs understand delivery management vs. on-demand delivery

### Target Keywords Per Article

**Roundi vs Sendy:**
- "Sendy alternatives Kenya"
- "Sendy shutdown alternatives"
- "delivery management after Sendy"
- "what happened to Sendy Kenya"

**Roundi vs Leta:**
- "Leta alternatives for SMEs"
- "delivery management software Kenya"
- "SME logistics platform Kenya"
- "Roundi vs Leta"

**Roundi vs Uber/Bolt:**
- "Uber delivery alternatives Kenya"
- "manage own delivery riders"
- "delivery management vs on-demand"
- "Bolt business delivery alternatives"

---

## 2. Technical Implementation

### Phase 1: Schema Enhancement

**Add comparison table support to Sanity schema** (sanity/schemas/blogPost.ts)

Add a new block type for comparison tables:

```typescript
{
  type: 'object',
  name: 'comparisonTable',
  title: 'Comparison Table',
  fields: [
    {
      name: 'rows',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'feature', type: 'string', title: 'Feature' },
            { name: 'roundi', type: 'string', title: 'Roundi' },
            { name: 'competitor', type: 'string', title: 'Competitor' },
          ],
        },
      ],
    },
  ],
}
```

### Phase 2: Frontend Component

**Create ComparisonTable component** (components/comparison-table.tsx)

```tsx
interface ComparisonTableProps {
  competitor: string
  rows: Array<{
    feature: string
    roundi: string
    competitor: string
  }>
}

export function ComparisonTable({ competitor, rows }: ComparisonTableProps) {
  return (
    <div className="my-8 overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b-2 border-border">
            <th className="text-left py-4 px-4 font-semibold">Feature</th>
            <th className="text-left py-4 px-4 font-semibold">Roundi</th>
            <th className="text-left py-4 px-4 font-semibold">{competitor}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index} className="border-b border-border">
              <td className="py-4 px-4 font-medium">{row.feature}</td>
              <td className="py-4 px-4 text-[#c8e298]">{row.roundi}</td>
              <td className="py-4 px-4 text-muted-foreground">{row.competitor}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
```

**Update PortableTextRenderer** (components/portable-text-renderer.tsx)

Add to the `types` section:

```typescript
comparisonTable: ({ value }: any) => {
  if (!value?.rows) return null
  return <ComparisonTable {...value} />
},
```

### Phase 3: URL Structure

Create comparison articles at:
- `/blog/roundi-vs-sendy`
- `/blog/roundi-vs-leta`
- `/blog/roundi-vs-uber-bolt-delivery`

---

## 3. SEO Implementation

### Meta Tags Per Article

**Roundi vs Sendy:**
```typescript
{
  title: "Roundi vs Sendy: What Kenyan SMEs Learned After Sendy Closed | Roundi",
  description: "Sendy shut down, exposing gaps in on-demand delivery for SMEs. Here's what Roundi does differently and why delivery management beats marketplaces.",
  keywords: ["Sendy alternatives Kenya", "Sendy shutdown", "delivery management Kenya", "Sendy replacement"],
}
```

**Roundi vs Leta:**
```typescript
{
  title: "Roundi vs Leta: SME Delivery Management vs Enterprise Logistics | Roundi",
  description: "Leta serves enterprises. Roundi serves Kenyan SMEs. Here's why delivery management tools built for small businesses work better than enterprise platforms.",
  keywords: ["Leta alternatives", "SME delivery software Kenya", "Roundi vs Leta", "delivery management Kenya"],
}
```

**Roundi vs Uber/Bolt:**
```typescript
{
  title: "Roundi vs Uber & Bolt Delivery: Managing Deliveries vs Buying Trips | Roundi",
  description: "Uber and Bolt work for occasional deliveries. Roundi helps businesses manage daily delivery operations. Here's the difference.",
  keywords: ["Uber delivery alternatives", "Bolt business delivery", "manage own riders", "delivery management vs on-demand"],
}
```

### Structured Data

Add `FAQPage` schema to each comparison article with key questions:

```json
{
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What happened to Sendy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sendy shut down in [year], leaving many Kenyan businesses looking for delivery management alternatives..."
      }
    }
  ]
}
```

---

## 4. Internal Linking Strategy

### Homepage Updates

**Update FAQSection.tsx** (components/home/FAQSection.tsx)

Modify existing FAQ answers to link to comparison articles:

```tsx
{
  question: 'How is Roundi different from Uber delivery?',
  answer:
    'Uber focuses on on-demand transport, not delivery operations. Roundi helps businesses manage their own riders, plan routes, track deliveries, and improve accountability — making it more cost-effective for businesses doing deliveries every day. <a href="/blog/roundi-vs-uber-bolt-delivery" class="text-blue-600 underline">Read the full comparison →</a>',
},
```

Do the same for the Leta question.

### Blog Index Page

**Add "Popular Comparisons" section** to blog index (app/blog/page.tsx)

Create a featured comparisons section above or alongside regular blog posts:

```tsx
<section className="mb-12">
  <h2 className="text-2xl font-bold mb-6">Popular Comparisons</h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {comparisonPosts.map(post => (
      <BlogCard key={post.id} post={post} variant="compact" />
    ))}
  </div>
</section>
```

### Cross-Linking Between Comparison Articles

Each comparison article should link to the others in a "Related Comparisons" section at the end:

```markdown
## Related Comparisons

- [Roundi vs Sendy: What Kenyan SMEs Learned →](/blog/roundi-vs-sendy)
- [Roundi vs Leta: SME vs Enterprise →](/blog/roundi-vs-leta)
```

---

## 5. Content Additions

### Comparison Tables to Add

**Roundi vs Sendy:**
| Feature | Roundi | Sendy (Before Closure) |
|---------|--------|------------------------|
| Rider Management | You manage your own riders | Marketplace model |
| Cost Structure | Flat subscription | Per-delivery fees |
| Route Planning | Built-in optimization | Limited |
| Delivery Control | Full control | Outsourced |
| Long-term Viability | Active & growing | Shut down |

**Roundi vs Leta:**
| Feature | Roundi | Leta |
|---------|--------|------|
| Target Market | SMEs (1-10 riders) | Large enterprises |
| Setup Complexity | Simple, self-service | Enterprise onboarding |
| Pricing | SME-friendly | Enterprise pricing |
| Feature Focus | Daily delivery execution | Complex logistics networks |

**Roundi vs Uber/Bolt:**
| Feature | Roundi | Uber/Bolt Delivery |
|---------|--------|-------------------|
| Rider Management | Manage your own team | On-demand marketplace |
| Cost at Scale | Predictable | Increases with volume |
| Route Planning | Multi-stop optimization | Single trip focus |
| Customer Experience | Branded tracking | Generic platform |
| Accountability | Full rider oversight | Limited |

### GEO-Optimized Snippets

Add callout boxes in each article that are easily quotable by AI:

```markdown
> **Quick Answer**: Roundi is delivery management software for businesses that manage their own riders. Uber/Bolt are on-demand platforms for occasional deliveries. For daily operations, management beats on-demand.
```

---

## 6. Implementation Checklist

### Technical Setup
- [ ] Add `comparisonTable` block type to Sanity schema
- [ ] Create `ComparisonTable` component
- [ ] Update `PortableTextRenderer` to support comparison tables
- [ ] Test dividers are working (already completed)

### Content Creation (in Sanity CMS)
- [ ] Create "Roundi vs Sendy" blog post
  - [ ] Add main content with dividers
  - [ ] Add comparison table
  - [ ] Add GEO snippet callout
  - [ ] Set category: "Delivery Management"
  - [ ] Add tags: ["Sendy", "Comparison", "Alternatives"]
- [ ] Create "Roundi vs Leta" blog post
  - [ ] Add main content with dividers
  - [ ] Add comparison table
  - [ ] Add GEO snippet callout
  - [ ] Set category: "Delivery Management"
  - [ ] Add tags: ["Leta", "Comparison", "SME"]
- [ ] Create "Roundi vs Uber/Bolt" blog post
  - [ ] Add main content with dividers
  - [ ] Add comparison table
  - [ ] Add GEO snippet callout
  - [ ] Set category: "Delivery Management"
  - [ ] Add tags: ["Uber", "Bolt", "Comparison", "On-demand"]

### SEO Optimization
- [ ] Add meta descriptions for all three articles
- [ ] Add structured data (FAQPage schema)
- [ ] Add OpenGraph images (create comparison graphics)
- [ ] Verify canonical URLs

### Internal Linking
- [ ] Update homepage FAQ answers to link to comparison articles
- [ ] Add "Popular Comparisons" section to blog index
- [ ] Add cross-links between comparison articles
- [ ] Link from WhoThisIsFor component if relevant

### Testing
- [ ] Test all comparison articles render correctly
- [ ] Test comparison tables are mobile-responsive
- [ ] Test dividers display properly
- [ ] Verify meta tags in browser
- [ ] Test structured data with Google Rich Results Test
- [ ] Check all internal links work

### Deployment
- [ ] Deploy Sanity schema changes to production
- [ ] Publish comparison articles in Sanity CMS
- [ ] Deploy frontend changes to Vercel
- [ ] Submit new URLs to Google Search Console
- [ ] Monitor for indexing

---

## 7. Post-Launch Optimization

### Analytics Tracking
Set up events to track:
- Article views
- Time on page
- CTA clicks from comparison articles
- "Learn More" link clicks to other comparisons

### Content Updates
Monitor and update quarterly:
- Competitor feature changes
- Pricing updates
- Market positioning shifts
- User feedback on comparisons

### A/B Testing Opportunities
- Comparison table position (top vs bottom)
- CTA placement and messaging
- GEO snippet formatting
- Cross-link presentation

---

## 8. Quick Start Guide

To implement this plan:

1. **Schema First**: Add comparison table support to Sanity schema
2. **Component Second**: Create ComparisonTable component and update renderer
3. **Content Third**: Write and publish articles in Sanity CMS
4. **Links Fourth**: Update homepage FAQ and blog index with internal links
5. **SEO Fifth**: Verify meta tags and structured data
6. **Monitor**: Track performance in Google Search Console and analytics

---

## 9. Success Metrics

Track these KPIs:

**SEO Performance:**
- Impressions for comparison keywords (target: 1,000+/month by month 3)
- Click-through rate (target: >3%)
- Average position for target keywords (target: top 10)

**Engagement:**
- Average time on page (target: >2 minutes)
- Bounce rate (target: <60%)
- Internal link click rate (target: >15%)

**Conversion:**
- Early access signups from comparison articles
- "Talk to Us" clicks from comparison pages
- Email captures from comparison article readers

---

## 10. Optional Enhancements

### Phase 2 Additions (Future)
- [ ] Add video explainers for each comparison
- [ ] Create downloadable PDF comparison guides
- [ ] Add customer testimonials from former Sendy/Uber users
- [ ] Create interactive comparison calculator
- [ ] Add "Switch from [Competitor]" guides

### Distribution
- [ ] Share on LinkedIn with snippets
- [ ] Create Twitter threads for each comparison
- [ ] Send to email list as "SME education series"
- [ ] Use in sales outreach as resources

---

## Timeline Overview

**Week 1: Technical Foundation**
- Day 1-2: Schema and component updates
- Day 3: Testing and refinement

**Week 2: Content Creation**
- Day 1-2: Write and format articles in Sanity
- Day 3-4: Add comparison tables and optimize
- Day 5: Internal linking updates

**Week 3: SEO & Launch**
- Day 1-2: Meta tags and structured data
- Day 3: Final QA and testing
- Day 4-5: Deploy and submit to search engines

**Week 4: Monitor & Optimize**
- Day 1-7: Monitor analytics, gather feedback, make adjustments

---

## Questions & Decisions Needed

Before implementation, confirm:

1. **Content Approval**: Do you want to review/edit the comparison article copy before publishing?
2. **Sendy Details**: Do you have specific information about when Sendy closed and why?
3. **Competitor Positioning**: Any specific Leta or Uber/Bolt claims to address or avoid?
4. **Visual Assets**: Do you need custom graphics/screenshots for comparison tables?
5. **Launch Timing**: Should all three launch together or stagger them for consistent content flow?

---

## Support & Resources

- **Sanity CMS Access**: Editors can add content directly at [your-studio-url]
- **Component Code**: All custom components in `/components`
- **Schema Files**: Blog schema at `/sanity/schemas/blogPost.ts`
- **SEO Testing**: Use Google Rich Results Test for structured data validation

---

## Next Steps

Choose your implementation path:

**Option A: Full Implementation**
- I can implement the entire technical foundation (schema, components, linking)
- You add the comparison content in Sanity CMS
- I verify and deploy

**Option B: Guided Implementation**
- I create the plan (done ✓)
- You implement with me available for questions
- I review before launch

**Option C: Phased Approach**
- Week 1: Technical only
- Week 2: One comparison article as pilot
- Week 3-4: Remaining articles based on learnings

Which approach works best for your team?
