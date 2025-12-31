# How to Add a Comparison Table in Sanity Studio

## Step-by-Step Visual Guide

### Before You Start

1. **Open Sanity Studio**
   ```bash
   cd ../roundi-sanity-studio
   npm run dev
   ```
   This opens at: http://localhost:3333

2. **Log in** to your Sanity Studio

3. **Create or edit a blog post**

---

## Adding the Comparison Table

### Step 1: Find the Right Spot in Your Content

When you're adding your article content, you'll see where to add the comparison table. For example, in the Sendy article, you'll add content until you reach:

```
## What Roundi Does Differently

[...your text here...]

## Roundi vs Sendy: Side-by-Side Comparison  ← YOU'LL CREATE THIS SECTION

Here's how they compare:

[THIS IS WHERE THE TABLE GOES] ← ADD TABLE HERE
```

---

### Step 2: Click the `+` Button

In the **Main Content (copy)** field:

1. **Scroll to where you want the table**
2. **Look for a `+` (plus) button** between content blocks
3. **Click the `+` button**

```
┌─────────────────────────────────────┐
│ Your previous paragraph here...     │
└─────────────────────────────────────┘
         ⬇️ Click this plus button
         ➕  ← This appears between blocks
┌─────────────────────────────────────┐
│ [Empty space for new block]         │
└─────────────────────────────────────┘
```

---

### Step 3: Select "Comparison Table"

A menu will pop up showing different block types:

```
Block Types Menu:
┌─────────────────────────┐
│ ○ Normal (paragraph)    │
│ ○ Heading 1 (H1)        │
│ ○ Heading 2 (H2)        │
│ ○ Image                 │
│ ○ Divider               │
│ ✓ Comparison Table  ← CLICK THIS
└─────────────────────────┘
```

**Click "Comparison Table"**

---

### Step 4: Fill in the Competitor Name

After clicking "Comparison Table", you'll see a form like this:

```
┌────────────────────────────────────────┐
│ Comparison Table                       │
├────────────────────────────────────────┤
│ Competitor Name *                      │
│ ┌────────────────────────────────────┐ │
│ │ [Empty text field]                 │ │ ← TYPE HERE
│ └────────────────────────────────────┘ │
│                                        │
│ Comparison Rows *                      │
│ [+ Add row]  ← You'll click this next │
└────────────────────────────────────────┘
```

**Type the competitor name:**
- For Sendy article: `Sendy (Before Closure)`
- For Leta article: `Leta`
- For Uber/Bolt article: `Uber/Bolt Delivery`

---

### Step 5: Add Your First Row

1. **Click "+ Add row"** button
2. A form will appear with 3 fields:

```
┌────────────────────────────────────────┐
│ Row 1                                  │
├────────────────────────────────────────┤
│ Feature *                              │
│ ┌────────────────────────────────────┐ │
│ │                                    │ │ ← Field 1
│ └────────────────────────────────────┘ │
│                                        │
│ Roundi *                               │
│ ┌────────────────────────────────────┐ │
│ │                                    │ │ ← Field 2
│ └────────────────────────────────────┘ │
│                                        │
│ Competitor *                           │
│ ┌────────────────────────────────────┐ │
│ │                                    │ │ ← Field 3
│ └────────────────────────────────────┘ │
└────────────────────────────────────────┘
```

---

### Step 6: Fill in Row 1 (Example for Sendy)

**For Roundi vs Sendy, Row 1:**

```
┌────────────────────────────────────────┐
│ Feature *                              │
│ ┌────────────────────────────────────┐ │
│ │ Rider Management                   │ │ ← Type this
│ └────────────────────────────────────┘ │
│                                        │
│ Roundi *                               │
│ ┌────────────────────────────────────┐ │
│ │ You manage your own riders         │ │ ← Type this
│ └────────────────────────────────────┘ │
│                                        │
│ Competitor *                           │
│ ┌────────────────────────────────────┐ │
│ │ Marketplace model                  │ │ ← Type this
│ └────────────────────────────────────┘ │
└────────────────────────────────────────┘
```

---

### Step 7: Add Rows 2-6

1. **Click "+ Add row"** again
2. **Fill in the second row:**

**Row 2:**
- Feature: `Cost Structure`
- Roundi: `Flat subscription`
- Competitor: `Per-delivery fees`

**Row 3:**
- Feature: `Route Planning`
- Roundi: `Built-in optimization`
- Competitor: `Limited`

**Row 4:**
- Feature: `Delivery Control`
- Roundi: `Full control & visibility`
- Competitor: `Outsourced to platform`

**Row 5:**
- Feature: `Long-term Viability`
- Roundi: `Active & growing`
- Competitor: `Shut down`

**Row 6:**
- Feature: `Customer Experience`
- Roundi: `Branded tracking`
- Competitor: `Generic platform`

---

### Step 8: Preview Your Table

After adding all rows, you should see a preview like this in Sanity:

```
┌────────────────────────────────────────┐
│ Comparison Table: Roundi vs Sendy      │
│ (Before Closure)                       │
│                                        │
│ 6 features compared                    │
│                                        │
│ - Rider Management                     │
│ - Cost Structure                       │
│ - Route Planning                       │
│ - Delivery Control                     │
│ - Long-term Viability                  │
│ - Customer Experience                  │
└────────────────────────────────────────┘
```

---

### Step 9: Continue Adding Content

After the comparison table:

1. **Click the `+` button** below the table
2. **Add the next section** (like "The Bigger Lesson for Kenyan SMEs")
3. **Continue with the rest of the article**

---

## Complete Example Workflow

Here's the full process for adding the Sendy comparison article:

### 1. Add Heading
- Click `+`
- Choose "Heading 2 (H2)"
- Type: `Roundi vs Sendy: Side-by-Side Comparison`

