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
              <div className="box-border content-stretch flex flex-col items-start justify-end pb-[24px] md:pb-[36px] lg:pb-[50px] px-[16px] md:px-[28px] lg:px-[40px] relative size-full">

                <div className="content-stretch flex flex-col gap-[24px] md:gap-[32px] lg:gap-[40px] items-start relative shrink-0 w-full lg:w-[1021px]">
                  <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
                    <p className="font-['Open_Runde',sans-serif] font-semibold leading-none not-italic relative shrink-0 text-[32px] sm:text-[42px] md:text-[56px] lg:text-[68px] xl:text-[78px] text-white tracking-[-1.2px] sm:tracking-[-1.8px] md:tracking-[-2.4px] lg:tracking-[-2.8px] xl:tracking-[-3.12px] w-full">
                      Startup hustle or seasoned brand. Deliver better, every time.
                    </p>
                  </div>
                  <div className="content-stretch flex flex-col sm:flex-row gap-[12px] md:gap-[16px] lg:gap-[20px] items-center sm:items-start relative shrink-0 w-full">
                    <Link href="/early-access-form" className="w-full sm:w-auto inline-flex">
                      <div className="bg-[#c8e298] box-border inline-flex gap-[10px] items-center justify-center px-[20px] md:px-[30px] lg:px-[40px] py-[14px] md:py-[16px] lg:py-[20px] relative rounded-[50px] shrink-0 cursor-pointer hover:bg-[#b8d288] transition-colors w-full sm:w-auto min-h-[48px] sm:min-h-auto -webkit-appearance-none">
                        <p className="font-['Inter',sans-serif] font-bold leading-none not-italic relative shrink-0 text-[#162318] text-[16px] md:text-[18px] lg:text-[21px] text-center tracking-[-0.42px] whitespace-nowrap">
                          Sign up for Early Access
                        </p>
                      </div>
                    </Link>
                    <Link href="/contact" className="w-full sm:w-auto inline-flex">
                      <div className="box-border inline-flex gap-[10px] items-center justify-center px-[20px] md:px-[30px] lg:px-[40px] py-[14px] md:py-[16px] lg:py-[20px] relative rounded-[50px] shrink-0 cursor-pointer hover:bg-white/10 transition-colors w-full sm:w-auto min-h-[48px] sm:min-h-auto -webkit-appearance-none">
                        <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[50px]" />
                        <p className="font-['Inter',sans-serif] font-bold leading-none not-italic relative shrink-0 text-[16px] md:text-[18px] lg:text-[21px] text-center text-white tracking-[-0.42px] whitespace-nowrap">
                          Book a Demo
                        </p>
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
