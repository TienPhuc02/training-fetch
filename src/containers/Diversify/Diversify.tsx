import Image from 'next/image';
import React from 'react';

const Diversify = () => {
  return (
    <section className="diversify-container text-white mb-[140px] sm:mb-[70px]">
      <div className="header-diversify max-w-[957px] mx-auto mb-[68px]">
        <p className="title-diversify xxl:text-[40px] xxl:leading-1 xxl:font-secondary xxl:text-center xxl:max-w-[642px] mx-auto xxl:mb-[16px] sm:text-center sm:mb-[16px] sm:text-[22px] ">
          Diversify your investment portfolio
        </p>
        <p className="xxl:font-primary xxl:text-[20px] xxl:text-secondary xxl:mb-[50px] xxl:leading-[1.2] sm:text-[14px] sm:mb-[30px] sm:text-center ">
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
