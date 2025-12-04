import svgPaths from "../imports/svg-liouo0c3re";
import navSvgPaths from "../imports/svg-j6wv39u26g";
import { useState } from "react";
import { Menu, X } from "lucide-react";

// Navbar Logo Components
function Group() {
  return (
    <div className="absolute bottom-0 left-0 right-[71.07%] top-0" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 65 65">
        <g id="Group">
          <path d={navSvgPaths.p2fb41100} fill="url(#paint0_linear_6_1822)" id="Vector" />
          <g id="Group_2">
            <path d={navSvgPaths.p1a749500} fill="var(--fill-0, #162318)" id="Vector_2" />
            <path d={navSvgPaths.p2ac39000} fill="var(--fill-0, #162318)" id="Vector_3" />
          </g>
          <path d={navSvgPaths.p2467bb00} fill="url(#paint1_linear_6_1822)" id="Vector_4" />
          <g id="Group_3">
            <path d={navSvgPaths.p5353600} fill="var(--fill-0, #162318)" id="Vector_5" />
            <path d={navSvgPaths.p39435180} fill="var(--fill-0, #162318)" id="Vector_6" />
          </g>
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_6_1822" x1="61.096" x2="18.9514" y1="11.6738" y2="11.6738">
            <stop stopColor="#162318" />
            <stop offset="0.16" stopColor="#162318" />
            <stop offset="0.46" stopColor="#162318" stopOpacity="0.45" />
            <stop offset="0.65" stopColor="#162318" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_6_1822" x1="3.12985" x2="45.2771" y1="53.3247" y2="53.3247">
            <stop stopColor="#162318" />
            <stop offset="0.16" stopColor="#162318" />
            <stop offset="0.46" stopColor="#162318" stopOpacity="0.45" />
            <stop offset="0.65" stopColor="#162318" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute bottom-[23.02%] left-[33.16%] right-0 top-[15.69%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 149 40">
        <g id="Group">
          <path d={navSvgPaths.p1591ac80} fill="var(--fill-0, #162318)" id="Vector" />
          <path d={navSvgPaths.p1a098a80} fill="var(--fill-0, #162318)" id="Vector_2" />
          <path d={navSvgPaths.p2d51d840} fill="var(--fill-0, #162318)" id="Vector_3" />
          <path d={navSvgPaths.p248efa70} fill="var(--fill-0, #162318)" id="Vector_4" />
          <path d={navSvgPaths.p1fdfcc00} fill="var(--fill-0, #162318)" id="Vector_5" />
          <path d={navSvgPaths.p15ee7f0} fill="var(--fill-0, #162318)" id="Vector_6" />
        </g>
      </svg>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <Group />
      <Group1 />
    </div>
  );
}

function Layer() {
  return (
    <div className="absolute contents inset-0" data-name="Layer 1">
      <Group2 />
    </div>
  );
}

function Dark() {
  return (
    <div className="h-[40px] md:h-[52px] lg:h-[65px] overflow-clip relative shrink-0 w-[137px] md:w-[178px] lg:w-[222px]" data-name="Dark 1">
      <Layer />
    </div>
  );
}

interface SharedLayoutProps {
  children: React.ReactNode;
}

export function SharedLayout({ children }: SharedLayoutProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleAboutClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (window.location.pathname === '/') {
      const featuresSection = document.getElementById('features-section');
      if (featuresSection) {
        featuresSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.location.href = '/#about';
    }
    setIsOpen(false);
  };

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (window.location.pathname === '/') {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.location.href = '/#contact';
    }
    setIsOpen(false);
  };

  return (
    <div className="bg-white flex flex-col min-h-screen">
      {/* Navbar Container with 40px padding */}
      <div className="p-[40px]">
        {/* Navbar */}
        <div className="relative shrink-0 w-full rounded-[10px]" data-name="navbar">
          <div aria-hidden="true" className="absolute border border-[rgba(22,35,24,0.1)] border-solid inset-0 pointer-events-none rounded-[10px]" />
          <div className="flex flex-row items-center size-full">
            <div className="box-border content-stretch flex items-center justify-between px-[12px] md:px-[16px] lg:px-[18px] py-[14px] md:py-[18px] lg:py-[22px] relative w-full">
              {/* Logo and Navigation Links Container */}
              <div className="flex items-center gap-[72px]">
                {/* Logo */}
                <a href="/">
                  <Dark />
                </a>
                
                {/* Desktop Navigation */}
                <div className="hidden lg:flex content-stretch font-['Inter:Medium',sans-serif] font-medium gap-[20px] xl:gap-[30px] items-center leading-none not-italic relative shrink-0 text-[18px] xl:text-[23px] text-nowrap text-[#162318] tracking-[-0.46px] whitespace-pre">
                  <a href="/" className="relative shrink-0 cursor-pointer hover:opacity-80 transition-opacity">Home</a>
                  <a href="/#about" className="relative shrink-0 cursor-pointer hover:opacity-80 transition-opacity" onClick={handleAboutClick}>About</a>
                  <a href="/blog" className="relative shrink-0 cursor-pointer hover:opacity-80 transition-opacity">Blog</a>
                  <a href="/contact" className="relative shrink-0 cursor-pointer hover:opacity-80 transition-opacity">Contact Us</a>
                  <a href="/early-access" className="relative shrink-0 cursor-pointer hover:opacity-80 transition-opacity">Early Access</a>
                </div>
              </div>
              
              {/* Desktop Talk to Us Button */}
              <div className="hidden lg:flex content-stretch gap-[30px] items-center relative shrink-0">
                <div className="bg-[#162318] box-border content-stretch flex gap-[10px] items-center justify-center px-[16px] md:px-[20px] lg:px-[25px] py-[10px] md:py-[12px] lg:py-[14px] relative rounded-[50px] shrink-0 cursor-pointer hover:bg-[#0f1a10] transition-colors">
                  <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-none not-italic relative shrink-0 text-[16px] md:text-[18px] lg:text-[20px] text-nowrap text-white tracking-[-0.4px] whitespace-pre">Talk to Us</p>
                </div>
              </div>
              
              {/* Mobile/Tablet Hamburger Menu */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2 cursor-pointer hover:opacity-70 transition-opacity"
                aria-label="Toggle menu"
              >
                {isOpen ? (
                  <X className="w-[24px] h-[24px] text-[#162318]" />
                ) : (
                  <Menu className="w-[24px] h-[24px] text-[#162318]" />
                )}
              </button>
            </div>
          </div>
          
          {/* Mobile Menu Dropdown */}
          {isOpen && (
            <div className="lg:hidden absolute top-full left-0 right-0 mt-2 bg-white border border-[rgba(22,35,24,0.1)] rounded-[10px] shadow-lg z-50">
              <div className="flex flex-col p-[20px] gap-[16px]">
                <a 
                  href="/" 
                  className="font-['Inter:Medium',sans-serif] font-medium text-[18px] text-[#162318] tracking-[-0.46px] py-[12px] hover:opacity-70 transition-opacity"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </a>
                <a 
                  href="/#about" 
                  className="font-['Inter:Medium',sans-serif] font-medium text-[18px] text-[#162318] tracking-[-0.46px] py-[12px] hover:opacity-70 transition-opacity"
                  onClick={handleAboutClick}
                >
                  About
                </a>
                <a 
                  href="/blog" 
                  className="font-['Inter:Medium',sans-serif] font-medium text-[18px] text-[#162318] tracking-[-0.46px] py-[12px] hover:opacity-70 transition-opacity"
                  onClick={() => setIsOpen(false)}
                >
                  Blog
                </a>
                <a 
                  href="/contact" 
                  className="font-['Inter:Medium',sans-serif] font-medium text-[18px] text-[#162318] tracking-[-0.46px] py-[12px] hover:opacity-70 transition-opacity"
                  onClick={handleContactClick}
                >
                  Contact Us
                </a>
                <a 
                  href="/early-access" 
                  className="font-['Inter:Medium',sans-serif] font-medium text-[18px] text-[#162318] tracking-[-0.46px] py-[12px] hover:opacity-70 transition-opacity"
                  onClick={() => setIsOpen(false)}
                >
                  Early Access
                </a>
                <div className="bg-[#162318] box-border flex items-center justify-center px-[20px] py-[14px] rounded-[50px] cursor-pointer hover:bg-[#0f1a10] transition-colors mt-[8px]">
                  <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[18px] text-white tracking-[-0.4px]">Talk to Us</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <div className="bg-[#162318] relative shrink-0 w-full">
        <div className="flex flex-row items-center size-full">
          <div className="box-border content-stretch flex flex-col sm:flex-row items-center justify-between gap-[24px] sm:gap-0 p-[24px] md:p-[32px] lg:p-[40px] relative w-full">
            <FooterLogo />
            <div className="content-stretch flex flex-col sm:flex-row gap-[16px] sm:gap-[28px] md:gap-[34px] lg:gap-[38px] items-center relative shrink-0">
              <p className="font-['Inter:Medium',sans-serif] font-medium leading-none not-italic relative shrink-0 text-[17px] md:text-[19px] lg:text-[21px] text-nowrap text-white tracking-[-0.42px] whitespace-pre">Follow us</p>
              <div className="content-stretch flex gap-[18px] md:gap-[22px] lg:gap-[26px] items-center relative shrink-0">
                <SocialIcons />
                <SocialIcons1 />
                <SocialIcons2 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Footer Logo Components (Green logo)
function Group2Footer() {
  return (
    <div className="absolute bottom-[-0.01%] left-0 right-[71.07%] top-0" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 69 67">
        <g id="Group">
          <path d={svgPaths.p24087c80} fill="url(#paint0_linear_2_306)" id="Vector" />
          <g id="Group_2">
            <path d={svgPaths.p17d17400} fill="var(--fill-0, #C8E298)" id="Vector_2" />
            <path d={svgPaths.p2ad0a400} fill="var(--fill-0, #C8E298)" id="Vector_3" />
          </g>
          <path d={svgPaths.p33624500} fill="url(#paint1_linear_2_306)" id="Vector_4" />
          <g id="Group_3">
            <path d={svgPaths.p2daa6140} fill="var(--fill-0, #C8E298)" id="Vector_5" />
            <path d={svgPaths.p33fbd180} fill="var(--fill-0, #C8E298)" id="Vector_6" />
          </g>
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_2_306" x1="64.9486" x2="20.1458" y1="12.0346" y2="12.0346">
            <stop stopColor="#C8E298" />
            <stop offset="0.16" stopColor="#C8E298" />
            <stop offset="0.22" stopColor="#C8E298" stopOpacity="0.91" />
            <stop offset="0.34" stopColor="#C8E298" stopOpacity="0.69" />
            <stop offset="0.51" stopColor="#C8E298" stopOpacity="0.33" />
            <stop offset="0.65" stopColor="#C8E298" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_2_306" x1="3.32694" x2="48.1297" y1="54.9661" y2="54.9661">
            <stop stopColor="#C8E298" />
            <stop offset="0.16" stopColor="#C8E298" />
            <stop offset="0.22" stopColor="#C8E298" stopOpacity="0.91" />
            <stop offset="0.34" stopColor="#C8E298" stopOpacity="0.69" />
            <stop offset="0.51" stopColor="#C8E298" stopOpacity="0.33" />
            <stop offset="0.65" stopColor="#C8E298" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Group3Footer() {
  return (
    <div className="absolute bottom-[23.01%] left-[33.17%] right-0 top-[15.7%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 158 42">
        <g id="Group">
          <path d={svgPaths.p22fec200} fill="var(--fill-0, #C8E298)" id="Vector" />
          <path d={svgPaths.p16287300} fill="var(--fill-0, #C8E298)" id="Vector_2" />
          <path d={svgPaths.p137a8300} fill="var(--fill-0, #C8E298)" id="Vector_3" />
          <path d={svgPaths.p3e273980} fill="var(--fill-0, #C8E298)" id="Vector_4" />
          <path d={svgPaths.p21f96000} fill="var(--fill-0, #C8E298)" id="Vector_5" />
          <path d={svgPaths.p1acc7d00} fill="var(--fill-0, #C8E298)" id="Vector_6" />
        </g>
      </svg>
    </div>
  );
}

function FooterLogo() {
  return (
    <div className="h-[42px] md:h-[54px] lg:h-[67px] overflow-clip relative shrink-0 w-[148px] md:w-[190px] lg:w-[236px]" data-name="Layer_1">
      <Group2Footer />
      <Group3Footer />
    </div>
  );
}

function SocialIcons() {
  return (
    <div className="relative shrink-0 size-[28px] md:size-[32px] cursor-pointer hover:opacity-70 transition-opacity" data-name="Social Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g clipPath="url(#clip0_2_290)" id="Social Icons">
          <path d={svgPaths.pe4c1100} fill="var(--fill-0, white)" id="c" stroke="var(--stroke-0, white)" />
          <path d={svgPaths.p1368d780} fill="var(--fill-0, #162318)" id="d" />
        </g>
        <defs>
          <clipPath id="clip0_2_290">
            <rect fill="white" height="32" width="32" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function SocialIcons1() {
  return (
    <div className="relative shrink-0 size-[28px] md:size-[32px] cursor-pointer hover:opacity-70 transition-opacity" data-name="Social Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g clipPath="url(#clip0_2_316)" id="Social Icons">
          <path d={svgPaths.pb5b4340} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.pc090600} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p3fdb5130} fill="var(--fill-0, white)" id="Vector_3" />
        </g>
        <defs>
          <clipPath id="clip0_2_316">
            <rect fill="white" height="32" width="32" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function SocialIcons2() {
  return (
    <div className="relative shrink-0 size-[28px] md:size-[32px] cursor-pointer hover:opacity-70 transition-opacity" data-name="Social Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Social Icons">
          <path d={svgPaths.p3bfc500} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p3f71fb80} fill="var(--fill-0, white)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}