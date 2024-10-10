import Image from 'next/image';
import React from 'react';

const Header = () => {
  return (
    <header className="header-container  max-h-[95px] w-full h-[95px] mb-[75px] ">
      <div className="wrapper-header flex justify-between items-center w-full h-full">
        <Image
          alt="logo"
          src="/images/logo-spinel.png"
          className="h-full block"
          width={200}
          height={95}
        />
        <button className="font-primary bg-primary text-white font-semibold text-[20px] py-[9px] px-[16px] rounded-[5px]">
          Launch App
        </button>
      </div>
    </header>
  );
};

export default Header;
