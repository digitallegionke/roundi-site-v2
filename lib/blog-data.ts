export interface BlogPost {
  id: string
  title: string
  subtitle?: string
  slug: string
  excerpt: string
  content: string
  richContent?: any // Rich Text document from Contentful
  image: string
  imageCredits?: string
  date: string
  author: {
    name: string
    title: string
    avatar: string
    bio?: string
  }
  readTime: number
  category?: string
  featured?: boolean
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "How Real-Time Delivery Tracking Solves Kenya's Boda Boda Transparency Problem",
    slug: "better-delivery-tracking",
    excerpt: "A Nairobi entrepreneur's story reveals why delivery tracking software is essential for Kenyan SMEs managing riders and customer expectations.",
    content: `## The Boda Boda Story That Changed Everything

Running a business in Nairobi, you quickly learn that delivery logistics can make or break customer trust. Here's a story that perfectly captures the delivery challenges facing Kenyan SMEs.

Isaac Waithaka was walking in Nairobi when he got tired and flagged down a boda boda rider. The rider, seeing an opportunity, quoted a price and took the job. Minutes after dropping Isaac off, the rider called with a familiar excuse: "Something happened on the way to the drop-off." Whether true or not, the rider made extra money—and Isaac lost visibility into what actually happened.

## Why Delivery Tracking Matters for Kenyan Businesses

This tiny corner of the delivery experience—knowing where your rider is and when they'll arrive—is what Roundi fixes for businesses across Kenya and East Africa.

For restaurants, e-commerce stores, and logistics companies in Nairobi, the gains from real-time tracking add up fast when you're handling multiple orders daily. We run an e-commerce store ourselves, so we've felt this pain firsthand.

### The Real Problem We're Solving

"Helping businesses make delivery simple to run and delightful to receive" isn't just our tagline—it's our mission for Kenyan SMEs. Whether you're a startup in Nairobi managing your first deliveries or an established business scaling across Kenya, delivery management software built for East Africa makes all the difference.

With Roundi's delivery tracking platform, your customers in Nairobi, Mombasa, or anywhere in Kenya can see exactly where their order is—eliminating the uncertainty that erodes trust in African logistics.`,
    image: "/delivery-tracking-app.webp",
    imageCredits: "Photo by Unsplash",
    date: "Oct 1, 2025",
    author: {
      name: "David Kuria",
      title: "Mobile Experience Designer",
      avatar: "/diverse-person-avatar.webp",
    },
    readTime: 5,
  },
  {
    id: "2",
    title: "How Kenyan Restaurants Build Customer Loyalty Through Personalized Delivery",
    slug: "when-good-delivery-feels-personal",
    excerpt: "Nairobi restaurants are winning customers by making delivery personal. Learn how delivery management software helps East African businesses create memorable experiences.",
    content: `## The Personal Touch in Kenyan Delivery Services

In Nairobi's competitive restaurant scene, delivery is more than just logistics—it's about creating a personal connection with customers that keeps them coming back.

## Why Personalization Matters for African Businesses

When a delivery person takes the time to understand your needs, remember your preferences, and ensure your items arrive safely in busy Nairobi traffic, it creates an experience that goes beyond transaction. For restaurants and e-commerce businesses across Kenya, this human touch is what transforms one-time customers into loyal advocates.

### The Roundi Approach for East African SMEs

We've seen time and again that Kenyan customers who feel valued and understood become loyal advocates for businesses. This is the philosophy driving our approach at Roundi—delivery management software built specifically for the unique challenges of East African logistics.

Whether you're running a restaurant in Westlands, an e-commerce store in Karen, or a logistics business serving all of Nairobi, every delivery should feel personal, every interaction should matter. That's how businesses across Kenya are building lasting customer relationships in a competitive market.`,
    image: "/personal-delivery-service.webp",
    date: "Oct 21, 2025",
    author: {
      name: "Sarah Johnson",
      title: "Customer Experience Lead",
      avatar: "/person-avatar-2.webp",
    },
    readTime: 5,
  },
  {
    id: "3",
    title: "Building Trust in Nairobi's Delivery Industry: Our Aha Moment",
    slug: "the-aha-moment",
    excerpt: "How focusing on transparency and trust transformed our approach to delivery management software for Kenyan businesses.",
    content: `## The Moment Everything Changed

There are defining moments in every company's journey. For Roundi, it happened during a meeting with Nairobi restaurant owners who shared their biggest delivery frustration: lack of visibility.

## Trust is Everything in Kenyan Logistics

We realized that delivery in Kenya wasn't just about moving packages from point A to point B. It was about trust, visibility, and the confidence both businesses and customers in Nairobi feel when they know exactly what's happening with their orders.

For restaurants in Westlands serving customers in Kilimani, for e-commerce stores in Industrial Area delivering to Eastlands, for logistics companies managing routes across Kenya—trust is the foundation of successful delivery operations.

### How This Shapes Roundi for East Africa

That aha moment changed everything about how we approach problems and design solutions for African businesses. Now, every feature we build is filtered through this lens: does this increase trust and transparency for Kenyan SMEs?

From real-time tracking that works in Nairobi's traffic to rider management tools built for East African workflows, we're solving the trust gap in African delivery logistics—one feature at a time.`,
    image: "/office-meeting-collaboration.webp",
    date: "Oct 18, 2025",
    author: {
      name: "Michael Chen",
      title: "Product Manager",
      avatar: "/person-avatar-3.webp",
    },
    readTime: 4,
  },
  {
    id: "4",
    title: "Why We're Building Delivery Management Software for African SMEs",
    slug: "why-we-are-building-roundi",
    excerpt: "The story behind Roundi: solving delivery challenges for Kenyan businesses and transforming logistics across East Africa.",
    content: `## Our Mission: Transforming African Delivery Operations

Every product starts with a problem. For Roundi, it started with frustration watching Kenyan businesses struggle with delivery management.

## The Problem We Saw in Nairobi

We watched restaurants in Nairobi struggle to manage multiple riders during lunch rush. We saw e-commerce stores across Kenya anxiously trying to track packages through unreliable systems. We noticed delivery partners navigating complex workflows that didn't serve them—or their customers—well.

Operating in Kenya's delivery ecosystem, we experienced these pain points firsthand. From Nairobi's unpredictable traffic to managing riders across different parts of East Africa, the challenges facing African SMEs were clear.

## The Vision: Delivery Software Built for East Africa

We asked ourselves: what if there was a platform built specifically for African businesses—one that understood Nairobi's traffic patterns, Kenya's unique logistics challenges, and the needs of East African SMEs?

What if technology could bridge the gap between businesses, riders, and customers—creating genuine value for everyone in the Kenyan delivery ecosystem?

### Building More Than Software

That's why we're building Roundi. We're not just creating another logistics tool. We're building a movement to transform how deliveries work across Kenya, East Africa, and beyond.

From restaurants in Westlands to e-commerce stores in Mombasa, from startups managing their first deliveries to established businesses scaling across the region—we're here to make delivery management simple, reliable, and built for Africa.`,
    image: "/startup-team-office.webp",
    date: "Oct 5, 2025",
    author: {
      name: "James Okonkwo",
      title: "Co-founder",
      avatar: "/person-avatar-4.webp",
    },
    readTime: 6,
  },
]

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}

export function getFeaturedPosts(count = 3): BlogPost[] {
  return blogPosts.slice(0, count)
}
