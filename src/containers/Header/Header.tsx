import Image from 'next/image';
import React from 'react';

const Header = () => {
  return (
    <header className="header-container mx-auto w-full xl:max-w-[1200px] xl:h-[95px] xl:mb-[75px] lg:max-w-[900px] lg:h-[50px] lg:mb-[65px] md:max-w-[700px] md:h-[50px] md:mb-[55px] sx:max-w-[720px] sx:h-[50px] sx:mb-[65px] sm:max-w-[300px] sm:h-[30px] sm:mb-[20px]">
      <div className="wrapper-header flex justify-between items-center xl:items-center w-full h-full">
        <div className="xl:w-[200px] xl:h-[95px] lg:w-[140px] md:w-[120px] sx:w-[100px] sm:w-[80px] sm:h-auto">
          <Image
            alt="logo"
            src="/images/logo-spinel.png"
            className="object-contain"
            width={580}
            height={642}
            objectFit="contain"
          />
        </div>
        <button className="font-primary bg-primary text-primary font-semibold xl:text-[20px] xl:py-[9px] xl:px-[16px] rounded-[5px] lg:text-[12px] lg:py-[7px] lg:px-[14px] md:text-[14px] md:py-[8px] md:px-[12px] sm:text-[12px] sm:py-[6px] sm:px-[10px]">
          Launch App
        </button>
      </div>
    </header>
  );
};

export default Header;
