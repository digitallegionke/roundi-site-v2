export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  image: string
  date: string
  author: {
    name: string
    title: string
    avatar: string
  }
  readTime: number
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Better delivery tracking",
    slug: "better-delivery-tracking",
    excerpt: "How long walks, small truths, and one boda story clarified the real problem Roundi is built to solve.",
    content: `How long walks, small truths, and one boda story clarified the real problem Roundi is built to solve.

I need to walk more it seems, I used to take long walks for ideas, but now long walks are helping me think deeper on what we are trying to solve, and yesterday's 6k walk helped me think deeply on why we are torturing our selves with building Roundi, the impact that we aim to see, and I think we understood the problem and the solution better(I think) "Helping businesses make delivery simple to run and delightful to receive".

It reminds of an article that that Imelda Hope recently wrote about the world we envision with Roundi in it. There's this experience Isaac Waithaka told me about this week, and it really brought it home, there's a time he was taking a walk on the road, he got tired and he needed a boda to take him home, the boda guy from the opposite direction saw Isaac and knew he had a golden chance to make some extra cash by serving Isaac: minutes after being dropped him off.

And we all know how that conversation went, the rider told the client that something happened on his way to the drop, true story or not, something happened he just made more money, but obviously that's not what he said.

And I think that's the tiny corner we want to fix. Roundi makes it easy to know where your rider is and when they'll arrive. The gains really add up when you're handling multiple orders—we run an e-commerce store, so we've felt this pain.`,
    image: "/delivery-tracking-app.jpg",
    date: "Oct 1, 2025",
    author: {
      name: "David Kuria",
      title: "Mobile Experience Designer",
      avatar: "/diverse-person-avatar.png",
    },
    readTime: 4,
  },
  {
    id: "2",
    title: "When Good Delivery Feels Personal",
    slug: "when-good-delivery-feels-personal",
    excerpt: "Exploring the human side of delivery and how personalization transforms customer experience.",
    content: `Exploring the human side of delivery and how personalization transforms customer experience.

In today's fast-paced world, delivery is more than just logistics—it's about creating a personal connection with customers. When a delivery person takes the time to understand your needs, remember your preferences, and ensure your items arrive safely, it creates an experience that goes beyond transaction.

We've seen time and again that customers who feel valued and understood become loyal advocates for businesses. This is the philosophy driving our approach at Roundi. We believe that every delivery should feel personal, every interaction should matter.`,
    image: "/personal-delivery-service.jpg",
    date: "Oct 21, 2025",
    author: {
      name: "Sarah Johnson",
      title: "Customer Experience Lead",
      avatar: "/person-avatar-2.png",
    },
    readTime: 5,
  },
  {
    id: "3",
    title: "The Aha Moment",
    slug: "the-aha-moment",
    excerpt: "Discovering the moment when everything clicked about what we were building and why it matters.",
    content: `Discovering the moment when everything clicked about what we were building and why it matters.

There are defining moments in every company's journey. For us, it happened when we realized that delivery wasn't just about moving packages from point A to point B. It was about trust, visibility, and the confidence both businesses and customers feel when they know exactly what's happening.

That aha moment changed everything about how we approach problems and design solutions. Now, every feature we build is filtered through this lens: does this increase trust and transparency?`,
    image: "/office-meeting-collaboration.jpg",
    date: "Oct 18, 2025",
    author: {
      name: "Michael Chen",
      title: "Product Manager",
      avatar: "/person-avatar-3.png",
    },
    readTime: 3,
  },
  {
    id: "4",
    title: "Why we are building Roundi",
    slug: "why-we-are-building-roundi",
    excerpt: "The origin story and mission that drives Roundi forward every single day.",
    content: `The origin story and mission that drives Roundi forward every single day.

Every product starts with a problem. For us, it started with frustration. We watched businesses struggle to manage deliveries, watched customers anxiously track packages, and watched delivery partners navigate complex systems that didn't serve them well.

We asked ourselves: what if there was a platform that made delivery simple to run and delightful to receive? What if technology could bridge the gap between these three parties and create genuine value for everyone?

That's why we're building Roundi. We're not just creating another logistics tool. We're building a movement to transform how deliveries work in Africa and beyond.`,
    image: "/startup-team-office.jpg",
    date: "Oct 5, 2025",
    author: {
      name: "James Okonkwo",
      title: "Co-founder",
      avatar: "/person-avatar-4.jpg",
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
