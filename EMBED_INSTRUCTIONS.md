# Roundi Blog Embed - Simple Integration

## Quick Start (2 lines of code!)

Add these two lines to any HTML page:

```html
<div id="roundi-blog-embed"></div>
<script src="https://v0-embeddable-blog-section.vercel.app/roundi-blog-embed.js"></script>
```

That's it! Your blog will appear automatically.

---

## Complete Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Website</title>
</head>
<body>
  <header>
    <h1>Welcome to My Website</h1>
  </header>

  <main>
    <!-- Your content here -->

    <!-- Roundi Blog Section -->
    <div id="roundi-blog-embed"></div>
    <script src="https://v0-embeddable-blog-section.vercel.app/roundi-blog-embed.js"></script>
  </main>

  <footer>
    <p>&copy; 2025 My Company</p>
  </footer>
</body>
</html>
```

---

## Platform-Specific Instructions

### WordPress
1. Go to **Appearance → Widgets** or edit any page/post
2. Add a **Custom HTML** block
3. Paste the embed code:
```html
<div id="roundi-blog-embed"></div>
<script src="https://v0-embeddable-blog-section.vercel.app/roundi-blog-embed.js"></script>
```

### Shopify
1. Go to **Online Store → Themes → Customize**
2. Add a **Custom Liquid** section
3. Paste the embed code

### Webflow
1. Add an **Embed** element to your page
2. Paste the embed code
3. Publish your site

### Wix
1. Click **Add** → **Embed** → **Embed a Widget**
2. Choose **HTML iframe**
3. Paste the embed code

### Squarespace
1. Add a **Code** block to your page
2. Paste the embed code
3. Save and publish

---

## Advanced Configuration

### Custom Number of Posts

```html
<div id="roundi-blog-embed"></div>
<script src="https://v0-embeddable-blog-section.vercel.app/roundi-blog-embed.js"></script>
<script>
  // Show only 3 posts instead of default 6
  window.RoundiBlogEmbed.config.MAX_POSTS = 3;
  window.RoundiBlogEmbed.load();
</script>
```

### Custom Container ID

```html
<div id="my-custom-blog"></div>
<script src="https://v0-embeddable-blog-section.vercel.app/roundi-blog-embed.js"></script>
<script>
  window.RoundiBlogEmbed.config.CONTAINER_ID = 'my-custom-blog';
  window.RoundiBlogEmbed.load();
</script>
```

### Manual Initialization

```html
<!-- Don't auto-load, initialize manually -->
<div id="roundi-blog-embed"></div>
<script src="https://v0-embeddable-blog-section.vercel.app/roundi-blog-embed.js"></script>
<script>
  // Load when user clicks a button
  document.getElementById('load-blog-btn').addEventListener('click', function() {
    window.RoundiBlogEmbed.load();
  });
</script>
```

---

## Custom Styling

You can override the default styles with your own CSS:

```html
<style>
  /* Change title color */
  .roundi-blog-title {
    color: #your-color !important;
  }

  /* Change card hover effect */
  .roundi-blog-card:hover {
    transform: scale(1.02) !important;
  }

  /* Change grid columns */
  .roundi-blog-grid {
    grid-template-columns: repeat(2, 1fr) !important;
  }

  /* Change card border radius */
  .roundi-blog-card {
    border-radius: 20px !important;
  }
</style>
```

---

## Features

✅ **No dependencies** - Pure vanilla JavaScript
✅ **Responsive** - Works on mobile, tablet, and desktop
✅ **Fast loading** - Optimized for performance
✅ **SEO friendly** - Semantic HTML structure
✅ **Secure** - XSS protection built-in
✅ **Accessible** - Proper ARIA labels and keyboard navigation
✅ **Lazy loading** - Images load only when needed
✅ **Auto-updates** - Shows latest posts from Contentful

---

## Troubleshooting

### Blog doesn't appear
1. Check that the container `<div id="roundi-blog-embed"></div>` exists
2. Verify the script tag is loading correctly (check browser console)
3. Ensure your website allows external scripts

### Styling conflicts
Add `!important` to your custom CSS rules to override defaults

### CORS errors
The embed script is already configured for cross-origin requests. If you still see errors, contact support.

---

## URLs

- **Script URL**: `https://v0-embeddable-blog-section.vercel.app/roundi-blog-embed.js`
- **API URL**: `https://v0-embeddable-blog-section.vercel.app/api/blog`
- **Blog URL**: `https://v0-embeddable-blog-section.vercel.app/blog`

---

## Support

For issues or questions:
- Check the browser console for error messages
- Verify the embed code is correctly pasted
- Ensure you have an active internet connection
- Try clearing your browser cache

---

## License

This embed code is provided for use with Roundi blog integration.
