import SocialMediaIcons from '@/components/common/SocialMediaIcons';
import React from 'react';

const Hero = () => {
  return (
    <section className="hero-container w-full ">
      <div className="wrapper-hero-title px-[50px] mb-[60px]">
        <p className="hero-title text-center max-w-[1097px] text-[90px]  font-secondary text-primary leading-[90px]">
          Unlock the power of decentralized organization
        </p>
      </div>
      <div className="wrapper-hero-description text-center px-[204px] mb-[60px]">
        <p className="hero-description text-primary max-h-[64px] max-w-[792px] text-[24px]">
          Spinel is a DAO infrastructure that offers no-code tools and makes it
          easy to onboard communities onto Web3.
        </p>
      </div>
      <div className="list-social-media px-[500px] text-white flex gap-[36px]">
        <SocialMediaIcons />
      </div>
    </section>
  );
};

export default Hero;
