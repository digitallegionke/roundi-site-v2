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
      question: "What is delivery management software in Kenya?",
      answer:
        'Delivery management software in Kenya is a platform that helps businesses coordinate their last mile delivery operations. Roundi is delivery management software built specifically for Kenyan SMEs, offering route optimization, rider management, real-time tracking, and dispatch tools designed for businesses in Nairobi and across East Africa.',
    },
    {
      question: 'Is Roundi a last mile delivery software for SMEs in Nairobi?',
      answer:
        "Yes, Roundi is last mile delivery management software designed specifically for Kenyan SMEs. We help restaurants, e-commerce stores, and logistics businesses in Nairobi manage their delivery operations—from route planning and rider dispatch to real-time order tracking. Whether you're doing 5 or 500 deliveries a day across Kenya, Roundi makes delivery management simple and reliable.",
    },
    {
      question: 'How does Roundi compare to traditional delivery platforms in Kenya?',
      answer:
        'Unlike traditional delivery platforms that struggled with reliability and transparency, Roundi gives Kenyan businesses full control over their delivery operations. We provide modern delivery management software with real-time tracking, optimized routes, and rider accountability—without the high costs and unpredictability of older dispatch systems. You own your customer relationships and delivery experience.',
    },
    {
      question: 'Why do Kenyan businesses need delivery management software?',
      answer:
        'Kenyan businesses need delivery management software to handle the complexities of last mile delivery in cities like Nairobi—traffic congestion, rider coordination, customer expectations for real-time updates, and route optimization. Manual dispatch methods lead to delays, lost orders, and unhappy customers. Roundi solves these problems with technology built specifically for East African logistics challenges.',
    },
    {
      question: 'Is my delivery data secure with Roundi?',
      answer:
        'Absolutely. Roundi uses industry-standard encryption and security practices to protect your business and customer data. All delivery information, customer details, and business analytics are stored securely in Kenya-compliant data centers and never shared with third parties without your explicit consent.',
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
