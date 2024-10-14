import Image from 'next/image';
import React from 'react';

const Marketplace = () => {
  return (
    <section className="xl:max-w-[1200px] sm:max-w-[300px]  mx-auto create-investment-container xl:mt-[256px] xl:mb-[140px] lg:max-w-[900px] lg:flex-col lg:items-center lg:justify-between lg:gap-[28px] lg:mb-[90px] sm:mt-[150px] sm:mb-[70px]">
      <div className="header-create-investment xl:mb-[68px]">
        <p className="title-create-investment text-center font-secondary xl:text-[40px] max-w-[532px] mx-auto text-primary sm:text-center sm:mb-[16px] sm:text-[22px]">
          Marketplace for squad assets
        </p>
        <p className="description-create-investment font-primary xl:text-[20px] text-center text-secondary sm:text-[14px] sm:mb-[30px] sm:text-center">
          Buy and sell squad assets, such as tokens and NFTs, on the
          marketplace.
        </p>
      </div>
      <div className="content-create-investment flex gap-[40px] xl:mb-[48px] lg:flex lg:flex-col lg:justify-center lg:items-center sm:flex-col xl:flex-row">
        <div className="xl:w-[580px] lg:w-[500px]">
          <Image
            alt="img-create-investment-8"
            src="/images/img-investment-8.png"
            className="rounded-[16px] w-full h-auto"
            width={580}
            height={642}
            objectFit="contain"
          />
        </div>
        <div className="xl:w-[580px] lg:w-[500px]">
          <Image
            alt="img-create-investment-9"
            src="/images/img-investment-9.png"
            className="rounded-[16px] w-full h-auto"
            width={580}
            height={642}
            objectFit="contain"
          />
        </div>
      </div>
      <div className="button-create-investment xl:max-w-[200px] xl:mx-auto sm:max-w-[140px] ">
        <button className="xl:py-[10px] xl:px-[19px] xl:bg-primary xl:text-primary xl:text-center xl:text-[18px] xl:font-primary xl:rounded-[5px] sm:text-[12px] sm:py-[6px] sm:px-[16px] ">
          Enter Marketplace
        </button>
      </div>
    </section>
  );
};

export default Marketplace;
