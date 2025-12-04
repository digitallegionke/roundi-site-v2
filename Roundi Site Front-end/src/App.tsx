import { useState, useEffect } from "react";
import svgPaths from "./imports/svg-1jbdt42ide";
import imgFrame24 from "figma:asset/31f72186d757ab1e19021aab99b87e34a36146b6.png";
import imgFrame14 from "figma:asset/c27379de3e8bd162cfafaba69b7d4aa894c0af61.png";
import { FAQSection } from "./components/FAQSection";
import { CTASection } from "./components/CTASection";
import { EarlyAccess } from "./pages/EarlyAccess";
import { Blog } from "./pages/Blog";
import { Contact } from "./pages/Contact";
import { Menu, X } from "lucide-react";

// Navigation function
let navigate: (path: string) => void;

// Simple router component
function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  // Listen to popstate for back/forward navigation
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Navigate function
  navigate = (path: string) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
  };

  // Route matching
  if (currentPath === '/early-access') {
    return <EarlyAccess />;
  }
  
  if (currentPath === '/blog') {
    return <Blog />;
  }

  if (currentPath === '/contact') {
    return <Contact />;
  }

  // Default home page
  return <HomePage />;
}

export default App;

function HomePage() {
  return (
    <div className="bg-white flex flex-col w-full min-h-screen" data-name="Desktop - 5">
      <Frame17 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute bottom-[-0.01%] left-0 right-[71.07%] top-0" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 65 63">
        <g id="Group">
          <path d={svgPaths.p2920d700} fill="url(#paint0_linear_2_321)" id="Vector" />
          <g id="Group_2">
            <path d={svgPaths.p17f98ec0} fill="var(--fill-0, white)" id="Vector_2" />
            <path d={svgPaths.p16e065f0} fill="var(--fill-0, white)" id="Vector_3" />
          </g>
          <path d={svgPaths.p5d9f880} fill="url(#paint1_linear_2_321)" id="Vector_4" />
          <g id="Group_3">
            <path d={svgPaths.p834bc80} fill="var(--fill-0, white)" id="Vector_5" />
            <path d={svgPaths.p28a73ff0} fill="var(--fill-0, white)" id="Vector_6" />
          </g>
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_2_321" x1="61.0957" x2="18.9507" y1="11.3162" y2="11.3162">
            <stop stopColor="white" />
            <stop offset="0.16" stopColor="white" />
            <stop offset="0.22" stopColor="white" stopOpacity="0.91" />
            <stop offset="0.34" stopColor="white" stopOpacity="0.69" />
            <stop offset="0.51" stopColor="white" stopOpacity="0.33" />
            <stop offset="0.65" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_2_321" x1="3.12958" x2="45.2746" y1="51.6846" y2="51.6846">
            <stop stopColor="white" />
            <stop offset="0.16" stopColor="white" />
            <stop offset="0.22" stopColor="white" stopOpacity="0.91" />
            <stop offset="0.34" stopColor="white" stopOpacity="0.69" />
            <stop offset="0.51" stopColor="white" stopOpacity="0.33" />
            <stop offset="0.65" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute bottom-[23.01%] left-[33.17%] right-0 top-[15.7%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 149 39">
        <g id="Group">
          <path d={svgPaths.p26329a00} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p35d72970} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.pde8ea00} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p26bd4180} fill="var(--fill-0, white)" id="Vector_4" />
          <path d={svgPaths.p30b51a80} fill="var(--fill-0, white)" id="Vector_5" />
          <path d={svgPaths.p2eb5e3b0} fill="var(--fill-0, white)" id="Vector_6" />
        </g>
      </svg>
    </div>
  );
}

function Logo() {
  return (
    <div className="h-[40px] md:h-[50px] lg:h-[63px] overflow-clip relative shrink-0 w-[140px] md:w-[180px] lg:w-[222px]" data-name="logo">
      <Group />
      <Group1 />
    </div>
  );
}

