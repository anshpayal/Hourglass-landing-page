import { CompanyLogo1, CompanyLogo2, CompanyLogo3, CompanyLogo4, CompanyLogo5, CompanyLogo6 } from '../assets';

const SocialProofSection = () => {
  const logos = [
    { src: CompanyLogo1, alt: 'company-logo-1', width: 109.5, height: 36, widthSm: 146, heightSm: 48 },
    { src: CompanyLogo2, alt: 'company-logo-2', width: 126.75, height: 36, widthSm: 169, heightSm: 48 },
    { src: CompanyLogo3, alt: 'company-logo-3', width: 137.25, height: 36, widthSm: 183, heightSm: 48 },
    { src: CompanyLogo4, alt: 'company-logo-4', width: 120, height: 36, widthSm: 160, heightSm: 48 },
    { src: CompanyLogo5, alt: 'company-logo-5', width: 140.25, height: 36, widthSm: 187, heightSm: 48 },
    { src: CompanyLogo6, alt: 'company-logo-6', width: 145.5, height: 36, hidden: true },
  ];

  return (
    <div className="bg-[#53389E] text-center pb-24 px-1 sm:px-4 mx-auto">
      <div className="container mx-auto flex flex-col gap-y-[32px] px-4">
        <p className="text-white font-inter">We&rsquo;ve worked with some great startups</p>
        <div className="grid grid-cols-2 gap-y-4 gap-x-8 justify-center items-center md:flex md:flex-wrap md:justify-center lg:justify-between">
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo.src}
              alt={logo.alt}
              className={`w-[${logo.width}px] h-[${logo.height}px] sm:w-[${logo.widthSm}px] sm:h-[${logo.heightSm}px] ${logo.hidden ? 'block sm:hidden' : ''}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialProofSection;