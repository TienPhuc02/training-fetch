import Image from 'next/image';
import React from 'react';

const Marketplace = () => {
  return (
    <section className="xl:max-w-[1200px] md:max-w-[600px] sm:max-w-[300px] justify-center mx-auto items-center create-investment-container xl:mt-[256px] xl:mb-[140px] lg:max-w-[900px] lg:flex-col lg:items-center lg:justify-between lg:gap-[28px] lg:mb-[90px] sx:max-w-[720px] sx:mt-[200px] sx:mb-[100px] sm:mt-[150px] sm:mb-[70px] md:mt-[100px] md:mb-[80px]">
      <div className="header-create-investment xl:mb-[68px] sx:mb-[50px] md:mb-[40px]">
        <p className="title-create-investment text-center font-secondary xl:text-[40px] sx:text-[32px] max-w-[532px] mx-auto text-primary sm:text-center sm:mb-[16px] sm:text-[22px] md:text-[28px]">
          Marketplace for squad assets
        </p>
        <p className="description-create-investment font-primary xl:text-[20px] sx:text-[18px] text-center text-secondary sm:text-[14px] sx:mb-[40px] sm:mb-[30px] sm:text-center md:text-[16px] md:mb-[24px]">
          Buy and sell squad assets, such as tokens and NFTs, on the
          marketplace.
        </p>
      </div>
      <div className="content-create-investment flex gap-[40px] items-center xl:mb-[48px] sx:mb-[40px] lg:flex lg:flex-col lg:justify-center lg:items-center sm:flex-col xl:flex-row md:gap-[20px] md:mb-[30px]">
        <div className="xl:w-[580px] lg:w-[500px] sx:w-[550px] md:w-[350px]">
          <Image
            alt="img-create-investment-8"
            src="/images/img-investment-8.png"
            className="rounded-[16px] w-full h-auto"
            width={550}
            height={600}
            objectFit="contain"
          />
        </div>
        <div className="xl:w-[580px] lg:w-[500px] sx:w-[550px] md:w-[350px]">
          <Image
            alt="img-create-investment-9"
            src="/images/img-investment-9.png"
            className="rounded-[16px] w-full h-auto"
            width={550}
            height={600}
            objectFit="contain"
          />
        </div>
      </div>
      <div className="button-create-investment xl:max-w-[200px] sx:max-w-[180px] mx-auto sm:max-w-[140px] md:max-w-[160px]">
        <button className="xl:py-[10px] xl:px-[19px] sx:py-[8px] sx:px-[18px] bg-primary text-primary text-center xl:text-[18px] sx:text-[16px] font-primary rounded-[5px] sm:text-[12px] sm:py-[6px] sm:px-[16px] sm:mt-[15px] md:py-[8px] md:px-[16px] md:text-[14px]">
          Enter Marketplace
        </button>
      </div>
    </section>
  );
};

export default Marketplace;
