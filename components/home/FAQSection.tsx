'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
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
          <p className="font-sans leading-[1.5] not-italic text-[15px] md:text-[17px] lg:text-[19px] text-[#6f6f6f]">
            {answer}
          </p>
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
        'Roundi is a delivery management and last-mile delivery software built for Kenyan SMEs. It helps businesses plan delivery routes, track riders in real time, manage multiple deliveries, and give customers accurate ETAs — all in one platform designed for Nairobi and other Kenyan cities.',
    },
    {
      question: 'Who is Roundi built for?',
      answer:
        'Roundi is built for small and medium businesses in Kenya that manage their own deliveries. This includes online stores, product brands, wholesalers, and shops with one or more riders handling daily deliveries.',
    },
    {
      question: 'How is Roundi different from Uber delivery?',
      answer:
        'Uber focuses on on-demand transport, not delivery operations. Roundi helps businesses manage their own riders, plan routes, track deliveries, and improve accountability — making it more cost-effective for businesses doing deliveries every day.',
    },
    {
      question: 'How is Roundi different from Leta?',
      answer:
        'Leta is built for large enterprises and logistics-heavy operations. Roundi is designed specifically for SMEs, with simpler setup, lower costs, and features focused on day-to-day delivery execution rather than complex logistics networks.',
    },
    {
      question: 'How does Roundi help businesses save money?',
      answer:
        'Roundi helps Kenyan businesses save money by: Optimizing routes to reduce fuel costs, Reducing failed and repeat deliveries, Cutting customer support calls with live tracking, Improving rider accountability and performance. Instead of hiring more riders or paying per-trip delivery fees, businesses run more efficient operations with what they already have.',
    },
    {
      question: 'Does Roundi offer real-time rider tracking?',
      answer:
        'Yes. Roundi provides real-time rider tracking and live delivery updates so businesses can monitor deliveries and customers receive accurate ETAs — reducing "Where is my order?" calls.',
    },
    {
      question: 'Is Roundi available across Kenya?',
      answer:
        'Roundi is built Nairobi-first, but works anywhere in Kenya where businesses manage deliveries using riders.',
    },
    {
      question: 'Do riders need expensive smartphones?',
      answer:
        'No. Roundi works on standard Android smartphones commonly used by riders in Kenya.',
    },
    {
      question: 'Can I use Roundi if I only have one rider?',
      answer:
        'Yes. Roundi works whether you have one rider or a full delivery team. It scales as your business grows.',
    },
    {
      question: 'How much does Roundi cost?',
      answer:
        'Roundi will offer affordable pricing designed for Kenyan SMEs, unlike enterprise logistics tools or per-delivery platforms. Pricing details will be shared at launch, with early access users receiving priority benefits.',
    },
    {
      question: 'Is Roundi difficult to set up?',
      answer:
        'No. Roundi is built for non-technical business owners. Most businesses can start managing deliveries quickly without technical onboarding.',
    },
    {
      question: 'When does Roundi officially launch?',
      answer:
        'Roundi is currently in early access. Businesses can sign up to test the platform and get priority access before public launch.',
    },
    {
      question: 'How do I join early access?',
      answer:
        'You can join early access by signing up on the Roundi website. Early users get priority onboarding and early feature access.',
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
