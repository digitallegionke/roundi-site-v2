# Embeddable Blog Section

## Quick Embed Snippet

Copy and paste this code snippet into any HTML page where you want to display your blog posts:

```html
<!-- Roundi Blog Embed -->
<div id="roundi-blog-embed"></div>
<script>
(function(){
  // CONFIGURATION - Update these URLs with your deployed site
  const API_URL = 'https://YOUR-SITE.vercel.app/api/blog';
  const BLOG_URL = 'https://YOUR-SITE.vercel.app/blog';
  const MAX_POSTS = 6;

  // Styles
  const style = document.createElement('style');
  style.textContent = `
    .roundi-blog-embed * { margin: 0; padding: 0; box-sizing: border-box; }
    .roundi-blog-embed { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 1200px; margin: 0 auto; padding: 2rem 1rem; }
    .roundi-blog-header { text-align: center; margin-bottom: 3rem; }
    .roundi-blog-title { font-size: 2.5rem; font-weight: bold; color: #1a1a1a; margin-bottom: 0.5rem; }
    .roundi-blog-subtitle { font-size: 1.125rem; color: #666; }
    .roundi-blog-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 2rem; }
    .roundi-blog-card { background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1); transition: transform 0.3s, box-shadow 0.3s; text-decoration: none; color: inherit; display: block; }
    .roundi-blog-card:hover { transform: translateY(-4px); box-shadow: 0 4px 16px rgba(0,0,0,0.15); }
    .roundi-blog-card-image { width: 100%; height: 200px; object-fit: cover; }
    .roundi-blog-card-content { padding: 1.5rem; }
    .roundi-blog-card-meta { display: flex; align-items: center; gap: 0.5rem; margin-bottom: 1rem; font-size: 0.875rem; color: #666; }
    .roundi-blog-card-title { font-size: 1.25rem; font-weight: 600; color: #1a1a1a; margin-bottom: 0.75rem; line-height: 1.4; }
    .roundi-blog-card-excerpt { font-size: 0.95rem; color: #666; line-height: 1.6; margin-bottom: 1rem; }
    .roundi-blog-card-author { display: flex; align-items: center; gap: 0.75rem; }
    .roundi-blog-card-avatar { width: 40px; height: 40px; border-radius: 50%; object-fit: cover; }
    .roundi-blog-card-author-name { font-size: 0.875rem; font-weight: 500; color: #1a1a1a; }
    .roundi-blog-card-author-title { font-size: 0.75rem; color: #999; }
    @media (max-width: 768px) { .roundi-blog-title { font-size: 2rem; } .roundi-blog-grid { grid-template-columns: 1fr; } }
  `;
  document.head.appendChild(style);

  // Format date
  function formatDate(d) {
    const date = new Date(d);
    const day = date.getDate();
    const suffix = day >= 11 && day <= 13 ? 'th' : ['st','nd','rd'][((day%10)-1)] || 'th';
    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    return `${day}${suffix} ${months[date.getMonth()]} ${date.getFullYear()}`;
  }

  // Load posts
  fetch(API_URL)
    .then(res => res.json())
    .then(posts => {
      const container = document.getElementById('roundi-blog-embed');
      container.className = 'roundi-blog-embed';
      let html = `
        <div class="roundi-blog-header">
          <h2 class="roundi-blog-title">Latest from our blog</h2>
          <p class="roundi-blog-subtitle">Insights, stories, and updates</p>
        </div>
        <div class="roundi-blog-grid">
      `;
      posts.slice(0, MAX_POSTS).forEach(post => {
        html += `
          <a href="${BLOG_URL}/${post.slug}" class="roundi-blog-card" target="_blank">
            <img src="${post.image}" alt="${post.title}" class="roundi-blog-card-image">
            <div class="roundi-blog-card-content">
              <div class="roundi-blog-card-meta">
                <span>${formatDate(post.date)}</span>
                <span>•</span>
                <span>${post.readTime} min read</span>
              </div>
              <h3 class="roundi-blog-card-title">${post.title}</h3>
              ${post.subtitle ? `<p class="roundi-blog-card-excerpt">${post.subtitle}</p>` : ''}
              <div class="roundi-blog-card-author">
                <img src="${post.author.avatar}" alt="${post.author.name}" class="roundi-blog-card-avatar">
                <div>
                  <div class="roundi-blog-card-author-name">${post.author.name}</div>
                  <div class="roundi-blog-card-author-title">${post.author.title}</div>
                </div>
              </div>
            </div>
          </a>
        `;
      });
      html += '</div>';
      container.innerHTML = html;
    })
    .catch(err => {
      document.getElementById('roundi-blog-embed').innerHTML = '<div style="text-align:center;padding:3rem;color:#dc2626;">Failed to load blog posts</div>';
    });
})();
</script>
```

## Configuration Steps

1. **Replace the URLs:**
   - Change `YOUR-SITE.vercel.app` to your actual deployed Vercel URL
   - Example: `https://roundi-blog.vercel.app`

2. **Customize (Optional):**
   - Change `MAX_POSTS` to show more or fewer posts (default: 6)
   - Modify the title and subtitle in the HTML
   - Adjust colors and styles in the CSS section

3. **Add CORS Support:**
   Make sure your API route allows requests from external domains. The `/api/blog` route should already handle this.

## Usage Examples

### Basic Usage
```html
<!DOCTYPE html>
<html>
<head>
  <title>My Website</title>
</head>
<body>
  <h1>Welcome to My Site</h1>

  <!-- Your blog embed -->
  <div id="roundi-blog-embed"></div>
  <script src="path-to-embed-script.js"></script>

  <footer>© 2025 My Company</footer>
</body>
</html>
```

### WordPress
Add the snippet to a Custom HTML block or in Appearance → Customize → Additional CSS/Scripts.

### Shopify
Add to a Custom Liquid section or in Online Store → Themes → Edit Code → theme.liquid.

### Any CMS
Most platforms have a "Custom HTML" or "Embed Code" option where you can paste the snippet.

## Features

- ✅ Responsive design (mobile-friendly)
- ✅ Automatic date formatting
- ✅ Hover effects on cards
- ✅ Loading and error states
- ✅ No external dependencies
- ✅ SEO-friendly with semantic HTML
- ✅ Self-contained (includes all styles)

## Full Embed File

For a complete standalone HTML file, check `embed.html` in this directory.
