/* eslint-disable react/prop-types */
import { Image } from "../assets";
import { MessageCircle, Zap } from 'lucide-react';

const Feature = ({ icon, title, description }) => {
  return (
    <div className="flex items-start gap-x-4">
      <div className="flex-shrink-0">
        <div className="bg-[#F4EBFF] rounded-full p-3">
          {icon}
        </div>
      </div>
      <div className="flex flex-col gap-y-2">
        <h3 className="text-xl font-medium text-[#101828] ">{title}</h3>
        <p className="text-base text-[#667085]">{description}</p>
      </div>
    </div>
  );
};

const FeatureSection = () => {
  return (
    <section className="flex flex-col gap-y-24 container mx-auto font-inter">
      <div className="pt-24">
        <div className="flex flex-col gap-y-12 px-4 sm:flex-row gap-x-24 items-center justify-center">
          <div className="flex flex-col gap-y-5">
            <p className={`text-[#6941C6] font-semibold text-base`}>Who we are</p>
            <h2 className={`text-4xl font-semibold text-[#101828]`}>Commercial interior designers</h2>
            <p className={`text-xl text-[#667085]`}>
              Untitled are a commercial interior design studio. We specialise in customised office design, restaurant design, shop design, and studio design.
            </p>
          </div>
          <div className=" space-y-12">
            <Feature
              icon={<MessageCircle className="w-5 h-5 text-[#7F56D9]" />}
              title="Share team inboxes"
              description="Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop."
            />
            <Feature
              icon={<Zap className="w-5 h-5 text-[#7F56D9]" />}
              title="Deliver instant answers"
              description="An all-in-one customer service platform that helps you balance everything your customers need to be happy."
            />
          </div>
        </div>
      </div>
      <div className="pb-24 sm:px-4">
        <div className="w-[343px] h-60 sm:w-auto sm:h-auto mx-auto">
          <img src={Image} alt="Feature illustration" className="w-full h-full object-cover sm:object-fill" />
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;