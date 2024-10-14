import SocialMediaIcons from '@/components/common/SocialMediaIcons';
import React from 'react';

const Hero = () => {
  return (
    <section className="xl:max-w-[1200px] sm:max-w-[300px]  mx-auto hero-container xl:w-full">
      <div className="wrapper-hero-title xl:mb-[60px] sm:mb-[20px]">
        <p className="hero-title text-center xl:max-w-[1097px] xl:text-[90px] font-secondary text-primary leading-1 mx-auto sm:text-[22px] sm:max-w-[270px]">
          Unlock the power of decentralized organization
        </p>
      </div>
      <div className="wrapper-hero-description xl:text-center xl:max-w-[792px] mx-auto xl:mb-[60px] sm:max-w-[300px] sm:mb-[40px]">
        <p className="hero-description text-primary xl:max-h-[64px] xl:text-[24px] sm:max-h-[18px] sm:text-[12px]">
          Spinel is a DAO infrastructure that offers no-code tools and makes it
          easy to onboard communities onto Web3.
        </p>
      </div>
      <div className="list-social-media xl:max-w-[192px]  mx-auto xl:text-primary flex gap-[36px] sm:max-w-[150px]">
        <SocialMediaIcons />
      </div>
    </section>
  );
};

export default Hero;
