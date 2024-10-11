import SocialMediaIcons from '@/components/common/SocialMediaIcons';
import React from 'react';

const Hero = () => {
  return (
    <section className="hero-container xxl:w-full">
      <div className="wrapper-hero-title xxl:mb-[60px] sm:mb-[20px]">
        <p className="hero-title xxl:text-center xxl:max-w-[1097px] xxl:text-[90px] xxl:font-secondary text-primary leading-1 mx-auto sm:text-[22px] sm:max-w-[270px]">
          Unlock the power of decentralized organization
        </p>
      </div>
      <div className="wrapper-hero-description xxl:text-center xxl:max-w-[792px] mx-auto xxl:mb-[60px] sm:max-w-[300px] sm:mb-[40px]">
        <p className="hero-description text-primary xxl:max-h-[64px] xxl:text-[24px] sm:max-h-[18px] sm:text-[12px]">
          Spinel is a DAO infrastructure that offers no-code tools and makes it
          easy to onboard communities onto Web3.
        </p>
      </div>
      <div className="list-social-media xxl:max-w-[192px]  mx-auto xxl:text-white flex gap-[36px] sm:max-w-[150px]">
        <SocialMediaIcons />
      </div>
    </section>
  );
};

export default Hero;
