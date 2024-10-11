import SocialMediaIcons from '@/components/common/SocialMediaIcons';
import Letter from '@/utils/Icons/Letter';
import Image from 'next/image';
import React from 'react';

const Footer = () => {
  return (
    <div className="footer-container bg-backgroundSecondary px-[120px] pt-[48px] pb-[72px] sm:px-[50px]">
      <div className="footer-info border-b pb-[26px] border-b-[#FFFFFF1A] mb-[24px]">
        <div className="contact max-w-[359px] mb-[36px]">
          <p className="text-primary font-primary text-[14px] leading-[1.4] mb-[12px] sm:text-[12px]">
            For more information, partnership and press inquiries:
          </p>
          <div className="flex flex-col gap-[12px] max-w-[310px]">
            <div className="email flex  text-white font-primary text-[16px] sm:text-[13px]">
              <Letter className="w-6 h-6 mr-[10px] sm:w-4 sm:h-4" />
              <p>support@spinel.finance</p>
            </div>
            <div className="email flex text-white font-primary text-[16px] sm:text-[13px]">
              <Letter className="w-6 h-6 mr-[10px] sm:w-4 sm:h-4" />
              <p>support@spinel.finance</p>
            </div>
            <div className="email flex text-white font-primary text-[16px] sm:text-[13px]">
              <Letter className="w-6 h-6 mr-[10px] sm:w-4 sm:h-4" />
              <p>support@spinel.finance</p>
            </div>
          </div>
        </div>
        <div className="list-social-media  justify-start sm:justify-center text-white flex gap-[36px]">
          <SocialMediaIcons />
        </div>
      </div>
      <div className="footer-bottom  flex justify-between  flex-row items-center  sm:flex-col sm:gap-[20px]">
        <div className="flex items-center">
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
