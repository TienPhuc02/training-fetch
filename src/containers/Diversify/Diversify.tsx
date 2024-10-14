import Image from 'next/image';
import React from 'react';

const Diversify = () => {
  return (
    <section className="xl:max-w-[1200px] lg:max-w-[900px] md:max-w-[650px] lg:flex-col lg:items-center lg:justify-between lg:gap-[28px] lg:mb-[90px] md:mb-[80px] sx:max-w-[720px] sm:max-w-[300px] mx-auto diversify-container text-primary mb-[140px] sx:mb-[100px] sm:mb-[70px]">
      <div className="header-diversify mx-auto mb-[68px] sx:mb-[60px] md:mb-[40px]">
        <p className="title-diversify text-[40px] leading-1 font-secondary text-center xl:max-w-[642px] mx-auto xl:mb-[16px] sx:text-[30px] sx:leading-[1.2] sx:max-w-[550px] sx:mb-[24px] sm:text-center sm:mb-[16px] sm:text-[22px] md:text-[20px] md:mb-[12px]">
          Diversify your investment portfolio
        </p>
        <p className="font-primary xl:text-[20px]  xl:text-secondary xl:mb-[50px] xl:leading-[1.2] sx:text-[18px] sx:leading-[1.3] sx:mb-[40px] sm:text-[14px] sm:mb-[30px] sm:text-center sm:text-secondary md:text-[14px] md:mb-[24px]">
          Invest easily in a variety of digital assets, including tokens, NFTs
          or other on chain - off chain assets.
        </p>
      </div>
      <div className="content-diversify xl:max-w-[1200px] xl:w-[1200px] lg:w-[900px]   mx-auto md:w-[580px]">
        <Image
          alt="img-create-investment-6"
          src="/images/img-investment-6.png"
          className="rounded-[16px]"
          width={1200}
          height={580}
        />
      </div>
    </section>
  );
};

export default Diversify;
