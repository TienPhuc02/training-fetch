import SocialMediaIcons from '@/components/common/SocialMediaIcons';
import Letter from '@/utils/Icons/Letter';
import Image from 'next/image';
import React from 'react';

const Footer = () => {
  return (
    <div className="footer-container bg-backgroundSecondary xl:px-[120px] xl:pt-[48px] xl:pb-[72px] lg:px-[70px] lg:pt-[35px] lg:pb-[50px] md:px-[60px] md:pt-[32px] md:pb-[45px] sm:pt-[30px] sm:px-[50px] sm:py-[30px]">
      <div className="footer-info sm:border-b sm:pb-[26px] sm:border-b-[#FFFFFF1A] xl:mb-[24px] lg:border-b lg:pb-[20px] lg:mb-[20px] md:border-b md:pb-[18px] md:mb-[18px]">
        <div className="contact xl:max-w-[359px] xl:mb-[36px] lg:max-w-[320px] lg:mb-[30px] md:max-w-[300px] md:mb-[28px] sm:mb-[20px]">
          <p className="text-primary font-primary xl:text-[14px] xl:leading-[1.4] xl:mb-[12px] lg:text-[13px] lg:mb-[10px] md:text-[14px] md:mb-[10px] sm:text-[12px] sm:mb-[10px]">
            For more information, partnership and press inquiries:
          </p>
          <div className="flex flex-col xl:gap-[12px] lg:gap-[10px] md:gap-[8px] max-w-[310px] sm:mb-[10px]">
            <div className="email flex text-primary font-primary xl:text-[16px] lg:text-[15px] md:text-[14px] sm:text-[13px]">
              <Letter className="xl:w-6 xl:h-6 xl:mr-[10px] lg:w-5 lg:h-5 lg:mr-[8px] md:w-5 md:h-5 md:mr-[6px] sm:w-4 sm:h-4" />
              <p>support@spinel.finance</p>
            </div>
            <div className="email flex text-primary font-primary xl:text-[16px] lg:text-[15px] md:text-[14px] sm:text-[13px]">
              <Letter className="xl:w-6 xl:h-6 xl:mr-[10px] lg:w-5 lg:h-5 lg:mr-[8px] md:w-5 md:h-5 md:mr-[6px] sm:w-4 sm:h-4" />
              <p>support@spinel.finance</p>
            </div>
            <div className="email flex text-primary font-primary xl:text-[16px] lg:text-[15px] md:text-[14px] sm:text-[13px]">
              <Letter className="xl:w-6 xl:h-6 xl:mr-[10px] lg:w-5 lg:h-5 lg:mr-[8px] md:w-5 md:h-5 md:mr-[6px] sm:w-4 sm:h-4" />
              <p>support@spinel.finance</p>
            </div>
          </div>
        </div>
        <div className="list-social-media xl:justify-start lg:justify-start md:justify-start sm:justify-center text-primary flex gap-[36px] md:gap-[30px] sm:mb-[10px] ">
          <SocialMediaIcons />
        </div>
      </div>
      <div className="footer-bottom flex justify-between flex-row items-center lg:flex-row lg:gap-[15px] md:flex-row md:gap-[12px] sm:flex-col sm:gap-[20px]">
        <div className="flex xl:items-center lg:items-center md:items-center">
          <Image
            alt="img-footer"
            src="/images/footer.png"
            className="rounded-[16px] mr-[15px] md:mr-[10px]"
            width={58}
            height={58}
          />
          <p className="text-[32px] text-primary lg:text-[28px] md:text-[24px]">
            Spinel
          </p>
        </div>
        <p className="font-primary text-[14px] text-primary lg:text-[12px] md:text-[12px] sm:text-center">
          Copyright © 2022 Spinel Labs. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
