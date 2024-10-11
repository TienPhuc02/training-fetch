import SocialMediaIcons from '@/components/common/SocialMediaIcons';
import React from 'react';

const Hero = () => {
  return (
    <section className="hero-container w-full ">
      <div className="wrapper-hero-title  mb-[60px]">
        <p className="hero-title  text-center max-w-[1097px] text-[90px]  font-secondary text-primary leading-[90px] mx-auto">
          Unlock the power of decentralized organization
        </p>
      </div>
      <div className="wrapper-hero-description text-center max-w-[792px] mx-auto mb-[60px]">
        <p className="hero-description text-primary max-h-[64px]  text-[24px]">
          Spinel is a DAO infrastructure that offers no-code tools and makes it
          easy to onboard communities onto Web3.
        </p>
      </div>
      <div className="list-social-media max-w-[192px] mx-auto text-white flex gap-[36px]">
        <SocialMediaIcons />
      </div>
    </section>
  );
};

export default Hero;
