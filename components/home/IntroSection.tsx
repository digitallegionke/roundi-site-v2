export function IntroSection() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] md:gap-[20px] items-start p-[32px] md:p-[56px] lg:p-[80px] relative w-full">
          <p className="font-['Open_Runde',sans-serif] leading-[1.3] not-italic relative shrink-0 text-[18px] md:text-[20px] lg:text-[22px] text-[#666666] tracking-[-0.3px]">
            What is Roundi?
          </p>
          <p className="font-['Open_Runde',sans-serif] leading-[1.3] not-italic relative shrink-0 text-[28px] md:text-[36px] lg:text-[44px] text-black tracking-[-0.8px] md:tracking-[-1px] lg:tracking-[-1.2px]">
            Roundi is a delivery management platform that helps small and medium businesses plan smarter routes, manage their riders, and track deliveries in real time.
          </p>
        </div>
      </div>
    </div>
  );
}
