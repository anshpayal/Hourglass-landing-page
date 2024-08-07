import { CompanyLogo1, CompanyLogo2, CompanyLogo3, CompanyLogo4, CompanyLogo5, CompanyLogo6 } from "../assets"

const SocialProofSection = () => {
    return (
        <div className=" bg-[#53389E] text-center pb-24 px-1 sm:px-4 mx-auto">
            <div className=" container mx-auto flex flex-col gap-y-[32px] px-4">
                <p className="text-white font-inter">We&rsquo;ve worked with some great startups</p>
                <div className=" grid grid-cols-2 gap-y-4 gap-x-8 justify-center lg:flex lg:justify-between">
                    <img src={CompanyLogo1} alt="company-logo-1" className="w-[109.5px] h-[36px] sm:w-[146px] sm:h-[48px]" />
                    <img src={CompanyLogo2} alt="company-logo-2" className="w-[126.75px] h-[36px] sm:w-[169px] sm:h-[48px]" />
                    <img src={CompanyLogo3} alt="company-logo-3" className="w-[137.25px] h-[36px] sm:w-[183px] sm:h-[48px]" />
                    <img src={CompanyLogo4} alt="company-logo-4" className="w-[120px] h-[36px] sm:w-[160px] sm:h-[48px]" />
                    <img src={CompanyLogo5} alt="company-logo-5" className="w-[140.25px] h-[36px] sm:w-[187px] sm:h-[48px]" />
                    <img src={CompanyLogo6} alt="company-logo-5" className=" block sm:hidden w-[145.5px] h-[36px]" />
                </div>
            </div>
        </div>
    )
}

export default SocialProofSection