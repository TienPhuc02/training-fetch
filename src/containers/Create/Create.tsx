import Image from 'next/image';
import React from 'react';

const Create = () => {
  return (
    <section className="create-investment-container mx-auto mt-[256px] mb-[140px] xl:max-w-[1200px] xl:mt-[256px] xl:mb-[140px] lg:max-w-[900px] lg:mt-[100px] lg:mb-[80px] sm:max-w-[300px] sm:mt-[70px]">
      <div className="header-create-investment xl:max-w-[1064px] mx-auto mb-[68px] lg:max-w-[700px] sm:max-w-[280px] sm:mb-[30px]">
        <p className="title-create-investment text-center font-secondary xl:text-[40px] lg:text-[20px] text-primary sm:text-[18px]">
          Create your own investment squad
        </p>
        <p className="description-create-investment font-primary xl:text-[20px] text-[20px] text-secondary sm:text-[12px] sm:text-center">
          Connect your wallet and create your investment squad in less than 60
          seconds. No coding experience required.
        </p>
      </div>

      <div className="content-create-investment flex xl:flex-row gap-[20px] xl:max-w-[1200px] lg:max-w-[600px] lg:flex lg:flex-col lg:mb-[48px] lg:justify-center lg:items-center xl:mb-[48px] sm:flex-col sm:mb-[20px] mx-auto">
        <div className="xl:w-[580px] lg:w-[500px]">
          <Image
            alt="img-create-investment-1"
            src="/images/img-investment.png"
            className="rounded-[16px] w-full h-auto"
            width={580}
            height={642}
            objectFit="contain"
          />
        </div>
        <div className="xl:w-[580px] lg:w-[500px]">
          <Image
            alt="img-create-investment-2"
            src="/images/img-investment-2.png"
            className="rounded-[16px] w-full h-auto"
            width={580}
            height={642}
            objectFit="contain"
          />
        </div>
      </div>

      <div className="button-create-investment max-w-[200px] mx-auto">
        <button className="py-[10px] w-full px-[38px] bg-primary text-primary text-center text-[18px] font-primary rounded-[5px] sm:text-[12px] sm:py-[6px] sm:px-[16px] xl:text-[18px] xl:py-[10px] xl:px-[38px]">
          Get started
        </button>
      </div>
    </section>
  );
};

export default Create;
