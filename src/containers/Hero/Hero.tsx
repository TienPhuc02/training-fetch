import SocialMediaIcons from '@/components/common/SocialMediaIcons';
import React from 'react';

const Hero = () => {
  return (
    <section className="xl:max-w-[1200px] lg:max-w-[900px] md:max-w-[650px] sx:max-w-[720px] sm:max-w-[300px] mx-auto hero-container w-full">
      <p className="hero-title text-center font-secondary text-primary leading-1 mx-auto xl:mb-[60px] lg:mb-[40px] md:mb-[30px] sm:mb-[20px] xl:max-w-[1097px] xl:text-[90px] lg:max-w-[800px] lg:text-[65px] md:max-w-[600px] md:text-[50px] sx:max-w-[600px] sx:text-[50px] sm:text-[22px] sm:max-w-[270px]">
        Unlock the power of decentralized organization
      </p>
      {/* <div className="wrapper-hero-description text-center xl:max-w-[792px] xl:mb-[60px] mx-auto lg:max-w-[490px] lg:mb-[40px] md:max-w-[400px] md:mb-[30px] sx:max-w-[400px] sx:mb-[40px] sm:max-w-[300px] sm:mb-[40px]">
      </div> */}
      <p className="hero-description text-primary text-center xl:max-w-[792px] xl:mb-[60px] mx-auto lg:max-w-[490px] lg:mb-[40px] md:max-w-[400px] md:mb-[30px] sx:max-w-[400px] sx:mb-[40px] sm:max-w-[300px] sm:mb-[40px] xl:max-h-[64px] xl:text-[24px] lg:max-h-[64px] lg:text-[16px] md:max-h-[36px] md:text-[14px] sm:max-h-[18px] sm:text-[12px]">
        Spinel is a DAO infrastructure that offers no-code tools and makes it
        easy to onboard communities onto Web3.
      </p>
      <div className="list-social-media xl:max-w-[192px] flex justify-center w-full mx-auto gap-[36px] lg:max-w-[350px] md:max-w-[250px] sm:max-w-[150px]">
        <SocialMediaIcons />
      </div>
    </section>
  );
};

export default Hero;
