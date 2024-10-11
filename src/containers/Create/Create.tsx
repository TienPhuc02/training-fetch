import Image from 'next/image';
import React from 'react';

const Create = () => {
  return (
    <section className="create-investment-container xl:mt-[256px] xl:mb-[140px] mt-[256px] mb-[140px] sm:mt-[70px]">
      <div className="header-create-investment xl:max-w-[1064px] max-w-[1064px] mx-auto mb-[68px] sm:max-w-[280px] sm:mb-[30px]">
        <p className="title-create-investment text-center font-secondary xl:text-[40px] text-[40px] text-primary sm:text-[18px]">
          Create your own investment squad
        </p>
        <p className="description-create-investment font-primary xl:text-[20px] text-[20px] text-secondary sm:text-[12px] sm:text-center">
          Connect your wallet and create your investment squad in less than 60
          seconds. No coding experience required.
        </p>
      </div>
      <div className="content-create-investment flex gap-[40px] xl:mb-[48px] xl:flex-row sm:flex-col sm:mb-[20px]">
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
          className="rounded-[16px] "
          width={580}
          height={642}
        />
      </div>
      <div className="button-create-investment max-w-[200px] mx-auto">
        <button className="py-[10px] w-full px-[38px] bg-primary text-white text-center text-[18px] font-primary rounded-[5px] sm:text-[12px] sm:py-[6px] sm:px-[16px] xl:text-[18px] xl:py-[10px] xl:px-[38px]">
          Get started
        </button>
      </div>
    </section>
  );
};

export default Create;
