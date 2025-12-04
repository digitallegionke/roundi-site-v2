import { useState } from "react";
import { Plus, Minus } from "lucide-react";

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
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.3] not-italic text-[16px] md:text-[18px] lg:text-[20px] text-black flex-1">
          {question}
        </p>
        <div className="relative shrink-0 size-[24px] md:size-[28px] lg:size-[32px] text-black group-hover:opacity-70 transition-opacity">
          {isOpen ? (
            <Minus className="size-full" strokeWidth={2} />
          ) : (
            <Plus className="size-full" strokeWidth={2} />
          )}
        </div>
      </div>
      {isOpen && (
        <div className="mt-[16px] md:mt-[20px] lg:mt-[24px] pr-[36px] md:pr-[40px] lg:pr-[48px]">
          <p className="font-['Inter:Regular',sans-serif] leading-[1.5] not-italic text-[14px] md:text-[16px] lg:text-[18px] text-[#6f6f6f]">
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
      question: "What's Roundi?",
      answer: "Roundi is a delivery management platform designed to help product-based businesses streamline their delivery operations with smarter routes, dependable riders, and real-time tracking."
    },
    {
      question: "Who is Roundi for?",
      answer: "Roundi is perfect for product-based businesses of all sizes — from startups sending out their first deliveries to established brands scaling their operations. Whether you're doing 5 or 50 deliveries a day, we make it easy."
    },
    {
      question: "How is Roundi different from delivery companies or pickup points?",
      answer: "Unlike traditional delivery companies, Roundi gives you full control and visibility over your delivery operations. We provide the technology to optimize routes, track deliveries in real-time, and offer your customers a professional delivery experience — all without the high costs of big logistics providers."
    },
    {
      question: "Is my data safe?",
      answer: "Absolutely. We take data security seriously and use industry-standard encryption and security practices to protect your business and customer information. Your data is stored securely and never shared with third parties without your consent."
    }
  ];

  return (
    <div className="relative shrink-0 w-full bg-[#f8f8f8]">
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col lg:flex-row gap-[40px] md:gap-[60px] lg:gap-[100px] xl:gap-[140px] items-start p-[32px] md:p-[56px] lg:p-[80px] relative w-full">
          {/* Left side - Heading */}
          <div className="flex flex-col gap-[12px] md:gap-[16px] lg:gap-[20px] shrink-0 lg:w-[400px] xl:w-[450px]">
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-none not-italic text-[14px] md:text-[15px] lg:text-[16px] text-[#6f6f6f] tracking-[0.5px] uppercase">
              FAQs
            </p>
            <h2 className="font-['Open_Runde:Semibold',sans-serif] leading-[1.1] not-italic text-[32px] md:text-[42px] lg:text-[52px] text-black tracking-[-1.2px] md:tracking-[-1.6px] lg:tracking-[-2px]">
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