import SocialMediaIcons from '@/components/common/SocialMediaIcons';
import React from 'react';

const Hero = () => {
  return (
    <section className="xl:max-w-[1200px] lg:max-w-[900px] sm:max-w-[300px]  mx-auto hero-container w-full">
      <div className="wrapper-hero-title xl:mb-[60px] lg:mb-[40px] sm:mb-[20px]">
        <p className="hero-title text-center font-secondary text-primary leading-1 mx-auto xl:max-w-[1097px] xl:text-[90px] lg:max-w-[800px] lg:text-[55px] sm:text-[22px] sm:max-w-[270px]">
          Unlock the power of decentralized organization
        </p>
      </div>
      <div className="wrapper-hero-description text-center xl:max-w-[792px] xl:mb-[60px] mx-auto lg:max-w-[490px] lg:mb-[40px] sm:max-w-[300px] sm:mb-[40px]">
        <p className="hero-description text-primary xl:max-h-[64px] xl:text-[24px] lg:max-h-[64px] lg:text-[16px] sm:max-h-[18px] sm:text-[12px]">
          Spinel is a DAO infrastructure that offers no-code tools and makes it
          easy to onboard communities onto Web3.
        </p>
      </div>
      <div className="list-social-media xl:max-w-[192px] flex justify-center w-full mx-auto gap-[36px] lg:max-w-[350px] sm:max-w-[150px] ">
        <SocialMediaIcons />
      </div>
    </section>
  );
};

export default Hero;
