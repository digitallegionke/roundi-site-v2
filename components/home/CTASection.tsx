import Link from 'next/link';
import Image from 'next/image';

export function CTASection() {
  return (
    <div id="contact" className="relative w-full">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start p-[16px] md:p-[40px] lg:p-[60px] xl:p-[80px] relative size-full">
          <div className="min-h-[400px] md:min-h-[550px] lg:h-[657px] relative rounded-[20px] shrink-0 w-full">
            <Image
              alt="CTA background"
              fill
              className="object-cover object-center pointer-events-none rounded-[20px]"
              src="/cta-bg.png"
            />
            <div className="flex flex-col justify-end size-full">
              <div className="box-border content-stretch flex flex-col gap-[10px] min-h-[400px] md:min-h-[550px] lg:h-[657px] items-start justify-end px-[24px] md:px-[36px] lg:px-[46px] py-[40px] md:py-[54px] lg:py-[67px] relative w-full">
                <div className="content-stretch flex flex-col gap-[20px] md:gap-[24px] lg:gap-[28px] items-start relative shrink-0 w-full max-w-[602px]">
                  <div className="content-stretch flex flex-col gap-[4px] items-center not-italic relative shrink-0 w-full max-w-[602px]">
                    <h2 className="font-sans font-semibold leading-[1.1] relative shrink-0 text-[32px] sm:text-[44px] md:text-[56px] lg:text-[64px] text-white tracking-[-2.4px] w-full">
                      Signup for our Early Access.
                    </h2>
                    <p className="font-sans font-normal leading-[1.5] relative shrink-0 text-[18px] md:text-[20px] lg:text-[22px] text-[rgba(255,255,255,0.9)] w-full">
                      Experience effortless, reliable delivery.
                    </p>
                  </div>
                  <Link href="/early-access-form" className="w-full max-w-[307px]">
                    <div className="bg-[#c8e298] h-[52px] md:h-[56px] lg:h-[60px] relative rounded-[50px] shrink-0 w-full cursor-pointer hover:bg-[#b8d288] transition-colors flex items-center justify-center">
                      <span className="font-sans font-bold text-[#162318] text-[16px] md:text-[18px] lg:text-[20px] tracking-[-0.4px]">
                        Sign up for Early Access
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
  );
}
