import { CompanyLogo1,CompanyLogo2,CompanyLogo3,CompanyLogo4,CompanyLogo5 } from "../assets"

const SocialProofSection = () => {
    return (
        <div className=" bg-[#53389E] text-center pb-24 px-4 mx-auto">
            <div className=" container mx-auto flex flex-col gap-y-[32px]">
                <p className="text-white font-inter">We&rsquo;ve worked with some great startups</p>
                <div className="flex flex-wrap gap-y-4 gap-x-8 justify-center lg:justify-between">
                    <img src={CompanyLogo1} alt="company-logo-1" className="w-[146px] h-[48px]" />
                    <img src={CompanyLogo2} alt="company-logo-2" className="w-[169px] h-[48px]" />
                    <img src={CompanyLogo3} alt="company-logo-3" className="w-[183px] h-[48px]" />
                    <img src={CompanyLogo4} alt="company-logo-4" className="w-[160px] h-[48px]" />
                    <img src={CompanyLogo5} alt="company-logo-5" className="w-[187px] h-[48px]" />
                </div>
            </div>
        </div>
    )
}

export default SocialProofSection