function Frame21() {
  const scrollToFeatures = () => {
    const featuresSection = document.getElementById('features-section');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="hidden lg:flex content-stretch font-['Inter:Medium',sans-serif] font-medium gap-[20px] xl:gap-[30px] items-center leading-none not-italic relative shrink-0 text-[18px] xl:text-[23px] text-nowrap text-white tracking-[-0.46px] whitespace-pre">
      <a href="/" className="relative shrink-0 cursor-pointer hover:opacity-80 transition-opacity">Home</a>
      <a href="#features-section" className="relative shrink-0 cursor-pointer hover:opacity-80 transition-opacity" onClick={(e) => { e.preventDefault(); scrollToFeatures(); }}>About</a>
      <a href="/blog" className="relative shrink-0 cursor-pointer hover:opacity-80 transition-opacity">Blog</a>
      <a href="/contact" className="relative shrink-0 cursor-pointer hover:opacity-80 transition-opacity">Contact Us</a>
      <a href="/early-access" className="relative shrink-0 cursor-pointer hover:opacity-80 transition-opacity">Early Access</a>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex gap-[72px] items-center relative shrink-0">
      <Logo />
      <Frame21 />
    </div>
  );
}

function ButtonContainer() {
  return (
    <div className="bg-[#c8e298] box-border content-stretch flex gap-[10px] items-center justify-center px-[16px] md:px-[20px] lg:px-[25px] py-[10px] md:py-[12px] lg:py-[14px] relative rounded-[50px] shrink-0 cursor-pointer hover:bg-[#b8d288] transition-colors" data-name="Button Container">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-none not-italic relative shrink-0 text-[#162318] text-[16px] md:text-[18px] lg:text-[20px] text-nowrap tracking-[-0.4px] whitespace-pre">Talk to Us</p>
    </div>
  );
}

function Menu() {
  return (
    <div className="content-stretch flex gap-[30px] items-center relative shrink-0" data-name="menu">
      <ButtonContainer />
    </div>
  );
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  
  const scrollToFeatures = () => {
    const featuresSection = document.getElementById('features-section');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="backdrop-blur-[7px] backdrop-filter bg-[rgba(22,35,24,0.12)] relative rounded-[10px] shrink-0 w-full" data-name="navbar">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.14)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center justify-between px-[12px] md:px-[16px] lg:px-[18px] py-[14px] md:py-[18px] lg:py-[22px] relative w-full">
          <Frame22 />
          
          {/* Desktop Button */}
          <div className="hidden lg:flex">
            <Menu />
          </div>
          
          {/* Mobile/Tablet Hamburger Menu */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 cursor-pointer hover:opacity-70 transition-opacity"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-[24px] h-[24px] text-white" />
            ) : (
              <Menu className="w-[24px] h-[24px] text-white" />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 mt-2 backdrop-blur-[7px] backdrop-filter bg-[rgba(22,35,24,0.9)] border border-[rgba(255,255,255,0.14)] rounded-[10px] shadow-lg z-50">
          <div className="flex flex-col p-[20px] gap-[16px]">
            <a 
              href="/" 
              className="font-['Inter:Medium',sans-serif] font-medium text-[18px] text-white tracking-[-0.46px] py-[12px] hover:opacity-70 transition-opacity"
              onClick={() => setIsOpen(false)}
            >
              Home
            </a>
            <a 
              href="#features-section" 
              className="font-['Inter:Medium',sans-serif] font-medium text-[18px] text-white tracking-[-0.46px] py-[12px] hover:opacity-70 transition-opacity"
              onClick={(e) => { e.preventDefault(); scrollToFeatures(); setIsOpen(false); }}
            >
              About
            </a>
            <a 
              href="/blog" 
              className="font-['Inter:Medium',sans-serif] font-medium text-[18px] text-white tracking-[-0.46px] py-[12px] hover:opacity-70 transition-opacity"
              onClick={() => setIsOpen(false)}
            >
              Blog
            </a>
            <a 
              href="/contact" 
              className="font-['Inter:Medium',sans-serif] font-medium text-[18px] text-white tracking-[-0.46px] py-[12px] hover:opacity-70 transition-opacity"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </a>
            <a 
              href="/early-access" 
              className="font-['Inter:Medium',sans-serif] font-medium text-[18px] text-white tracking-[-0.46px] py-[12px] hover:opacity-70 transition-opacity"
              onClick={() => setIsOpen(false)}
            >
              Early Access
            </a>
            <div className="bg-[#c8e298] box-border flex items-center justify-center px-[20px] py-[14px] rounded-[50px] cursor-pointer hover:bg-[#b8d288] transition-colors mt-[8px]">
              <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[18px] text-[#162318] tracking-[-0.4px]">Talk to Us</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
      <p className="font-['Open_Runde:Semibold',sans-serif] leading-none not-italic relative shrink-0 text-[32px] sm:text-[42px] md:text-[56px] lg:text-[68px] xl:text-[78px] text-white tracking-[-1.2px] sm:tracking-[-1.8px] md:tracking-[-2.4px] lg:tracking-[-2.8px] xl:tracking-[-3.12px] w-full">Startup hustle or seasoned brand. Deliver better, every time.</p>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#c8e298] box-border content-stretch flex gap-[10px] items-center justify-center px-[20px] md:px-[30px] lg:px-[40px] py-[14px] md:py-[16px] lg:py-[20px] relative rounded-[50px] shrink-0 cursor-pointer hover:bg-[#b8d288] transition-colors w-full sm:w-auto" data-name="button">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-none not-italic relative shrink-0 text-[#162318] text-[16px] md:text-[18px] lg:text-[21px] text-center tracking-[-0.42px] whitespace-nowrap">Sign up for Early Access</p>
    </div>
  );
}

function Button1() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[20px] md:px-[30px] lg:px-[40px] py-[14px] md:py-[16px] lg:py-[20px] relative rounded-[50px] shrink-0 cursor-pointer hover:bg-white/10 transition-colors w-full sm:w-auto" data-name="button">
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[50px]" />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-none not-italic relative shrink-0 text-[16px] md:text-[18px] lg:text-[21px] text-center text-white tracking-[-0.42px] whitespace-nowrap">Book a Demo</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col sm:flex-row gap-[12px] md:gap-[16px] lg:gap-[20px] items-stretch sm:items-start relative shrink-0">
      <Button />
      <Button1 />
    </div>
  );
}

