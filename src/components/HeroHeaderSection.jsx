import { ChevronDown, Menu, PlayCircle } from 'lucide-react';
import Logo from "../assets/Logo.png"

const HeroHeaderSection = () => {
    return (
        <div className="bg-[#53389E] lg:min-h-screen px-4 text-white font-inter">
            <header className="container mx-auto  px-4 py-6 flex justify-between items-center">
                <div className="flex items-center space-x-[40px]">
                    <img className='w-[163px] h-[43px]' src={Logo} alt='Logo' />
                    <nav className="hidden md:flex space-x-6">
                        <a href="#">Home</a>
                        <a href="#" className="flex items-center justify-center gap-x-3 ">Products <span><ChevronDown size={20} /></span></a>
                        <a href="#" className="flex items-center justify-center gap-x-3">Resources <span><ChevronDown size={20} /></span> </a>
                    </nav>
                </div>

                <button className="text-white sm:bg-[#7F56D9] px-[18px] py-2 rounded-md sm:px-4 sm:py-2">
                    <span className="block sm:hidden">
                        <Menu size={40} />
                    </span>
                    <span className="hidden sm:block">
                        Talk to sales
                    </span>
                </button>

            </header>

            <main className="container mx-auto px-4 py-16 sm:py-24">
                <div className='sm:w-11/12'>
                    <h1 className=" text-4xl leading-[44px] sm:text-6xl font-medium sm:leading-[72px] mb-6">
                        We design physical <span className="border-b-4 border-current">experiences</span> that create more happy in the world
                    </h1>
                    <p className=" text-[18px] sm:text-[20px] mb-12 font-extralight max-w-xl">
                        — We’re a full-service interior design agency who specialise in simple, useful and beautiful solutions for any space.
                    </p>
                </div>
                <div className="flex flex-col-reverse gap-y-3 sm:flex-row  sm:space-x-4">
                    <button className="bg-white text-[#7F56D9] px-[28px] font-medium py-[16px] rounded-md flex items-center justify-center gap-3"><span><PlayCircle size={20} /></span>Showreel</button>
                    <button className="bg-[#7F56D9] px-[28px] py-[16px] font-medium rounded-md ">Get in touch</button>
                </div>
            </main>
        </div>
    )
}

export default HeroHeaderSection