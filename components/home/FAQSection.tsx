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
        'Roundi is a delivery management software built for Kenyan SMEs. It helps businesses plan smarter routes, track riders in real time, send customer delivery updates, and manage proof of delivery — all in one simple platform.',
    },
    {
      question: 'Who is Roundi built for?',
      answer:
        "Roundi is perfect for businesses that do their own deliveries, including: E-commerce stores, Retail shops, Restaurants & cafes, Wines and spirits, Hardware stores & agro vets, Pharmacies, Fresh produce suppliers, Market sellers, Small courier businesses",
    },
    {
      question: 'Why should I join early access?',
      answer:
        'Early access users get: First access to new features, Lower lifetime pricing, Priority onboarding, Influence over product development, A head start before public launch',
    },
    {
      question: 'How does Roundi help my business save money?',
      answer:
        'Roundi reduces delivery costs by: More efficient routes, Better rider productivity, Fewer delivery errors, Automated customer updates, Cleaner cash-on-delivery reconciliation',
    },
    {
      question: 'How does rider tracking work?',
      answer:
        'Riders use the Roundi Rider App, which updates their location in real time so you can see: Their current position, Progress through stops, Delays, Completed deliveries',
    },
    {
      question: 'Do customers receive delivery updates?',
      answer:
        'Yes — via SMS or WhatsApp. They get: A tracking link, Live ETA, Delivery status, Proof of delivery',
    },
    {
      question: 'Does Roundi support cash-on-delivery (COD)?',
      answer:
        'Yes. Riders can log cash collected, and you can track: Cash per rider, Pending returns, Completed reconciliations',
    },
    {
      question: 'Is Roundi available all over Kenya?',
      answer:
        'Yes — optimized for Nairobi, Kiambu, Mombasa, Kisumu, Nakuru, Eldoret, and all other towns.',
    },
    {
      question: 'Do riders need expensive smartphones?',
      answer:
        'No. If the phone can run Google Maps, it can run Roundi.',
    },
    {
      question: 'How much will Roundi cost?',
      answer:
        'Pricing will be shared first with early access users. Early users get lifetime discounted pricing.',
    },
    {
      question: 'Is Roundi difficult to set up?',
      answer:
        'No. Setup takes less than 10 minutes: Sign up, Add riders, Add delivery orders, Start tracking',
    },
    {
      question: 'What makes Roundi different from other delivery apps?',
      answer:
        'Roundi is built specifically for Kenyan delivery realities: Estate layouts, Pin-drop issues, Traffic challenges, COD workflows, Rider device limitations, Customer communication habits',
    },
    {
      question: 'Can I use Roundi even if I have only 1 or 2 riders?',
      answer:
        'Yes. Roundi works for any team size.',
    },
    {
      question: 'When does Roundi officially launch?',
      answer:
        'Early access is open now. Public launch follows after feedback and onboarding rounds.',
    },
    {
      question: 'How do I join early access?',
      answer:
        'Click below and fill in your details.',
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
