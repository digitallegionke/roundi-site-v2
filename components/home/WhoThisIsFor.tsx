'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Plus, Minus } from 'lucide-react';

interface AccordionItem {
  id: string;
  title: string;
  content: string;
  image: string;
}

const accordionData: AccordionItem[] = [
  {
    id: 'smes',
    title: 'Product Brands & SMEs',
    content:
      "From your first order to your biggest market.\n\nBuild the logistics platform to scale confidently — whether you're shipping 5 orders or 500. Smart routing, real-time visibility, and operational tools that grow with you.",
    image: '/Who this is for/SME.webp',
  },
  {
    id: 'ecommerce',
    title: 'E-commerce & D2C Brands',
    content:
      'Turn delivery into your competitive advantage.\n\nGive customers the transparency they expect. Access the platform to handle growth. Scale from neighborhood deliveries to nationwide reach.',
    image: '/Who this is for/E-commerce.webp',
  },
  {
    id: 'retail',
    title: 'Retail & Wholesale',
    content:
      'Move product faster. Reach more customers.\n\nLogistics platform built for businesses ready to expand. Optimize every route, track every order, and build operational excellence at scale.',
    image: '/Who this is for/Retail.webp',
  },
  {
    id: 'restaurants',
    title: 'Food & Beverage',
    content:
      'Own your delivery experience. Keep your margins.\n\nBuild on a platform that moves with you — from single-location delivery to multi-branch operations. Control your operations. Scale your reach.',
    image: '/Who this is for/Restaurants.webp',
  },
];

export function WhoThisIsFor() {
  const [expandedId, setExpandedId] = useState<string>('smes');

  const toggleAccordion = (id: string) => {
    setExpandedId(expandedId === id ? '' : id);
  };

  return (
    <section className="bg-white w-full relative shrink-0">
      <div
        aria-hidden="true"
        className="absolute border-[1px_0px_0px] border-[rgba(0,0,0,0.12)] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[32px] md:gap-[48px] lg:gap-[64px] items-start p-[32px] md:p-[56px] lg:p-[80px] relative w-full">
          {/* Section Title */}
          <h2 className="font-sans font-semibold leading-[1.1] not-italic text-[32px] md:text-[42px] lg:text-[52px] text-black tracking-[-1.2px] md:tracking-[-1.6px] lg:tracking-[-2px]">
            Built for Businesses Ready to Scale
          </h2>

          {/* Content Grid */}
          <div className="flex flex-col lg:flex-row gap-[32px] md:gap-[40px] lg:gap-[80px] items-start w-full">
            {/* Image - Show on mobile/tablet at top */}
            <div className="w-full lg:hidden">
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] rounded-[12px] md:rounded-[16px] overflow-hidden">
                <Image
                  alt="Business owner managing deliveries"
                  fill
                  className="object-cover transition-opacity duration-300"
                  src={
                    expandedId
                      ? accordionData.find((item) => item.id === expandedId)?.image ||
                        '/Who this is for/SME.webp'
                      : '/Who this is for/SME.png'
                  }
                />
              </div>
            </div>

            {/* Accordion */}
            <div className="w-full lg:flex-1">
              {accordionData.map((item) => (
                <div key={item.id}>
                  <button
                    onClick={() => toggleAccordion(item.id)}
                    className="w-full text-left py-[20px] md:py-[24px] lg:py-[32px] flex items-center justify-between gap-3 md:gap-4 border-b border-[#dfdfdf] transition-all group"
                  >
                    <div className="flex-1 min-w-0">
                      <h3 className="font-sans font-semibold leading-[1.2] not-italic text-[20px] sm:text-[22px] md:text-[26px] lg:text-[30px] xl:text-[32px] text-black tracking-[-0.5px] sm:tracking-[-0.6px] md:tracking-[-0.8px] lg:tracking-[-1px] mb-0">
                        {item.title}
                      </h3>
                      {expandedId === item.id && (
                        <p className="font-sans leading-[1.6] not-italic text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] text-[#6f6f6f] mt-[12px] sm:mt-[16px] md:mt-[20px] lg:mt-[24px] whitespace-pre-line pr-2 md:pr-4">
                          {item.content}
                        </p>
                      )}
                    </div>
                    <div className="relative shrink-0 size-[24px] md:size-[28px] lg:size-[32px] text-black group-hover:opacity-70 transition-opacity">
                      {expandedId === item.id ? (
                        <Minus className="size-full" strokeWidth={2} />
                      ) : (
                        <Plus className="size-full" strokeWidth={2} />
                      )}
                    </div>
                  </button>
                </div>
              ))}
            </div>

            {/* Image - Show on desktop on right */}
            <div className="hidden lg:block lg:flex-1 lg:max-w-[601px]">
              <div className="relative w-full aspect-[601/647] rounded-[20px] overflow-hidden sticky top-[100px]">
                <Image
                  alt="Business owner managing deliveries"
                  fill
                  className="object-cover transition-opacity duration-300"
                  src={
                    expandedId
                      ? accordionData.find((item) => item.id === expandedId)?.image ||
                        '/Who this is for/SME.webp'
                      : '/Who this is for/SME.png'
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
