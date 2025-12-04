import { SharedLayout } from "../components/SharedLayout";

export function EarlyAccess() {
  return (
    <SharedLayout>
      <div className="flex flex-col items-start min-h-[calc(100vh-200px)] px-[52px] md:px-[56px] lg:px-[58px] py-[60px] md:py-[100px]">
        <div className="max-w-[800px] w-full flex flex-col gap-[32px] md:gap-[40px]">
          <div className="flex flex-col gap-[16px] md:gap-[20px]">
            <h1 className="font-['Open_Runde:Semibold',sans-serif] leading-[1.1] not-italic text-[40px] md:text-[56px] lg:text-[68px] text-[#162318] tracking-[-1.6px] md:tracking-[-2.2px] lg:tracking-[-2.8px]">
              Sign Up for Early Access
            </h1>
            <p className="font-['Inter:Regular',sans-serif] leading-[1.6] not-italic text-[20px] md:text-[22px] lg:text-[24px] text-[#666666]">
              Be among the first to experience Roundi's delivery management platform. Get exclusive early access and help shape the future of delivery logistics.
            </p>
          </div>

          <form className="flex flex-col gap-[24px]">
            <div className="flex flex-col gap-[12px]">
              <label className="font-['Inter:Medium',sans-serif] font-medium text-[16px] md:text-[18px] text-[#162318]">
                Business Name
              </label>
              <input 
                type="text" 
                className="border border-[#e0e0e0] rounded-[8px] px-[16px] py-[14px] text-[16px] md:text-[18px] font-['Inter:Regular',sans-serif] focus:outline-none focus:border-[#162318] transition-colors"
                placeholder="Enter your business name"
              />
            </div>

            <div className="flex flex-col gap-[12px]">
              <label className="font-['Inter:Medium',sans-serif] font-medium text-[16px] md:text-[18px] text-[#162318]">
                Email Address
              </label>
              <input 
                type="email" 
                className="border border-[#e0e0e0] rounded-[8px] px-[16px] py-[14px] text-[16px] md:text-[18px] font-['Inter:Regular',sans-serif] focus:outline-none focus:border-[#162318] transition-colors"
                placeholder="Enter your email"
              />
            </div>

            <div className="flex flex-col gap-[12px]">
              <label className="font-['Inter:Medium',sans-serif] font-medium text-[16px] md:text-[18px] text-[#162318]">
                Phone Number
              </label>
              <input 
                type="tel" 
                className="border border-[#e0e0e0] rounded-[8px] px-[16px] py-[14px] text-[16px] md:text-[18px] font-['Inter:Regular',sans-serif] focus:outline-none focus:border-[#162318] transition-colors"
                placeholder="Enter your phone number"
              />
            </div>

            <div className="flex flex-col gap-[12px]">
              <label className="font-['Inter:Medium',sans-serif] font-medium text-[16px] md:text-[18px] text-[#162318]">
                Number of Deliveries Per Month
              </label>
              <select 
                className="border border-[#e0e0e0] rounded-[8px] px-[16px] py-[14px] text-[16px] md:text-[18px] font-['Inter:Regular',sans-serif] focus:outline-none focus:border-[#162318] transition-colors appearance-none bg-white"
              >
                <option value="">Select range</option>
                <option value="1-50">1-50 deliveries</option>
                <option value="51-200">51-200 deliveries</option>
                <option value="201-500">201-500 deliveries</option>
                <option value="500+">500+ deliveries</option>
              </select>
            </div>

            <div className="flex flex-col gap-[12px]">
              <label className="font-['Inter:Medium',sans-serif] font-medium text-[16px] md:text-[18px] text-[#162318]">
                Tell us about your business (Optional)
              </label>
              <textarea 
                rows={4}
                className="border border-[#e0e0e0] rounded-[8px] px-[16px] py-[14px] text-[16px] md:text-[18px] font-['Inter:Regular',sans-serif] focus:outline-none focus:border-[#162318] transition-colors resize-none"
                placeholder="Share more details about your delivery needs"
              />
            </div>

            <button 
              type="submit"
              className="bg-[#c8e298] box-border content-stretch flex gap-[10px] items-center justify-center px-[30px] py-[16px] rounded-[50px] cursor-pointer hover:bg-[#b8d288] transition-colors w-full mt-[8px]"
            >
              <p className="font-['Inter:Bold',sans-serif] font-bold leading-none not-italic text-[18px] md:text-[20px] text-[#162318] tracking-[-0.4px]">
                Request Early Access
              </p>
            </button>
          </form>
        </div>
      </div>
    </SharedLayout>
  );
}