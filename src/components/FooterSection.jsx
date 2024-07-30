import { FooterLogo } from "../assets"
const FooterSection = () => {
    return (
        <footer className="flex flex-col gap-y-12 lg:gap-y-16 container mx-auto font-inter space-y-6 ">
            <div className="pt-16 border-t px-4">
                <div className="flex flex-col gap-y-[46px] lg:flex-row justify-between lg:items-center">
                    <div className="flex flex-col gap-y-8">
                        <img src={FooterLogo} className="w-[160px] h-[44px]" alt="Footer Logo" />
                        <nav className="grid grid-cols-2 gap-y-4 sm:flex sm:gap-x-8">
                            <a href="#" className="text-[#667085]">Overview</a>
                            <a href="#" className="text-[#667085]">Features</a>
                            <a href="#" className="text-[#667085]">Pricing</a>
                            <a href="#" className="text-[#667085]">Careers</a>
                            <a href="#" className="text-[#667085]">Help</a>
                            <a href="#" className="text-[#667085]">Privacy</a>
                        </nav>
                    </div>
                    <div className="flex flex-col gap-y-4 ">
                        <p className="text-[#101828] text-sm font-medium ">Stay up to date</p>
                        <div className="flex flex-col gap-y-4 sm:flex-row sm:gap-x-4">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="px-4 py-2 border border-gray-300 rounded-md"
                            />
                            <button className="sm:px-4 py-2 bg-[#7F56D9] text-white rounded-md  ">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col-reverse gap-y-4 px-4 sm:flex-row justify-between pt-8 pb-[46px] sm:items-center border-t border-[#EAECF0]">
                <span className="text-[#98A2B3] ">© 2077 Fake Company. All rights reserved.</span>
                <div className="flex space-x-4">
                    <a href="#" className="text-[#98A2B3]">Terms</a>
                    <a href="#" className="text-[#98A2B3]">Privacy</a>
                    <a href="#" className="text-[#98A2B3]">Cookies</a>
                </div>
            </div>
        </footer>
    )
}

export default FooterSection