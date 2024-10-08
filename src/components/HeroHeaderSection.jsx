import { ChevronDown, Menu, PlayCircle } from 'lucide-react';
import Logo from "../assets/Logo.png"


const NavItems = () => {
    return (
        <nav className="hidden md:flex space-x-6">
            <a href="#">Home</a>
            <a href="#" className="flex items-center justify-center gap-x-3 ">Products <span><ChevronDown size={20} /></span></a>
            <a href="#" className="flex items-center justify-center gap-x-3">Resources <span><ChevronDown size={20} /></span> </a>
        </nav>
    )
}

const HeroHeaderSection = () => {
    return (
        <div className={`bg-[#53389E] lg:min-h-screen px-1 sm:px-4 text-white font-inter`}>
            <header className="container mx-auto  px-4 py-6 flex justify-between items-center">
                <div className="flex items-center space-x-[40px]">
                    <img className=' w-[160.76px] sm:w-[163px] h-[44px]' src={Logo} alt='Logo' />
                    <NavItems />
                </div>

                <button className={`text-white sm:bg-[#7F56D9] p-2 rounded-lg sm:px-[18px] sm:py-2 sm:h-11`}>
                    <span className="block sm:hidden">
                        <Menu size={24} />
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
                    <p className=" text-[18px] sm:text-[20px] mb-12 font-light text-[#E9D7FE] max-w-xl">
                        — We’re a full-service interior design agency who specialise in simple, useful and beautiful solutions for any space.
                    </p>
                </div>
                <div className="flex flex-col-reverse gap-y-3 sm:flex-row  sm:space-x-4">
                    <button className={`bg-white  text-[#53389E] px-[28px] py-[16px] sm:text-lg rounded-lg flex items-center justify-center gap-x-3 sm:gap-x-3`}><span><PlayCircle size={24} /></span>Showreel</button>
                    <button className={`bg-[#7F56D9] px-[28px] py-[16px] sm:text-lg  rounded-lg`}>Get in touch</button>
                </div>
            </main>
        </div>
    )
}

export default HeroHeaderSection