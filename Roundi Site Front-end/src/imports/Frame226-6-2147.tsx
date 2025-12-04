import svgPaths from "./svg-j6wv39u26g";

function Group() {
  return (
    <div className="absolute bottom-0 left-0 right-[71.07%] top-0" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 65 65">
        <g id="Group">
          <path d={svgPaths.p2fb41100} fill="url(#paint0_linear_6_1822)" id="Vector" />
          <g id="Group_2">
            <path d={svgPaths.p1a749500} fill="var(--fill-0, #162318)" id="Vector_2" />
            <path d={svgPaths.p2ac39000} fill="var(--fill-0, #162318)" id="Vector_3" />
          </g>
          <path d={svgPaths.p2467bb00} fill="url(#paint1_linear_6_1822)" id="Vector_4" />
          <g id="Group_3">
            <path d={svgPaths.p5353600} fill="var(--fill-0, #162318)" id="Vector_5" />
            <path d={svgPaths.p39435180} fill="var(--fill-0, #162318)" id="Vector_6" />
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
          <path d={svgPaths.p1591ac80} fill="var(--fill-0, #162318)" id="Vector" />
          <path d={svgPaths.p1a098a80} fill="var(--fill-0, #162318)" id="Vector_2" />
          <path d={svgPaths.p2d51d840} fill="var(--fill-0, #162318)" id="Vector_3" />
          <path d={svgPaths.p248efa70} fill="var(--fill-0, #162318)" id="Vector_4" />
          <path d={svgPaths.p1fdfcc00} fill="var(--fill-0, #162318)" id="Vector_5" />
          <path d={svgPaths.p15ee7f0} fill="var(--fill-0, #162318)" id="Vector_6" />
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
    <div className="h-[65px] overflow-clip relative shrink-0 w-[222px]" data-name="Dark 1">
      <Layer />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex font-['Inter:Medium',sans-serif] font-medium gap-[30px] items-center leading-none not-italic relative shrink-0 text-[#162318] text-[23px] tracking-[-0.46px]">
      <p className="relative shrink-0 text-nowrap whitespace-pre">Home</p>
      <p className="relative shrink-0 text-nowrap whitespace-pre">About</p>
      <p className="relative shrink-0 text-nowrap whitespace-pre">Blog</p>
      <p className="relative shrink-0 w-[124px]">Contact Us</p>
      <p className="relative shrink-0 text-nowrap whitespace-pre">Early Access</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[60px] items-center relative shrink-0">
      <Dark />
      <Frame />
    </div>
  );
}

function ButtonContainer() {
  return (
    <div className="bg-[#162318] box-border content-stretch flex gap-[10px] items-center justify-center px-[25px] py-[14px] relative rounded-[50px] shrink-0" data-name="Button Container">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-none not-italic relative shrink-0 text-[20px] text-nowrap text-white tracking-[-0.4px] whitespace-pre">Talk to Us</p>
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
    <div className="relative rounded-[10px] shrink-0 w-full" data-name="navbar">
      <div aria-hidden="true" className="absolute border border-[rgba(22,35,24,0.1)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center justify-between px-[18px] py-[22px] relative w-full">
          <Frame1 />
          <Menu />
        </div>
      </div>
    </div>
  );
}

export default function Frame2() {
  return (
    <div className="bg-white relative size-full">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start p-[40px] relative size-full">
          <Navbar />
        </div>
      </div>
    </div>
  );
}