import { MessageCircle, Zap, Image } from "../assets"

const FeatureSection = () => {
    return (
        <div className="flex flex-col gap-y-24 container mx-auto font-inter">
            <div className="pt-24">
                <div className="flex flex-col gap-y-12 px-4 sm:flex-row gap-x-24  items-center justify-center">
                    <div className="flex flex-col gap-y-5">
                        <p className="text-[#6941C6] font-semibold text-[16px]">Who we are</p>
                        <h1 className="text-4xl font-semibold text-[#101828]">Commercial interior designers</h1>
                        <p className="text-xl text-[#667085]">Untitled are a commercial interior design studio. We specialise in customised office design, restaurant design, shop design, and studio design.</p>
                    </div>
                    <div className="flex flex-col gap-y-12">
                        <div className="flex gap-x-4">
                            <div className="bg-[#F4EBFF] flex items-center justify-center w-32 sm:w-24 h-[48px] rounded-full">
                                <img src={MessageCircle} alt="message-circle-icon" className="w-[20px] h-[20px]" />
                            </div>
                            <div className="flex flex-col gap-y-2">
                                <h3 className="text-xl font-medium text-[#101828] flex items-center">
                                    Share team inboxes</h3>
                                <p className="text-[16px] text-[#667085]">Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.</p>
                            </div>
                        </div>
                        <div className="flex gap-x-4">
                            <div className="bg-[#F4EBFF] flex items-center justify-center w-32 sm:w-24 h-[48px] rounded-full">
                                <img src={Zap} alt="message-circle-icon" className="w-[20px] h-[20px]" />
                            </div>
                            <div className="flex flex-col gap-y-2">
                                <h3 className="text-xl font-medium text-[#101828] flex items-center">
                                    Deliver instant answers</h3>
                                <p className="text-[16px] text-[#667085]">An all-in-one customer service platform that helps you balance everything your customers need to be happy.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pb-24 px-4">
                <div className="w-[343px] h-[240px] object-fill container mx-auto sm:w-auto sm:h-auto">
                    <img src={Image} alt="image" className="w-[343px] h-[240px] sm:w-auto sm:h-auto sm:object-fill" />
                </div>
            </div>
        </div>
    )
}

export default FeatureSection