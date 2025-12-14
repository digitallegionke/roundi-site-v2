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
    title: 'SMEs',
    content:
      'Manage daily deliveries without the chaos.\nPlan routes, track riders, and reduce failed deliveries — even with just one rider.',
    image: '/placeholder.svg',
  },
  {
    id: 'ecommerce',
    title: 'E-commerce',
    content:
      'Turn delivery into a trust-builder, not a complaint channel.\nGive customers live ETAs and manage multiple orders with ease.',
    image:
      'https://images.unsplash.com/photo-1631010232525-cd45da1a1fbc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBwYWNrYWdlJTIwZGVsaXZlcnl8ZW58MXx8fHwxNzY1NzIwODIzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 'retail',
    title: 'Retail',
    content:
      'Deliver faster, with fewer mistakes.\nTrack multiple deliveries per rider and keep orders moving on time.',
    image:
      'https://images.unsplash.com/photo-1684560207594-a68e6b2f6ff1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXRhaWwlMjBzdG9yZSUyMGRlbGl2ZXJ5fGVufDF8fHx8MTc2NTcyMDgyM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 'restaurants',
    title: 'Restaurants',
    content:
      'Keep control of your deliveries and your margins.\nTrack your own riders and deliver food on time, every time.',
    image:
      'https://images.unsplash.com/photo-1640082380928-2f7079392823?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwZm9vZCUyMGRlbGl2ZXJ5fGVufDF8fHx8MTc2NTYyMjYwNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
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
            Who this is for
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
                        '/placeholder.svg'
                      : '/placeholder.svg'
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
                        '/placeholder.svg'
                      : '/placeholder.svg'
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
