import Image from 'next/image';

export function FeaturesSection() {
  const features = [
    {
      title: 'Smart Routing That Knows African Roads',
      description: "Not Silicon Valley assumptions. Routing built for Nairobi's estates, matatu routes, and real traffic patterns. Your riders move faster, your orders arrive on time, and your business scales without chaos.",
      image: '/Features/feature-1.webp',
      imageOnLeft: true,
    },
    {
      title: 'Real-Time Visibility Across Every Order',
      description: "Complete transparency from dispatch to delivery. Track every rider, every order, every mile. Customers get accurate ETAs. You get the foundation to grow confidently.",
      image: '/Features/feature-2.webp',
      imageOnLeft: false,
    },
    {
      title: 'Operational Excellence at Scale',
      description: "Complete visibility and control over your delivery operations. Track performance, optimize efficiency, and build the operational foundation that grows with your business.",
      image: '/Features/feature-3.webp',
      imageOnLeft: true,
    },
  ];

  return (
    <div id="features-section" className="relative shrink-0 w-full scroll-mt-20">
      <div id="about" className="absolute -top-20" />
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(0,0,0,0.12)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[32px] md:gap-[48px] lg:gap-[64px] items-center p-[32px] md:p-[56px] lg:p-[80px] relative w-full">
          <h2 className="font-sans font-semibold leading-none not-italic relative shrink-0 text-[28px] sm:text-[38px] md:text-[50px] lg:text-[65px] text-black tracking-[-1.2px] sm:tracking-[-1.6px] md:tracking-[-2px] lg:tracking-[-2.6px] w-full">
            Built for{' '}
            <br className="hidden sm:block" aria-hidden="true" />
            Where You're Going Next
          </h2>
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
            {features.map((feature, index) => {
              const isSticky = index < 2;
              const topPosition = index === 0 ? '0px' : '10px';
              // Higher index = higher z-index, so cards stack on top of each other
              const zIndex = index + 1;

              return (
                <div
                  key={index}
                  className={`bg-white border border-[#e5e5e5] rounded-[16px] md:rounded-[20px] lg:rounded-[24px] p-[20px] md:p-[24px] lg:p-[32px] w-full ${
                    isSticky ? 'sticky' : 'relative'
                  }`}
                  style={{
                    top: isSticky ? topPosition : 'auto',
                    zIndex: zIndex,
                    marginBottom: index < features.length - 1 ? '24px' : '0',
                    // Force stacking context for consistent behavior across browsers
                    transform: 'translateZ(0)',
                    WebkitTransform: 'translateZ(0)',
                    willChange: isSticky ? 'top' : undefined,
                  }}
                >
                  <div
                    className={`flex flex-col ${
                      feature.imageOnLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'
                    } gap-[24px] md:gap-[28px] lg:gap-[32px] items-start`}
                  >
                    {/* Image */}
                    <div className="w-full lg:w-1/2 h-[280px] md:h-[340px] lg:h-[380px] relative rounded-[12px] md:rounded-[14px] lg:rounded-[16px] overflow-hidden shrink-0">
                      <Image alt={feature.title} fill className="object-cover" src={feature.image} />
                    </div>

                    {/* Content */}
                    <div className="flex flex-col gap-[16px] md:gap-[18px] lg:gap-[20px] w-full lg:w-1/2">
                      <h3 className="font-sans font-semibold leading-[1.2] not-italic text-[26px] md:text-[32px] lg:text-[38px] xl:text-[42px] text-black tracking-[-0.6px] md:tracking-[-0.8px] lg:tracking-[-1px]">
                        {feature.title}
                      </h3>
                      <p className="font-sans leading-[1.6] not-italic text-[16px] md:text-[18px] lg:text-[20px] text-[#999999]">{feature.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
