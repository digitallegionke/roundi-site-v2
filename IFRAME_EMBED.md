# Iframe Embed - Use Vercel Page Directly

## Simple Iframe Embed

You can embed the entire blog page directly using an iframe:

```html
<iframe
  src="https://v0-embeddable-blog-section.vercel.app/"
  width="100%"
  height="1200"
  frameborder="0"
  style="border: none; overflow: hidden;"
  title="Roundi Blog">
</iframe>
```

---

## Responsive Iframe

For a responsive iframe that adjusts to content:

```html
<div style="position: relative; width: 100%; padding-bottom: 100%; overflow: hidden;">
  <iframe
    src="https://v0-embeddable-blog-section.vercel.app/"
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;"
    title="Roundi Blog">
  </iframe>
</div>
```

---

## Embed Options

### Option 1: Full Blog Page
```html
<iframe src="https://v0-embeddable-blog-section.vercel.app/"
        width="100%" height="1200" frameborder="0"></iframe>
```

### Option 2: Specific Blog Post
```html
<iframe src="https://v0-embeddable-blog-section.vercel.app/blog/the-aha-moment"
        width="100%" height="800" frameborder="0"></iframe>
```

### Option 3: Blog List Only
```html
<iframe src="https://v0-embeddable-blog-section.vercel.app/blog"
        width="100%" height="1000" frameborder="0"></iframe>
```

---

## Advanced: Auto-Resizing Iframe

For an iframe that automatically adjusts its height based on content:

```html
<iframe
  id="roundi-blog-iframe"
  src="https://v0-embeddable-blog-section.vercel.app/"
  width="100%"
  frameborder="0"
  scrolling="no"
  style="border: none; overflow: hidden; width: 100%;">
</iframe>

<script>
  // Auto-resize iframe (works if same domain or with postMessage)
  const iframe = document.getElementById('roundi-blog-iframe');

  // Set initial height
  iframe.style.height = '1200px';

  // Listen for resize events from iframe (if supported)
  window.addEventListener('message', function(e) {
    if (e.data.height) {
      iframe.style.height = e.data.height + 'px';
    }
  });
</script>
```

---

## Comparison: Iframe vs JavaScript Embed

### Iframe Embed (This Method)
✅ **Pros:**
- Simplest implementation (one line of code)
- Complete page isolation
- No CSS/JS conflicts with parent page
- Can embed entire pages or specific posts
- Works on any platform instantly

❌ **Cons:**
- Takes more space
- Creates a "page within a page" feel
- May show scrollbars
- Less customizable styling
- SEO content not indexed on parent page

### JavaScript Embed (`roundi-blog-embed.js`)
✅ **Pros:**
- Seamlessly integrates with parent page
- Fully customizable styling
- No iframe borders or scrollbars
- Better SEO (content indexed)
- Lighter and faster

❌ **Cons:**
- Requires 2 lines of code instead of 1
- Could have CSS conflicts (rare)
- Needs JavaScript enabled

---

## Recommended Use Cases

### Use Iframe When:
- You want the quickest possible integration
- You don't care about SEO for blog content
- You want complete style isolation
- You're embedding on platforms that don't allow custom JavaScript
- You want to embed specific individual blog posts

### Use JavaScript Embed When:
- You want seamless integration with your site design
- SEO is important
- You want full control over styling
- You're embedding on a platform that allows custom scripts
- You want the cleanest user experience

---

## WordPress Iframe Embed

1. Edit your page
2. Add a **Custom HTML** block
3. Paste:
```html
<iframe src="https://v0-embeddable-blog-section.vercel.app/"
        width="100%" height="1200" frameborder="0"></iframe>
```

---

## Shopify Iframe Embed

1. Go to **Online Store → Pages** or **Theme → Edit Code**
2. Add a **Custom Liquid** section
3. Paste:
```html
<iframe src="https://v0-embeddable-blog-section.vercel.app/"
        width="100%" height="1200" frameborder="0"></iframe>
```

---

## Styling the Iframe

You can add custom styling to the iframe container:

```html
<div style="max-width: 1200px; margin: 0 auto; padding: 2rem;">
  <iframe
    src="https://v0-embeddable-blog-section.vercel.app/"
    width="100%"
    height="1200"
    frameborder="0"
    style="
      border: none;
      border-radius: 12px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    ">
  </iframe>
</div>
```

---

## Mobile Optimization

For better mobile experience:

```html
<iframe
  src="https://v0-embeddable-blog-section.vercel.app/"
  width="100%"
  height="1200"
  frameborder="0"
  style="
    border: none;
    min-height: 800px;
  "
  loading="lazy">
</iframe>

<style>
  @media (max-width: 768px) {
    iframe {
      min-height: 600px !important;
    }
  }
</style>
```

---

## Security Considerations

For better security, add these attributes:

```html
<iframe
  src="https://v0-embeddable-blog-section.vercel.app/"
  width="100%"
  height="1200"
  frameborder="0"
  sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
  referrerpolicy="no-referrer-when-downgrade">
</iframe>
```

---

## Quick Start

**Copy and paste this single line anywhere:**

```html
<iframe src="https://v0-embeddable-blog-section.vercel.app/" width="100%" height="1200" frameborder="0"></iframe>
```

That's it! Your blog is now embedded.
