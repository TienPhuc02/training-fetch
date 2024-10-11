import Image from 'next/image';
import React from 'react';

const Header = () => {
  return (
    <header className="header-container xl:w-full xl:h-[95px] xl:mb-[75px] sm:h-[30px] sm:mb-[20px]">
      <div className="wrapper-header flex justify-between xl:items-center xl:w-full xl:h-full">
        <div className="relative xl:w-[200px] sm:w-[80px] xl:h-[95px] sm:h-auto">
          <Image
            alt="logo"
            src="/images/logo-spinel.png"
            className="object-contain"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <button className="font-primary bg-primary text-white font-semibold xl:text-[20px] xl:py-[9px] xl:px-[16px] rounded-[5px] sm:text-[12px] sm:py-[6px] sm:px-[10px]">
          Launch App
        </button>
      </div>
    </header>
  );
};

export default Header;
