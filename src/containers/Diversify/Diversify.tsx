import Image from 'next/image';
import React from 'react';

const Diversify = () => {
  return (
    <section className="diversify-container text-white mb-[140px]">
      <div className="header-diversify max-w-[957px] mx-auto mb-[68px]">
        <p className="title-diversify text-[40px] leading-[40px] font-secondary text-center max-w-[642px] mx-auto mb-[16px]">
          Diversify your investment portfolio
        </p>
        <p className="font-primary text-[20px] text-secondary mb-[50px] leading-[28px]">
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
