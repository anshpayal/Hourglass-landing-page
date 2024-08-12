/* eslint-disable react/prop-types */
import { FooterLogo } from "../assets";

const NavLink = ({ text, href }) => (
  <a href={href} className="text-[#667085]">
    {text}
  </a>
);

const FooterSection = () => {

  const NavLinks = [
    { text: 'Overview', href: '#' },
    { text: 'Features', href: '#' },
    { text: 'Pricing', href: '#' },
    { text: 'Careers', href: '#' },
    { text: 'Help', href: '#' },
    { text: 'Privacy', href: '#' }
  ];
  
  const FooterLink = [
    { text: 'Terms', href: '#' },
    { text: 'Privacy', href: '#' },
    { text: 'Cookies', href: '#' }
  ];

  return (
    <footer className="flex flex-col gap-y-12 lg:gap-y-16 container mx-auto font-inter space-y-6">
      <div className="pt-16 border-t px-4">
        <div className="flex flex-col gap-y-[46px] lg:flex-row justify-between lg:items-center">
          <div className="flex flex-col gap-y-8">
            <img src={FooterLogo} className="w-40 h-11" alt="Footer Logo" />
            <nav className="grid grid-cols-2 gap-4 sm:flex sm:gap-x-8">
              {NavLinks.map((link, index) => (
                <NavLink key={index} {...link} />
              ))}
            </nav>
          </div>
          <div className="flex flex-col gap-y-4">
            <p className="text-[#101828] text-sm font-medium">Stay up to date</p>
            <div className="flex flex-col gap-y-4 sm:flex-row sm:gap-x-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 border border-gray-300 rounded-md"
              />
              <button className="sm:px-4 py-2 bg-[#7F56D9] text-white rounded-md">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse gap-y-4 px-4 sm:flex-row justify-between pt-8 pb-[46px] sm:items-center border-t border-[#EAECF0]">
        <span className={`text-[#98A2B3]`}>
          © {new Date().getFullYear()} Fake Company. All rights reserved.
        </span>
        <div className="flex space-x-4">
          {FooterLink.map((link, index) => (
            <NavLink key={index} {...link} />
          ))}
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;