### 2. Add Intro Text
- Click `+`
- Choose "Normal"
- Type: `Here's how Roundi compares to what Sendy offered before it closed:`

### 3. Add Comparison Table
- Click `+`
- Choose "Comparison Table"
- Competitor Name: `Sendy (Before Closure)`
- Add all 6 rows (see above)

### 4. Continue with Next Section
- Click `+`
- Choose "Divider" (for visual break)
- Click `+`
- Choose "Heading 2"
- Type: `The Bigger Lesson for Kenyan SMEs`
- Continue...

---

## Quick Reference: All Comparison Data

### Roundi vs Sendy

| Field | Row 1 | Row 2 | Row 3 | Row 4 | Row 5 | Row 6 |
|-------|-------|-------|-------|-------|-------|-------|
| **Feature** | Rider Management | Cost Structure | Route Planning | Delivery Control | Long-term Viability | Customer Experience |
| **Roundi** | You manage your own riders | Flat subscription | Built-in optimization | Full control & visibility | Active & growing | Branded tracking |
| **Competitor** | Marketplace model | Per-delivery fees | Limited | Outsourced to platform | Shut down | Generic platform |

### Roundi vs Leta

| Field | Row 1 | Row 2 | Row 3 | Row 4 | Row 5 | Row 6 |
|-------|-------|-------|-------|-------|-------|-------|
| **Feature** | Target Market | Setup Complexity | Pricing | Feature Focus | Ideal Team Size | Route Planning |
| **Roundi** | SMEs (1-10 riders) | Simple, self-service | SME-friendly | Daily delivery execution | 1-10 people | Optimized for Nairobi |
| **Competitor** | Large enterprises | Enterprise onboarding | Enterprise pricing | Complex logistics networks | 20+ logistics staff | Multi-region logistics |

### Roundi vs Uber/Bolt

| Field | Row 1 | Row 2 | Row 3 | Row 4 | Row 5 | Row 6 |
|-------|-------|-------|-------|-------|-------|-------|
| **Feature** | Rider Management | Cost at Scale | Route Planning | Customer Experience | Accountability | Best For |
| **Roundi** | Manage your own team | Predictable subscription | Multi-stop optimization | Branded tracking & updates | Full rider oversight | Daily operations |
| **Competitor** | On-demand marketplace | Increases with volume | Single trip focus | Generic platform | Limited control | Occasional deliveries |

---

## Troubleshooting

### "I don't see Comparison Table option"

**Solution:**
1. Make sure Sanity Studio is running the latest schema
2. Restart Sanity Studio:
   ```bash
   # In terminal, press Ctrl+C to stop
   # Then restart:
   npm run dev
   ```
3. Refresh your browser
4. Try creating a new blog post

### "I can't find the + button"

**Solution:**
The `+` button appears:
- Between content blocks when you hover
- At the bottom of the content area
- When you click in an empty space in the content field

**Try this:**
1. Click anywhere in the "Main Content (copy)" field
2. Press **Enter** to create a new line
3. The `+` should appear

### "My rows aren't saving"

**Solution:**
1. Make sure all 3 fields are filled in each row (Feature, Roundi, Competitor)
2. Fields marked with `*` are required
3. Click outside the row to auto-save
4. Look for a save indicator (usually at the top of the page)

### "Table doesn't show on frontend"

**Solution:**
1. Make sure the blog post is **published** (not just saved as draft)
2. Check that the article slug is correct
3. Visit the URL: `/blog/roundi-vs-sendy` (or appropriate slug)
4. Hard refresh your browser: Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)

---

## Tips for Success

### ✅ Do This:
- Fill in all required fields (marked with `*`)
- Use exact text from the templates
- Keep competitor names consistent
- Preview your content before publishing
- Save frequently

### ❌ Avoid This:
- Don't leave fields empty
- Don't change competitor names mid-article
- Don't skip rows (add all 6)
- Don't forget to publish (save as draft isn't enough)

---

## Visual Result on Frontend

After publishing, your comparison table will look like this on the website:

```
┌──────────────────────────┬──────────────────────────┬──────────────────────────┐
│ Feature                  │ Roundi ✓                │ Sendy (Before Closure)   │
│                          │ (highlighted in green)   │                          │
├──────────────────────────┼──────────────────────────┼──────────────────────────┤
│ Rider Management         │ You manage your own     │ Marketplace model        │
│                          │ riders                   │                          │
├──────────────────────────┼──────────────────────────┼──────────────────────────┤
│ Cost Structure           │ Flat subscription       │ Per-delivery fees        │
├──────────────────────────┼──────────────────────────┼──────────────────────────┤
│ Route Planning           │ Built-in optimization   │ Limited                  │
├──────────────────────────┼──────────────────────────┼──────────────────────────┤
│ Delivery Control         │ Full control &          │ Outsourced to platform   │
│                          │ visibility               │                          │
├──────────────────────────┼──────────────────────────┼──────────────────────────┤
│ Long-term Viability      │ Active & growing        │ Shut down                │
├──────────────────────────┼──────────────────────────┼──────────────────────────┤
│ Customer Experience      │ Branded tracking        │ Generic platform         │
└──────────────────────────┴──────────────────────────┴──────────────────────────┘
```

**Features:**
- Professional styling
- Mobile responsive
- Roundi column highlighted
- Easy to scan
- Clear differentiation

---

## Next Steps

1. **Start with one article** (Roundi vs Sendy is a good first one)
2. **Practice adding the comparison table**
3. **Preview to see how it looks**
4. **Publish and test on the live site**
5. **Then add the other 2 articles**

**You've got this! The interface is intuitive once you see it.** 🚀

Need help? Check `COMPARISON_PAGES_BLANK_FIX.md` for troubleshooting or ask me!
