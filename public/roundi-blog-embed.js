(function() {
  'use strict';

  // Configuration
  const CONFIG = {
    API_URL: 'https://v0-embeddable-blog-section.vercel.app/api/blog',
    BLOG_URL: 'https://v0-embeddable-blog-section.vercel.app/blog',
    MAX_POSTS: 6,
    CONTAINER_ID: 'roundi-blog-embed'
  };

  // Inject styles
  function injectStyles() {
    if (document.getElementById('roundi-blog-styles')) return;

    const style = document.createElement('style');
    style.id = 'roundi-blog-styles';
    style.textContent = `
      .roundi-blog-embed * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      .roundi-blog-embed {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
        max-width: 1200px;
        margin: 0 auto;
        padding: 2rem 1rem;
      }

      .roundi-blog-header {
        text-align: left;
        margin-bottom: 3rem;
      }

      .roundi-blog-title {
        font-size: 2.5rem;
        font-weight: bold;
        color: #1a1a1a;
        margin-bottom: 0.5rem;
      }

      .roundi-blog-subtitle {
        font-size: 1.125rem;
        color: #666;
      }

      .roundi-blog-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 2rem;
        margin-bottom: 2rem;
      }

      .roundi-blog-card {
        background: #fafafa;
        border-radius: 12px;
        overflow: hidden;
        transition: transform 0.3s ease;
        text-decoration: none;
        color: inherit;
        display: flex;
        flex-direction: column;
      }

      .roundi-blog-card:hover {
        transform: translateY(-4px);
      }

      .roundi-blog-card-image {
        width: 100%;
        height: 200px;
        object-fit: cover;
      }

      .roundi-blog-card-content {
        padding: 1.5rem;
        display: flex;
        flex-direction: column;
        height: 100%;
      }

      .roundi-blog-card-meta {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        margin-bottom: 1rem;
        font-size: 0.875rem;
        color: #666;
      }

      .roundi-blog-card-title {
        font-size: 1.25rem;
        font-weight: 600;
        color: #1a1a1a;
        margin-bottom: 0.75rem;
        line-height: 1.4;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }

      .roundi-blog-card-excerpt {
        font-size: 0.95rem;
        color: #666;
        line-height: 1.6;
        margin-bottom: 1rem;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }

      .roundi-blog-card-author {
        margin-top: auto;
        padding-top: 1rem;
      }

      .roundi-blog-card-avatar {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        object-fit: cover;
      }

      .roundi-blog-card-author-info {
        display: flex;
        flex-direction: column;
      }

      .roundi-blog-card-author-name {
        font-size: 0.875rem;
        font-weight: 500;
        color: #1a1a1a;
      }

      .roundi-blog-card-author-title {
        font-size: 0.75rem;
        color: #999;
      }

      .roundi-blog-loading {
        text-align: center;
        padding: 3rem;
        color: #666;
        font-size: 1rem;
      }

      .roundi-blog-error {
        text-align: center;
        padding: 3rem;
        color: #dc2626;
        font-size: 1rem;
      }

      @media (max-width: 1024px) {
        .roundi-blog-grid {
          grid-template-columns: repeat(2, 1fr);
        }
      }

      @media (max-width: 768px) {
        .roundi-blog-title {
          font-size: 2rem;
        }

        .roundi-blog-grid {
          grid-template-columns: 1fr;
        }

        .roundi-blog-header {
          text-align: center;
        }
      }
    `;
    document.head.appendChild(style);
  }

  // Format date
  function formatDate(dateString) {
    const date = new Date(dateString);
    const day = date.getDate();
    const suffix = getDaySuffix(day);
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    return `${day}${suffix} ${month} ${year}`;
  }

  function getDaySuffix(day) {
    if (day >= 11 && day <= 13) return 'th';
    switch (day % 10) {
      case 1: return 'st';
      case 2: return 'nd';
      case 3: return 'rd';
      default: return 'th';
    }
  }

  // Escape HTML to prevent XSS
  function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  // Render blog posts
  function renderBlogPosts(posts, container) {
    const limitedPosts = posts.slice(0, CONFIG.MAX_POSTS);

    let html = `
      <div class="roundi-blog-header">
        <h2 class="roundi-blog-title">Latest from our blog</h2>
        <p class="roundi-blog-subtitle">Insights, stories, and updates</p>
      </div>
      <div class="roundi-blog-grid">
    `;

    limitedPosts.forEach(post => {
      const title = escapeHtml(post.title || '');
      const subtitle = post.subtitle ? escapeHtml(post.subtitle) : '';
      const authorName = escapeHtml(post.author?.name || 'Anonymous');
      const authorTitle = escapeHtml(post.author?.title || '');
      const image = post.image || '/placeholder.jpg';
      const avatar = post.author?.avatar || '/placeholder-user.jpg';
      const slug = post.slug || '';
      const date = post.date || '';
      const readTime = post.readTime || 5;

      html += `
        <a href="${CONFIG.BLOG_URL}/${slug}" class="roundi-blog-card" target="_blank" rel="noopener noreferrer">
          <img src="${image}" alt="${title}" class="roundi-blog-card-image" loading="lazy" />
          <div class="roundi-blog-card-content">
            <div class="roundi-blog-card-meta">
              <span>${formatDate(date)}</span>
              <span>•</span>
              <span>${readTime} min read</span>
            </div>
            <h3 class="roundi-blog-card-title">${title}</h3>
            ${subtitle ? `<p class="roundi-blog-card-excerpt">${subtitle}</p>` : ''}
            <div class="roundi-blog-card-author">
              <span class="roundi-blog-card-author-name">${authorName}</span>
            </div>
          </div>
        </a>
      `;
    });

    html += '</div>';
    container.innerHTML = html;
  }

  // Fetch and load blog posts
  async function loadBlogPosts() {
    const container = document.getElementById(CONFIG.CONTAINER_ID);
    if (!container) {
      console.error(`Roundi Blog: Container with id "${CONFIG.CONTAINER_ID}" not found`);
      return;
    }

    container.className = 'roundi-blog-embed';
    container.innerHTML = '<div class="roundi-blog-loading">Loading blog posts...</div>';

    try {
      const response = await fetch(CONFIG.API_URL);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      const posts = data.posts || data;

      if (!Array.isArray(posts) || posts.length === 0) {
        container.innerHTML = '<div class="roundi-blog-error">No blog posts available.</div>';
        return;
      }

      renderBlogPosts(posts, container);
    } catch (error) {
      console.error('Roundi Blog: Error loading posts:', error);
      container.innerHTML = '<div class="roundi-blog-error">Failed to load blog posts. Please try again later.</div>';
    }
  }

  // Initialize
  function init() {
    injectStyles();

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', loadBlogPosts);
    } else {
      loadBlogPosts();
    }
  }

  // Export for custom initialization
  window.RoundiBlogEmbed = {
    init: init,
    load: loadBlogPosts,
    config: CONFIG
  };

  // Auto-initialize
  init();
})();
