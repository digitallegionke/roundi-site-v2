'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import Link from 'next/link';

interface FAQItemProps {
  question: string;
  answer: string | React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
}

function FAQItem({ question, answer, isOpen, onToggle }: FAQItemProps) {
  return (
    <div
      className="box-border border-b border-[#e5e5e5] content-stretch flex flex-col py-[24px] md:py-[28px] lg:py-[32px] relative shrink-0 w-full cursor-pointer group"
      onClick={onToggle}
    >
      <div className="flex items-start justify-between gap-4 w-full">
        <p className="font-sans font-medium leading-[1.3] not-italic text-[17px] md:text-[19px] lg:text-[21px] text-black flex-1">
          {question}
        </p>
        <div className="relative shrink-0 size-[24px] md:size-[28px] lg:size-[32px] text-black group-hover:opacity-70 transition-opacity">
          {isOpen ? <Minus className="size-full" strokeWidth={2} /> : <Plus className="size-full" strokeWidth={2} />}
        </div>
      </div>
      {isOpen && (
        <div className="mt-[16px] md:mt-[20px] lg:mt-[24px] pr-[36px] md:pr-[40px] lg:pr-[48px]">
          <div className="font-sans leading-[1.5] not-italic text-[15px] md:text-[17px] lg:text-[19px] text-[#6f6f6f]">
            {typeof answer === 'string' ? <p>{answer}</p> : answer}
          </div>
        </div>
      )}
    </div>
  );
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is Roundi?",
      answer:
        'Roundi is a logistics platform that gives African product businesses smart routing, real-time visibility, and operational tools — everything you need to operate reliably today and scale boldly tomorrow. We move with your business from your first order to your biggest market.',
    },
    {
      question: 'Who is Roundi built for?',
      answer:
        'Roundi is built for ambitious product-based businesses that rely on delivery and are hungry to grow — including D2C brands, boutique manufacturers, cosmetics & skincare brands, fashion & apparel, food & beverage, and SMEs scaling nationwide or into new markets.',
    },
    {
      question: 'How is Roundi different from Uber delivery?',
      answer: (
        <>
          <p className="mb-3">
            Uber is a consumer-focused marketplace where brands are just order sources. Roundi is a logistics platform built for product brands — smart routing, real-time visibility, and operational tools that scale from your first order to your biggest market.
          </p>
          <Link
            href="/blog/roundi-vs-uber-bolt-delivery"
            className="text-[#162318] hover:text-[#1a2a1f] font-medium underline inline-flex items-center gap-1"
            onClick={(e) => e.stopPropagation()}
          >
            Read the full comparison →
          </Link>
        </>
      ),
    },
    {
      question: 'How is Roundi different from Leta?',
      answer: (
        <>
          <p className="mb-3">
            Leta is built for large enterprises. Roundi is a platform for ambitious product brands — smart routing and real-time visibility that moves with your business. Faster to launch, built to scale, designed for where you're going next.
          </p>
          <Link
            href="/blog/roundi-vs-leta"
            className="text-[#162318] hover:text-[#1a2a1f] font-medium underline inline-flex items-center gap-1"
            onClick={(e) => e.stopPropagation()}
          >
            Read the full comparison →
          </Link>
        </>
      ),
    },
    {
      question: 'How does Roundi help businesses grow?',
      answer:
        "Roundi builds the foundation for growth by providing: Smart routing that scales with order volume, Real-time visibility that builds customer trust, Operational tools that grow with your business, Data and insights for better decisions. You're not just managing deliveries — you're laying the rails to go as far as you dare.",
    },
    {
      question: 'Does Roundi offer real-time visibility?',
      answer:
        'Yes. Real-time visibility across every order, every rider, every mile. Businesses get complete transparency, and customers receive accurate ETAs — building trust and reducing support calls.',
    },
    {
      question: 'Is Roundi available across Kenya?',
      answer:
        'Roundi is built Nairobi-first with deep knowledge of local roads and conditions, but the platform works anywhere in Kenya where product businesses need reliable delivery operations.',
    },
    {
      question: 'Do riders need expensive smartphones?',
      answer:
        'No. Roundi works on standard Android smartphones commonly used by riders in Kenya. Built for real African conditions, not Silicon Valley assumptions.',
    },
    {
      question: 'Does Roundi scale from small to large operations?',
      answer:
        "Yes. The platform moves with you — from your first order to your biggest market. Whether you have one rider today or planning for fifty, Roundi builds the foundation for where you're going next.",
    },
    {
      question: 'How much does Roundi cost?',
      answer:
        'Roundi offers affordable pricing designed for growing African businesses, unlike expensive enterprise tools or per-delivery platforms. Pricing details will be shared at launch, with early access users receiving priority benefits and preferred rates.',
    },
    {
      question: 'Is Roundi difficult to set up?',
      answer:
        "No. The setup is straightforward and designed for non-technical users. Most businesses can start managing their deliveries quickly, without technical complexity.",
    },
    {
      question: 'When does Roundi officially launch?',
      answer:
        'Roundi is currently in early access. Ambitious businesses can sign up now to build their foundation early and get priority access before public launch.',
    },
    {
      question: 'How do I join early access?',
      answer:
        'Sign up through the Roundi website. Early users get priority onboarding, early feature access, and preferred pricing — plus the chance to help shape the platform.',
    },
  ];

  return (
    <div className="relative shrink-0 w-full bg-[#f8f8f8]">
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col lg:flex-row gap-[40px] md:gap-[60px] lg:gap-[100px] xl:gap-[140px] items-start p-[32px] md:p-[56px] lg:p-[80px] relative w-full">
          {/* Left side - Heading */}
          <div className="flex flex-col gap-[12px] md:gap-[16px] lg:gap-[20px] shrink-0 lg:w-[400px] xl:w-[450px]">
            <p className="font-sans font-medium leading-none not-italic text-[14px] md:text-[15px] lg:text-[16px] text-[#6f6f6f] tracking-[0.5px] uppercase">
              FAQs
            </p>
            <h2 className="font-sans font-semibold leading-[1.1] not-italic text-[32px] md:text-[42px] lg:text-[52px] text-black tracking-[-1.2px] md:tracking-[-1.6px] lg:tracking-[-2px]">
              Common questions & answers
            </h2>
          </div>

          {/* Right side - FAQ Items */}
          <div className="flex flex-col items-start flex-1 w-full">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
