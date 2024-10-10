import Image from 'next/image';
import React from 'react';

const Marketplace = () => {
  return (
    <section className="create-investment-container  mt-[256px] px-[68px] mb-[140px]">
      <div className="header-create-investment max-w-[1064px] mb-[68px]">
        <p className="title-create-investment text-center font-secondary text-[40px] text-primary">
          Marketplace for squad assets
        </p>
        <p className="description-create-investment font-primary text-[20px] text-secondary">
          Buy and sell squad assets, such as tokens and NFTs, on the
          marketplace.
        </p>
      </div>
      <div className="content-create-investment flex gap-[40px] mb-[48px]">
        <Image
          alt="img-create-investment-7"
          src="/images/img-investment-7.png"
          className="rounded-[16px]"
          width={580}
          height={315}
        />
        <Image
          alt="img-create-investment-8"
          src="/images/img-investment-8.png"
          className="rounded-[16px]"
          width={580}
          height={315}
        />
      </div>
      <div className="button-create-investment flex  justify-center">
        <button className="py-[10px]  px-[38px] bg-primary text-white text-center text-[18px] font-primary rounded-[5px]">
          Enter Marketplace
        </button>
      </div>
    </section>
  );
};

export default Marketplace;
