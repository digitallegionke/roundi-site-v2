import { SharedLayout } from "../components/SharedLayout";

export function Blog() {
  return (
    <SharedLayout>
      <div className="flex flex-col items-start px-[52px] md:px-[56px] lg:px-[58px] py-[60px] md:py-[100px]">
        <div className="max-w-[1200px] w-full flex flex-col gap-[48px] md:gap-[64px]">
          <div className="flex flex-col gap-[16px] md:gap-[20px]">
            <h1 className="font-['Open_Runde:Semibold',sans-serif] leading-[1.1] not-italic text-[40px] md:text-[56px] lg:text-[68px] text-[#162318] tracking-[-1.6px] md:tracking-[-2.2px] lg:tracking-[-2.8px]">
              Blog
            </h1>
            <p className="font-['Inter:Regular',sans-serif] leading-[1.6] not-italic text-[20px] md:text-[22px] lg:text-[24px] text-[#666666]">
              Insights, tips, and stories from the world of delivery logistics.
            </p>
          </div>

          {/* Coming Soon Message */}
          <div className="flex flex-col items-center justify-center min-h-[400px] border border-[#e0e0e0] rounded-[16px] bg-[#fafafa] p-[40px] md:p-[60px]">
            <div className="flex flex-col gap-[20px] items-center text-center max-w-[600px]">
              <h2 className="font-['Open_Runde:Semibold',sans-serif] leading-[1.2] not-italic text-[32px] md:text-[42px] text-[#162318] tracking-[-1px] md:tracking-[-1.4px]">
                Coming Soon
              </h2>
              <p className="font-['Inter:Regular',sans-serif] leading-[1.6] not-italic text-[18px] md:text-[20px] text-[#666666]">
                We're working on bringing you valuable content about delivery management, logistics optimization, and industry insights. Check back soon!
              </p>
              <a 
                href="/early-access"
                className="bg-[#c8e298] box-border content-stretch flex gap-[10px] items-center justify-center px-[30px] py-[16px] rounded-[50px] cursor-pointer hover:bg-[#b8d288] transition-colors mt-[12px]"
              >
                <p className="font-['Inter:Bold',sans-serif] font-bold leading-none not-italic text-[18px] md:text-[20px] text-[#162318] tracking-[-0.4px] whitespace-nowrap">
                  Get Early Access
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </SharedLayout>
  );
}