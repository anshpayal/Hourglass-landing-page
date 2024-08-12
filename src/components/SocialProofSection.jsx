/* eslint-disable react/prop-types */
import { CompanyLogo1, CompanyLogo2, CompanyLogo3, CompanyLogo4, CompanyLogo5, CompanyLogo6 } from '../assets';

const logos = [
  { src: CompanyLogo1, alt: 'company-logo-1', width: 109.5, height: 36, smWidth: 146, smHeight: 48 },
  { src: CompanyLogo2, alt: 'company-logo-2', width: 126.75, height: 36, smWidth: 169, smHeight: 48 },
  { src: CompanyLogo3, alt: 'company-logo-3', width: 137.25, height: 36, smWidth: 183, smHeight: 48 },
  { src: CompanyLogo4, alt: 'company-logo-4', width: 120, height: 36, smWidth: 160, smHeight: 48 },
  { src: CompanyLogo5, alt: 'company-logo-5', width: 140.25, height: 36, smWidth: 187, smHeight: 48 },
  { src: CompanyLogo6, alt: 'company-logo-6', width: 145.5, height: 36, smWidth: 145.5, smHeight: 36, hideOnSmall: true },
];

const Logo = ({ src, alt, width, height, smWidth, smHeight, hideOnSmall }) => (
  <img
    src={src}
    alt={alt}
    className={`w-[${width}px] h-[${height}px] sm:w-[${smWidth}px] sm:h-[${smHeight}px] ${hideOnSmall ? 'block sm:hidden' : ''}`}
  />
);

const SocialProofSection = () => {
  return (
    <div className="bg-[#53389E] text-center pb-24 px-1 sm:px-4 mx-auto">
      <div className="container mx-auto flex flex-col items-center gap-y-[32px] px-4">
        <p className="text-white font-inter">We&rsquo;ve worked with some great startups</p>
        <div className="grid grid-cols-2 gap-y-4 gap-x-8 justify-center items-center md:flex md:flex-wrap md:justify-center md:gap-x-24 md:gap-y-6 lg:justify-between">
          {logos.map((logo, index) => (
            <Logo key={index} {...logo} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialProofSection;
