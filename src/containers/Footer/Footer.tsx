import SocialMediaIcons from '@/components/common/SocialMediaIcons';
import Letter from '@/utils/Icons/Letter';
import Image from 'next/image';
import React from 'react';

const Footer = () => {
  return (
    <div className="footer-container xl:bg-backgroundSecondary xl:px-[120px] xl:pt-[48px] xl:pb-[72px] sm:px-[50px]">
      <div className="footer-info xl:border-b xl:pb-[26px] xl:border-b-[#FFFFFF1A] xl:mb-[24px]">
        <div className="contact xl:max-w-[359px] xl:mb-[36px]">
          <p className="text-primary font-primary xl:text-[14px] xl:leading-[1.4] xl:mb-[12px] sm:text-[12px]">
            For more information, partnership and press inquiries:
          </p>
          <div className="flex flex-col xl:gap-[12px] max-w-[310px]">
            <div className="email flex  text-primary font-primary xl:text-[16px] sm:text-[13px]">
              <Letter className="xl:w-6 xl:h-6 xl:mr-[10px] sm:w-4 sm:h-4" />
              <p>support@spinel.finance</p>
            </div>
            <div className="email flex text-white font-primary xl:text-[16px] sm:text-[13px]">
              <Letter className="xl:w-6 xl:h-6 xl:mr-[10px] sm:w-4 sm:h-4" />
              <p>support@spinel.finance</p>
            </div>
            <div className="email flex text-white font-primary xl:text-[16px] sm:text-[13px]">
              <Letter className="xl:w-6 xl:h-6 xl:mr-[10px] sm:w-4 sm:h-4" />
              <p>support@spinel.finance</p>
            </div>
          </div>
        </div>
        <div className="list-social-media  xl:justify-start sm:justify-center text-white flex gap-[36px]">
          <SocialMediaIcons />
        </div>
      </div>
      <div className="footer-bottom flex justify-between flex-row items-center  sm:flex-col sm:gap-[20px]">
        <div className="flex xl:items-center">
          <Image
            alt="img-footer"
            src="/images/footer.png"
            className="rounded-[16px] mr-[15px]"
            width={58}
            height={58}
          />
          <p className="text-[32px] text-primary">Spinel</p>
        </div>
        <p className="font-primary text-[14px] text-primary sm:text-center">
          Copyright © 2022 Spinel Labs. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
