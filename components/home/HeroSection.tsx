'use client';

import { useState } from 'react';
import { Menu as MenuIcon, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export function HeroSection() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToFeatures = () => {
    const featuresSection = document.getElementById('features-section');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <div className="bg-white min-h-[600px] md:min-h-[750px] lg:h-[942px] relative shrink-0 w-full">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] min-h-[600px] md:min-h-[750px] lg:h-[942px] items-start p-[12px] md:p-[16px] lg:p-[20px] relative w-full">
          <div className="basis-0 grow min-h-px min-w-px relative rounded-[10px] md:rounded-[15px] lg:rounded-[20px] shrink-0 w-full">
            <Image
              alt="Hero background"
              fill
              className="object-cover object-center pointer-events-none rounded-[10px] md:rounded-[15px] lg:rounded-[20px]"
              src="/hero-bg.png"
              priority
            />
            <div className="size-full">
              <div className="box-border content-stretch flex flex-col items-start justify-between pb-[24px] md:pb-[36px] lg:pb-[50px] pt-[20px] md:pt-[30px] lg:pt-[40px] px-[16px] md:px-[28px] lg:px-[40px] relative size-full">
                {/* Dark Navbar */}
                <div className="backdrop-blur-[7px] backdrop-filter bg-[rgba(22,35,24,0.12)] relative rounded-[10px] shrink-0 w-full">
                  <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.14)] border-solid inset-0 pointer-events-none rounded-[10px]" />
                  <div className="flex flex-row items-center size-full">
                    <div className="box-border content-stretch flex items-center justify-between px-[12px] md:px-[16px] lg:px-[18px] py-[14px] md:py-[18px] lg:py-[22px] relative w-full">
                      <div className="content-stretch flex gap-[72px] items-center relative shrink-0">
                        <Link href="/">
                          <Image
                            src="/logos/white-roundi-logo.svg"
                            alt="Roundi Logo"
                            width={222}
                            height={63}
                            className="h-[40px] md:h-[50px] lg:h-[63px] w-auto"
                          />
                        </Link>
                        <div className="hidden lg:flex content-stretch font-['Inter',sans-serif] font-medium gap-[20px] xl:gap-[30px] items-center leading-none not-italic relative shrink-0 text-[18px] xl:text-[23px] text-nowrap text-white tracking-[-0.46px] whitespace-pre">
                          <Link href="/" className="relative shrink-0 cursor-pointer hover:opacity-80 transition-opacity">
                            Home
                          </Link>
                          <a
                            href="#features-section"
                            className="relative shrink-0 cursor-pointer hover:opacity-80 transition-opacity"
                            onClick={(e) => {
                              e.preventDefault();
                              scrollToFeatures();
                            }}
                          >
                            About
                          </a>
                          <Link href="/blog" className="relative shrink-0 cursor-pointer hover:opacity-80 transition-opacity">
                            Blog
                          </Link>
                          <Link href="/contact" className="relative shrink-0 cursor-pointer hover:opacity-80 transition-opacity">
                            Contact Us
                          </Link>
                          <Link href="/early-access-form" className="relative shrink-0 cursor-pointer hover:opacity-80 transition-opacity">
                            Early Access
                          </Link>
                        </div>
                      </div>

                      {/* Desktop Button */}
                      <div className="hidden lg:flex">
                        <Link href="/contact">
                          <div className="bg-[#c8e298] box-border content-stretch flex gap-[10px] items-center justify-center px-[16px] md:px-[20px] lg:px-[25px] py-[10px] md:py-[12px] lg:py-[14px] relative rounded-[50px] shrink-0 cursor-pointer hover:bg-[#b8d288] transition-colors">
                            <p className="font-['Inter',sans-serif] font-semibold leading-none not-italic relative shrink-0 text-[#162318] text-[16px] md:text-[18px] lg:text-[20px] text-nowrap tracking-[-0.4px] whitespace-pre">
                              Talk to Us
                            </p>
                          </div>
                        </Link>
                      </div>

                      {/* Mobile/Tablet Hamburger Menu */}
                      <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden p-2 cursor-pointer hover:opacity-70 transition-opacity"
                        aria-label="Toggle menu"
                      >
                        {isOpen ? <X className="w-[24px] h-[24px] text-white" /> : <MenuIcon className="w-[24px] h-[24px] text-white" />}
                      </button>
                    </div>
                  </div>

                  {/* Mobile Menu Dropdown */}
                  {isOpen && (
                    <div className="lg:hidden absolute top-full left-0 right-0 mt-2 backdrop-blur-[7px] backdrop-filter bg-[rgba(22,35,24,0.9)] border border-[rgba(255,255,255,0.14)] rounded-[10px] shadow-lg z-50">
                      <div className="flex flex-col p-[20px] gap-[16px]">
                        <Link
                          href="/"
                          className="font-['Inter',sans-serif] font-medium text-[18px] text-white tracking-[-0.46px] py-[12px] hover:opacity-70 transition-opacity"
                          onClick={() => setIsOpen(false)}
                        >
                          Home
                        </Link>
                        <a
                          href="#features-section"
                          className="font-['Inter',sans-serif] font-medium text-[18px] text-white tracking-[-0.46px] py-[12px] hover:opacity-70 transition-opacity"
                          onClick={(e) => {
                            e.preventDefault();
                            scrollToFeatures();
                          }}
                        >
                          About
                        </a>
                        <Link
                          href="/blog"
                          className="font-['Inter',sans-serif] font-medium text-[18px] text-white tracking-[-0.46px] py-[12px] hover:opacity-70 transition-opacity"
                          onClick={() => setIsOpen(false)}
                        >
                          Blog
                        </Link>
                        <Link
                          href="/contact"
                          className="font-['Inter',sans-serif] font-medium text-[18px] text-white tracking-[-0.46px] py-[12px] hover:opacity-70 transition-opacity"
                          onClick={() => setIsOpen(false)}
                        >
                          Contact Us
                        </Link>
                        <Link
                          href="/early-access-form"
                          className="font-['Inter',sans-serif] font-medium text-[18px] text-white tracking-[-0.46px] py-[12px] hover:opacity-70 transition-opacity"
                          onClick={() => setIsOpen(false)}
                        >
                          Early Access
                        </Link>
                        <Link href="/contact" onClick={() => setIsOpen(false)}>
                          <div className="bg-[#c8e298] box-border flex items-center justify-center px-[20px] py-[14px] rounded-[50px] cursor-pointer hover:bg-[#b8d288] transition-colors mt-[8px]">
                            <p className="font-['Inter',sans-serif] font-semibold text-[18px] text-[#162318] tracking-[-0.4px]">Talk to Us</p>
                          </div>
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
                <div className="content-stretch flex flex-col gap-[24px] md:gap-[32px] lg:gap-[40px] items-start relative shrink-0 w-full lg:w-[1021px]">
                  <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
                    <p className="font-['Open_Runde',sans-serif] font-semibold leading-none not-italic relative shrink-0 text-[32px] sm:text-[42px] md:text-[56px] lg:text-[68px] xl:text-[78px] text-white tracking-[-1.2px] sm:tracking-[-1.8px] md:tracking-[-2.4px] lg:tracking-[-2.8px] xl:tracking-[-3.12px] w-full">
                      Startup hustle or seasoned brand. Deliver better, every time.
                    </p>
                  </div>
                  <div className="content-stretch flex flex-col sm:flex-row gap-[12px] md:gap-[16px] lg:gap-[20px] items-stretch sm:items-start relative shrink-0">
                    <Link href="/early-access-form" className="w-full sm:w-auto">
                      <div className="bg-[#c8e298] box-border content-stretch flex gap-[10px] items-center justify-center px-[20px] md:px-[30px] lg:px-[40px] py-[14px] md:py-[16px] lg:py-[20px] relative rounded-[50px] shrink-0 cursor-pointer hover:bg-[#b8d288] transition-colors w-full sm:w-auto">
                        <p className="font-['Inter',sans-serif] font-bold leading-none not-italic relative shrink-0 text-[#162318] text-[16px] md:text-[18px] lg:text-[21px] text-center tracking-[-0.42px] whitespace-nowrap">
                          Sign up for Early Access
                        </p>
                      </div>
                    </Link>
                    <Link href="/contact" className="w-full sm:w-auto">
                      <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[20px] md:px-[30px] lg:px-[40px] py-[14px] md:py-[16px] lg:py-[20px] relative rounded-[50px] shrink-0 cursor-pointer hover:bg-white/10 transition-colors w-full sm:w-auto">
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
