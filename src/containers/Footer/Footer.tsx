import SocialMediaIcons from '@/components/common/SocialMediaIcons';
import Letter from '@/utils/Icons/Letter';
import Image from 'next/image';
import React from 'react';

const Footer = () => {
  return (
    <div className="footer-container xxl:bg-backgroundSecondary xxl:px-[120px] xxl:pt-[48px] xxl:pb-[72px] sm:px-[50px]">
      <div className="footer-info xxl:border-b xxl:pb-[26px] xxl:border-b-[#FFFFFF1A] xxl:mb-[24px]">
        <div className="contact xxl:max-w-[359px] xxl:mb-[36px]">
          <p className="text-primary font-primary xxl:text-[14px] xxl:leading-[1.4] xxl:mb-[12px] sm:text-[12px]">
            For more information, partnership and press inquiries:
          </p>
          <div className="flex flex-col xxl:gap-[12px] max-w-[310px]">
            <div className="email flex  text-primary font-primary xxl:text-[16px] sm:text-[13px]">
              <Letter className="xxl:w-6 xxl:h-6 xxl:mr-[10px] sm:w-4 sm:h-4" />
              <p>support@spinel.finance</p>
            </div>
            <div className="email flex text-white font-primary xxl:text-[16px] sm:text-[13px]">
              <Letter className="xxl:w-6 xxl:h-6 xxl:mr-[10px] sm:w-4 sm:h-4" />
              <p>support@spinel.finance</p>
            </div>
            <div className="email flex text-white font-primary xxl:text-[16px] sm:text-[13px]">
              <Letter className="xxl:w-6 xxl:h-6 xxl:mr-[10px] sm:w-4 sm:h-4" />
              <p>support@spinel.finance</p>
            </div>
          </div>
        </div>
        <div className="list-social-media  xxl:justify-start sm:justify-center text-white flex gap-[36px]">
          <SocialMediaIcons />
        </div>
      </div>
      <div className="footer-bottom flex justify-between flex-row items-center  sm:flex-col sm:gap-[20px]">
        <div className="flex xxl:items-center">
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
