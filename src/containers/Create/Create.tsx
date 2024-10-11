import Image from 'next/image';
import React from 'react';

const Create = () => {
  return (
    <section className="create-investment-container mt-[256px] mb-[140px]">
      <div className="header-create-investment max-w-[1064px] mx-auto mb-[68px]">
        <p className="title-create-investment text-center font-secondary text-[40px] text-primary">
          Create your own investment squad
        </p>
        <p className="description-create-investment font-primary text-[20px] text-secondary">
          Connect your wallet and create your investment squad in less than 60
          seconds. No coding experience required.
        </p>
      </div>
      <div className="content-create-investment flex gap-[40px] mb-[48px]">
        <Image
          alt="img-create-investment-1"
          src="/images/img-investment.png"
          className="rounded-[16px]"
          width={580}
          height={642}
        />
        <Image
          alt="img-create-investment-2"
          src="/images/img-investment-2.png"
          className="rounded-[16px]"
          width={580}
          height={642}
        />
      </div>
      <div className="button-create-investment max-w-[200px] mx-auto">
        <button className="py-[10px] w-full px-[38px] bg-primary text-white text-center text-[18px] font-primary rounded-[5px]">
          Get started
        </button>
      </div>
    </section>
  );
};

export default Create;
