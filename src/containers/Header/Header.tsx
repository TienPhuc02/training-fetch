import Image from 'next/image';
import React from 'react';

const Header = () => {
  return (
    <header className="header-container xxl:w-full xxl:h-[95px] xxl:mb-[75px] sm:h-[30px] sm:mb-[20px]">
      <div className="wrapper-header flex justify-between xxl:items-center xxl:w-full xxl:h-full">
        <div className="relative xxl:w-[200px] sm:w-[80px] xxl:h-[95px] sm:h-auto">
          <Image
            alt="logo"
            src="/images/logo-spinel.png"
            className="object-contain"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <button className="font-primary bg-primary text-white font-semibold xxl:text-[20px] xxl:py-[9px] xxl:px-[16px] rounded-[5px] sm:text-[12px] sm:py-[6px] sm:px-[10px]">
          Launch App
        </button>
      </div>
    </header>
  );
};

export default Header;
