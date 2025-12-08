'use client';

import Link from 'next/link';
import Image from 'next/image';

export function HeroSection() {
  return (
    <div className="bg-white min-h-[600px] md:min-h-[750px] lg:h-[942px] relative shrink-0 w-full">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] min-h-[600px] md:min-h-[750px] lg:h-[942px] items-start relative w-full">
          <div className="basis-0 grow min-h-px min-w-px relative w-full">
            <Image
              alt="Hero background"
              fill
              className="object-cover object-center pointer-events-none"
              src="/hero-bg.png"
              priority
            />
            <div className="size-full">
              <div className="box-border content-stretch flex flex-col items-start justify-end pb-[40px] md:pb-[50px] lg:pb-[80px] px-[16px] md:px-[28px] lg:px-[40px] pt-[300px] md:pt-[350px] lg:pt-[400px] relative size-full">

                <div className="content-stretch flex flex-col gap-[20px] md:gap-[24px] lg:gap-[32px] items-start relative shrink-0 w-full lg:w-[1021px]">
                  <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
                    <h1 className="font-sans font-semibold leading-[1.1] not-italic relative shrink-0 text-[40px] sm:text-[42px] md:text-[56px] lg:text-[68px] xl:text-[78px] text-white tracking-[-1.2px] sm:tracking-[-1.8px] md:tracking-[-2.4px] lg:tracking-[-2.8px] xl:tracking-[-3.12px] w-full [-webkit-font-smoothing:antialiased] [text-rendering:optimizeLegibility]">
                      Startup hustle or seasoned brand. Deliver better, every time.
                    </h1>
                  </div>
                  <div className="content-stretch flex flex-col sm:flex-row gap-[16px] md:gap-[20px] lg:gap-[24px] items-stretch sm:items-start relative shrink-0 w-full">
                    <Link href="/early-access-form" className="w-full sm:w-auto inline-flex [-webkit-tap-highlight-color:transparent]">
                      <div className="bg-[#c8e298] box-border inline-flex gap-[10px] items-center justify-center px-[24px] md:px-[32px] lg:px-[40px] py-[16px] md:py-[18px] lg:py-[20px] relative rounded-[50px] shrink-0 cursor-pointer hover:bg-[#b8d288] transition-colors w-full sm:w-auto min-h-[52px] sm:min-h-auto [-webkit-appearance:none] [-webkit-tap-highlight-color:transparent]">
                        <span className="font-sans font-bold leading-none not-italic relative shrink-0 text-[#162318] text-[16px] md:text-[18px] lg:text-[21px] text-center tracking-[-0.42px] whitespace-nowrap [-webkit-font-smoothing:antialiased]">
                          Sign up for Early Access
                        </span>
                      </div>
                    </Link>
                    <Link href="/contact" className="w-full sm:w-auto inline-flex [-webkit-tap-highlight-color:transparent]">
                      <div className="box-border inline-flex gap-[10px] items-center justify-center px-[24px] md:px-[32px] lg:px-[40px] py-[16px] md:py-[18px] lg:py-[20px] relative rounded-[50px] shrink-0 cursor-pointer hover:bg-white/10 transition-colors w-full sm:w-auto min-h-[52px] sm:min-h-auto [-webkit-appearance:none] [-webkit-tap-highlight-color:transparent]">
                        <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[50px]" />
                        <span className="font-sans font-bold leading-none not-italic relative shrink-0 text-[16px] md:text-[18px] lg:text-[21px] text-center text-white tracking-[-0.42px] whitespace-nowrap [-webkit-font-smoothing:antialiased]">
                          Talk to Us
                        </span>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
