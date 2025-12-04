import imgFrame222 from "figma:asset/98ea3592d8676d0626bebbeb09f2d2bb16c4bb79.png";

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] items-center not-italic relative shrink-0 w-[602px]">
      <p className="font-['Open_Runde:Semibold',sans-serif] leading-[70.4px] relative shrink-0 text-[64px] text-white tracking-[-2.4px] w-full">Signup for our Early Access.</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[33px] relative shrink-0 text-[22px] text-[rgba(255,255,255,0.9)] w-full">Experience effortless, reliable delivery.</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[20px] left-[40px] top-[20px] w-[227px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-0 not-italic text-[#162318] text-[20px] text-nowrap top-0 tracking-[-0.4px] whitespace-pre">Sign up for Early Access</p>
    </div>
  );
}

function Container() {
  return (
    <div className="bg-[#c8e298] h-[60px] relative rounded-[50px] shrink-0 w-[307px]" data-name="Container">
      <Paragraph />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0 w-[602px]">
      <Frame1 />
      <Container />
    </div>
  );
}

function Frame() {
  return (
    <div className="h-[657px] relative rounded-[20px] shrink-0 w-full">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[20px] size-full" src={imgFrame222} />
      <div className="flex flex-col justify-end size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] h-[657px] items-start justify-end px-[46px] py-[67px] relative w-full">
          <Frame2 />
        </div>
      </div>
    </div>
  );
}

export default function Frame3() {
  return (
    <div className="bg-[#f2f2f2] relative size-full">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start p-[80px] relative size-full">
          <Frame />
        </div>
      </div>
    </div>
  );
}