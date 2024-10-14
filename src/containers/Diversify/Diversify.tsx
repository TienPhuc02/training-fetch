import Image from 'next/image';
import React from 'react';

const Diversify = () => {
  return (
    <section className="xl:max-w-[1200px] lg:max-w-[900px] lg:flex-col lg:items-center lg:justify-between lg:gap-[28px] lg:mb-[90px] sm:max-w-[300px]  mx-auto diversify-container text-primary mb-[140px] sm:mb-[70px]">
      <div className="header-diversify max-w-[957px] mx-auto mb-[68px]">
        <p className="title-diversify xl:text-[40px] xl:leading-1 xl:font-secondary xl:text-center xl:max-w-[642px] mx-auto xl:mb-[16px] sm:text-center sm:mb-[16px] sm:text-[22px] ">
          Diversify your investment portfolio
        </p>
        <p className="xl:font-primary xl:text-[20px] xl:text-secondary xl:mb-[50px] xl:leading-[1.2] sm:text-[14px] sm:mb-[30px] sm:text-center sm:text-secondary">
          Invest easily in a variety of digital assets, including tokens, NFTs
          or other on chain - off chain assets.
        </p>
      </div>
      <div className="content-diversify">
        <Image
          alt="img-create-investment-6"
          src="/images/img-investment-6.png"
          className="rounded-[16px]"
          width={1200}
          height={700}
        />
      </div>
    </section>
  );
};

export default Diversify;
