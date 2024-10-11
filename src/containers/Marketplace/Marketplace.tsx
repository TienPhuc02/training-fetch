import Image from 'next/image';
import React from 'react';

const Marketplace = () => {
  return (
    <section className="create-investment-container  xxl:mt-[256px] xxl:mb-[140px] sm:mt-[150px] sm:mb-[70px]">
      <div className="header-create-investment xxl:mb-[68px]">
        <p className="title-create-investment text-center font-secondary text-[40px] max-w-[532px] mx-auto text-primary sm:text-center sm:mb-[16px] sm:text-[22px]">
          Marketplace for squad assets
        </p>
        <p className="description-create-investment font-primary text-[20px] text-center text-secondary sm:text-[14px] sm:mb-[30px] sm:text-center">
          Buy and sell squad assets, such as tokens and NFTs, on the
          marketplace.
        </p>
      </div>
      <div className="content-create-investment flex gap-[40px] xxl:mb-[48px] sm:flex-col xxl:flex-row">
        <Image
          alt="img-create-investment-8"
          src="/images/img-investment-8.png"
          className="rounded-[16px]"
          width={580}
          height={315}
        />
        <Image
          alt="img-create-investment-9"
          src="/images/img-investment-9.png"
          className="rounded-[16px]"
          width={580}
          height={315}
        />
      </div>
      <div className="button-create-investment xxl:max-w-[200px] xxl:mx-auto sm:max-w-[140px] ">
        <button className="xxl:py-[10px] xxl:px-[19px] xxl:bg-primary xxl:text-white xxl:text-center xxl:text-[18px] xxl:font-primary xxl:rounded-[5px] sm:text-[12px] sm:py-[6px] sm:px-[16px] ">
          Enter Marketplace
        </button>
      </div>
    </section>
  );
};

export default Marketplace;
