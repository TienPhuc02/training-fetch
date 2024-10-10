import SocialMediaIcons from '@/components/common/SocialMediaIcons';
// import DiscordIcon from '@/utils/Icons/DiscordIcon';
// import TelegramIcon from '@/utils/Icons/TelegramIcon';
// import TwitterIcon from '@/utils/Icons/TwitterIcon';
import React from 'react';

const Hero = () => {
  return (
    <section className="hero-container w-full border border-red-300">
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
        {/* <DiscordIcon className="bg-white w-[40px] h-[40px] py-[10px] px-[7px] rounded-[100%]" />
        <TelegramIcon className="bg-white w-[40px] h-[40px] py-[10px] px-[7px] rounded-[100%]" />
        <TwitterIcon className="bg-white w-[40px] h-[40px] py-[10px] px-[7px] rounded-[100%]" /> */}
        {/* {icons.map((icon, index) => {
          const IconComponent = icon.component;
          return <IconComponent key={index} className={icon.className} />;
        })} */}
        <SocialMediaIcons />
      </div>
    </section>
  );
};

export default Hero;
