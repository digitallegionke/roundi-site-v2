import svgPaths from "./svg-1jbdt42ide";
import imgFrame24 from "figma:asset/31f72186d757ab1e19021aab99b87e34a36146b6.png";
import imgFrame14 from "figma:asset/c27379de3e8bd162cfafaba69b7d4aa894c0af61.png";

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
    <div className="h-[63px] overflow-clip relative shrink-0 w-[222px]" data-name="logo">
      <Group />
      <Group1 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex font-['Inter:Medium',sans-serif] font-medium gap-[30px] items-center leading-none not-italic relative shrink-0 text-[23px] text-nowrap text-white tracking-[-0.46px] whitespace-pre">
      <p className="relative shrink-0">Home</p>
      <p className="relative shrink-0">About</p>
      <p className="relative shrink-0">Blog</p>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex gap-[60px] items-center relative shrink-0 w-[818.5px]">
      <Logo />
      <Frame21 />
    </div>
  );
}

function ButtonContainer() {
  return (
    <div className="bg-[#c8e298] box-border content-stretch flex gap-[10px] items-center justify-center px-[25px] py-[14px] relative rounded-[50px] shrink-0" data-name="Button Container">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-none not-italic relative shrink-0 text-[#162318] text-[20px] text-nowrap tracking-[-0.4px] whitespace-pre">Talk to Us</p>
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
  return (
    <div className="backdrop-blur-[7px] backdrop-filter bg-[rgba(22,35,24,0.12)] relative rounded-[10px] shrink-0 w-full" data-name="navbar">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.14)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center justify-between px-[18px] py-[22px] relative w-full">
          <Frame22 />
          <Menu />
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
      <p className="font-['Open_Runde:Semibold',sans-serif] leading-none not-italic relative shrink-0 text-[78px] text-white tracking-[-3.12px] w-full">Startup hustle or seasoned brand. Deliver better, every time.</p>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#c8e298] box-border content-stretch flex gap-[10px] items-center justify-center px-[40px] py-[20px] relative rounded-[50px] shrink-0" data-name="button">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-none not-italic relative shrink-0 text-[#162318] text-[21px] text-nowrap tracking-[-0.42px] whitespace-pre">Sign up for Early Access</p>
    </div>
  );
}

function Button1() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[40px] py-[20px] relative rounded-[50px] shrink-0" data-name="button">
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[50px]" />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-none not-italic relative shrink-0 text-[21px] text-nowrap text-white tracking-[-0.42px] whitespace-pre">Talk to Us</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0">
      <Button />
      <Button1 />
    </div>
  );
}

function Intro() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-[1021px]" data-name="intro">
      <Frame3 />
      <Frame5 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[20px] shrink-0 w-full">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[20px] size-full" src={imgFrame24} />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-between pb-[50px] pt-[40px] px-[40px] relative size-full">
          <Navbar />
          <Intro />
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-white h-[942px] relative shrink-0 w-full">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] h-[942px] items-start p-[20px] relative w-full">
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
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[80px] relative w-full">
          <p className="basis-0 font-['Inter:Medium',sans-serif] font-medium grow leading-[1.1] min-h-px min-w-px not-italic relative shrink-0 text-[41px] text-black tracking-[-0.82px]">For product-based businesses ready to grow, Roundi delivers smarter routes, dependable riders, and real-time visibility from pickup to drop-off.</p>
        </div>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="basis-0 content-stretch flex flex-col font-['Inter:Medium',sans-serif] font-medium gap-[24px] grow items-start leading-[1.1] min-h-px min-w-px not-italic relative shrink-0">
      <p className="relative shrink-0 text-[34px] text-black tracking-[-0.68px] w-full">Grow Without the Growing Pains</p>
      <p className="relative shrink-0 text-[#6f6f6f] text-[26px] tracking-[-0.52px] w-full">Whether you’re sending out 5 or 50 deliveries a day, Roundi makes scaling smooth and stress-free.</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="relative shrink-0 size-[60px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 60">
        <g id="Frame">
          <path d={svgPaths.pf5f8700} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame7() {
  return (
    <div className="box-border content-stretch flex items-start justify-between px-0 py-[30px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#dfdfdf] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Frame10 />
      <Frame />
    </div>
  );
}

function Frame1() {
  return (
    <div className="relative shrink-0 size-[60px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 60">
        <g id="Frame">
          <path d={svgPaths.p389bde80} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame8() {
  return (
    <div className="box-border content-stretch flex items-center justify-between px-0 py-[30px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#dfdfdf] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <p className="basis-0 font-['Inter:Medium',sans-serif] font-medium grow leading-[1.1] min-h-px min-w-px not-italic relative shrink-0 text-[34px] text-black tracking-[-0.68px]">Transparency at Every Step</p>
      <Frame1 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="relative shrink-0 size-[60px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 60">
        <g id="Frame">
          <path d={svgPaths.p389bde80} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame15() {
  return (
    <div className="box-border content-stretch flex items-center justify-between px-0 py-[30px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#dfdfdf] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <p className="basis-0 font-['Inter:Medium',sans-serif] font-medium grow leading-[1.1] min-h-px min-w-px not-italic relative shrink-0 text-[34px] text-black tracking-[-0.68px]">Deliver Like the Big Brands</p>
      <Frame2 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[629px]">
      <Frame7 />
      <Frame8 />
      <Frame15 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="h-[647px] relative rounded-[20px] shrink-0 w-[601px]">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[20px] size-full" src={imgFrame14} />
    </div>
  );
}

function Frame13() {
  return (
    <div className="basis-0 content-stretch flex grow items-start justify-between min-h-px min-w-px relative shrink-0">
      <Frame9 />
      <Frame6 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex gap-[93px] items-start justify-center relative shrink-0 w-full">
      <Frame13 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(0,0,0,0.12)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[64px] items-center p-[80px] relative w-full">
          <p className="font-['Open_Runde:Semibold',sans-serif] leading-none not-italic relative shrink-0 text-[65px] text-black tracking-[-2.6px] w-full">
            {`Experience the ease of organized, `}
            <br aria-hidden="true" />
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
    <div className="h-[67px] overflow-clip relative shrink-0 w-[236px]" data-name="Layer_1">
      <Group2 />
      <Group3 />
    </div>
  );
}

function SocialIcons() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Social Icons">
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
    <div className="relative shrink-0 size-[32px]" data-name="Social Icons">
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
    <div className="relative shrink-0 size-[32px]" data-name="Social Icons">
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
    <div className="content-stretch flex gap-[26px] items-center relative shrink-0">
      <SocialIcons />
      <SocialIcons1 />
      <SocialIcons2 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex gap-[38px] items-center relative shrink-0">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-none not-italic relative shrink-0 text-[21px] text-nowrap text-white tracking-[-0.42px] whitespace-pre">Follow us</p>
      <Frame18 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="bg-[#162318] relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center justify-between p-[40px] relative w-full">
          <Layer />
          <Frame19 />
        </div>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-[1440px]">
      <Frame4 />
      <Frame14 />
      <Frame12 />
      <Frame20 />
    </div>
  );
}

export default function Desktop() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] items-center relative size-full" data-name="Desktop - 5">
      <Frame17 />
    </div>
  );
}