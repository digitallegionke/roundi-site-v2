import Image from 'next/image';

export function FeaturesSection() {
  const features = [
    {
      title: 'Grow Without the Growing Pains',
      description: "Whether you're sending out 5 or 50 deliveries a day, Roundi makes scaling smooth and stress-free.",
      image: '/feature-1.png',
      imageOnLeft: true,
    },
    {
      title: 'Transparency at Every Step',
      description: "Track riders in real time and give customers accurate ETAs, so there's never a \"Where's my order?\" moment.",
      image: 'https://images.unsplash.com/photo-1586449480537-3a22cf98b04c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWxpdmVyeSUyMHRyYWNraW5nJTIwbWFwJTIwbW9iaWxlfGVufDF8fHx8MTc2NDY5NDgxN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      imageOnLeft: false,
    },
    {
      title: 'Deliver Like the Big Brands',
      description: 'Offer customers professional, on-time delivery — without the big corporate budget.',
      image: 'https://images.unsplash.com/photo-1762851452423-34e7cf452780?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZWxpdmVyeSUyMHNlcnZpY2V8ZW58MXx8fHwxNzY0NjkzOTcwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      imageOnLeft: true,
    },
  ];

  return (
    <div id="features-section" className="relative shrink-0 w-full scroll-mt-20">
      <div id="about" className="absolute -top-20" />
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(0,0,0,0.12)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[32px] md:gap-[48px] lg:gap-[64px] items-center p-[32px] md:p-[56px] lg:p-[80px] relative w-full">
          <p className="font-['Open_Runde',sans-serif] font-semibold leading-none not-italic relative shrink-0 text-[28px] sm:text-[38px] md:text-[50px] lg:text-[65px] text-black tracking-[-1.2px] sm:tracking-[-1.6px] md:tracking-[-2px] lg:tracking-[-2.6px] w-full">
            Experience the ease of organized,{' '}
            <br className="hidden sm:block" aria-hidden="true" />
            on-time deliveries.
          </p>
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
            {features.map((feature, index) => {
              const isSticky = index < 2;
              const topPosition = index === 0 ? '0px' : '10px';
              const zIndex = index + 1;

              return (
                <div
                  key={index}
                  className={`bg-white border border-[#f0f0f0] rounded-[16px] md:rounded-[20px] lg:rounded-[24px] p-[20px] md:p-[24px] lg:p-[32px] w-full ${
                    isSticky ? 'sticky' : 'relative'
                  } shadow-sm`}
                  style={{
                    top: isSticky ? topPosition : 'auto',
                    zIndex: zIndex,
                    marginBottom: index < features.length - 1 ? '16px' : '0',
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
                      <h3 className="font-['Open_Runde',sans-serif] font-semibold leading-[1.2] not-italic text-[26px] md:text-[32px] lg:text-[38px] xl:text-[42px] text-black tracking-[-0.6px] md:tracking-[-0.8px] lg:tracking-[-1px]">
                        {feature.title}
                      </h3>
                      <p className="font-['Inter',sans-serif] leading-[1.6] not-italic text-[24px] text-[#999999]">{feature.description}</p>
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