function Intro() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] md:gap-[32px] lg:gap-[40px] items-start relative shrink-0 w-full lg:w-[1021px]" data-name="intro">
      <Frame3 />
      <Frame5 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[10px] md:rounded-[15px] lg:rounded-[20px] shrink-0 w-full">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[10px] md:rounded-[15px] lg:rounded-[20px] size-full" src={imgFrame24} />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-between pb-[24px] md:pb-[36px] lg:pb-[50px] pt-[20px] md:pt-[30px] lg:pt-[40px] px-[16px] md:px-[28px] lg:px-[40px] relative size-full">
          <Navbar />
          <Intro />
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-white min-h-[600px] md:min-h-[750px] lg:h-[942px] relative shrink-0 w-full">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] min-h-[600px] md:min-h-[750px] lg:h-[942px] items-start p-[12px] md:p-[16px] lg:p-[20px] relative w-full">
          <Frame16 />
        </div>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] md:gap-[20px] items-start p-[32px] md:p-[56px] lg:p-[80px] relative w-full">
          <p className="font-['Open_Runde:Regular',sans-serif] leading-[1.3] not-italic relative shrink-0 text-[18px] md:text-[20px] lg:text-[22px] text-[#666666] tracking-[-0.3px]">
            What is Roundi?
          </p>
          <p className="font-['Open_Runde:Regular',sans-serif] leading-[1.3] not-italic relative shrink-0 text-[28px] md:text-[36px] lg:text-[44px] text-black tracking-[-0.8px] md:tracking-[-1px] lg:tracking-[-1.2px]">
            Roundi is a delivery management platform that helps small and medium businesses plan smarter routes, manage their riders, and track deliveries in real time.
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame13() {
  const features = [
    {
      title: "Grow Without the Growing Pains",
      description: "Whether you're sending out 5 or 50 deliveries a day, Roundi makes scaling smooth and stress-free.",
      image: imgFrame14,
      imageOnLeft: true
    },
    {
      title: "Transparency at Every Step",
      description: "Track riders in real time and give customers accurate ETAs, so there's never a \"Where's my order?\" moment.",
      image: "https://images.unsplash.com/photo-1586449480537-3a22cf98b04c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWxpdmVyeSUyMHRyYWNraW5nJTIwbWFwJTIwbW9iaWxlfGVufDF8fHx8MTc2NDY5NDgxN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      imageOnLeft: false
    },
    {
      title: "Deliver Like the Big Brands",
      description: "Offer customers professional, on-time delivery — without the big corporate budget.",
      image: "https://images.unsplash.com/photo-1762851452423-34e7cf452780?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZWxpdmVyeSUyMHNlcnZpY2V8ZW58MXx8fHwxNzY0NjkzOTcwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      imageOnLeft: true
    }
  ];

  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      {features.map((feature, index) => {
        const isSticky = index < 2;
        const topPosition = index === 0 ? '0px' : '10px';
        const zIndex = index + 1;
        
        return (
          <div 
            key={index}
            className={`bg-white border border-[#f0f0f0] rounded-[16px] md:rounded-[20px] lg:rounded-[24px] p-[20px] md:p-[24px] lg:p-[32px] w-full ${isSticky ? 'sticky' : 'relative'} shadow-sm`}
            style={{
              top: isSticky ? topPosition : 'auto',
              zIndex: zIndex,
              marginBottom: index < features.length - 1 ? '16px' : '0'
            }}
          >
            <div className={`flex flex-col ${feature.imageOnLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-[24px] md:gap-[28px] lg:gap-[32px] items-start`}>
              {/* Image */}
              <div className="w-full lg:w-1/2 h-[280px] md:h-[340px] lg:h-[380px] relative rounded-[12px] md:rounded-[14px] lg:rounded-[16px] overflow-hidden shrink-0">
                <img 
                  alt={feature.title} 
                  className="absolute inset-0 w-full h-full object-cover" 
                  src={feature.image} 
                />
              </div>
              
              {/* Content */}
              <div className="flex flex-col gap-[16px] md:gap-[18px] lg:gap-[20px] w-full lg:w-1/2">
                <h3 className="font-['Open_Runde:Semibold',sans-serif] leading-[1.2] not-italic text-[26px] md:text-[32px] lg:text-[38px] xl:text-[42px] text-black tracking-[-0.6px] md:tracking-[-0.8px] lg:tracking-[-1px]">
                  {feature.title}
                </h3>
                <p className="font-['Inter:Regular',sans-serif] leading-[1.6] not-italic text-[24px] text-[#999999]">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex gap-[40px] md:gap-[60px] lg:gap-[93px] items-start justify-center relative shrink-0 w-full">
      <Frame13 />
    </div>
  );
}

function Frame12() {
  return (
    <div id="features-section" className="relative shrink-0 w-full scroll-mt-20">
      <div id="about" className="absolute -top-20" />
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(0,0,0,0.12)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[32px] md:gap-[48px] lg:gap-[64px] items-center p-[32px] md:p-[56px] lg:p-[80px] relative w-full">
          <p className="font-['Open_Runde:Semibold',sans-serif] leading-none not-italic relative shrink-0 text-[28px] sm:text-[38px] md:text-[50px] lg:text-[65px] text-black tracking-[-1.2px] sm:tracking-[-1.6px] md:tracking-[-2px] lg:tracking-[-2.6px] w-full">
            {`Experience the ease of organized, `}
            <br className="hidden sm:block" aria-hidden="true" />
            on-time deliveries.
          </p>
          <Frame11 />
        </div>
      </div>
    </div>
  );
}

function Group2() {
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

function Group3() {
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

function Layer() {
  return (
    <div className="h-[42px] md:h-[54px] lg:h-[67px] overflow-clip relative shrink-0 w-[148px] md:w-[190px] lg:w-[236px]" data-name="Layer_1">
      <Group2 />
      <Group3 />
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

function Frame18() {
  return (
    <div className="content-stretch flex gap-[18px] md:gap-[22px] lg:gap-[26px] items-center relative shrink-0">
      <SocialIcons />
      <SocialIcons1 />
      <SocialIcons2 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col sm:flex-row gap-[16px] sm:gap-[28px] md:gap-[34px] lg:gap-[38px] items-center relative shrink-0">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-none not-italic relative shrink-0 text-[17px] md:text-[19px] lg:text-[21px] text-nowrap text-white tracking-[-0.42px] whitespace-pre">Follow us</p>
      <Frame18 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="bg-[#162318] relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex flex-col sm:flex-row items-center justify-between gap-[24px] sm:gap-0 p-[24px] md:p-[32px] lg:p-[40px] relative w-full">
          <Layer />
          <Frame19 />
        </div>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full">
      <Frame4 />
      <Frame14 />
      <Frame12 />
      <FAQSection />
      <CTASection />
      <Frame20 />
    </div>
  );
}