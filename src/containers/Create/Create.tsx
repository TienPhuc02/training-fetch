import Image from 'next/image';
import React from 'react';

const Create = () => {
  return (
    <section className="create-investment-container mx-auto mt-[256px] mb-[140px] xl:max-w-[1200px] xl:mt-[256px] xl:mb-[140px] lg:max-w-[900px] lg:mt-[100px] lg:mb-[80px] md:max-w-[650px] sx:max-w-[720px] sx:mt-[80px] sx:mb-[60px] sm:max-w-[300px] sm:mt-[70px]">
      <div className="header-create-investment xl:max-w-[1064px] xl:mb-[68px] sx:max-w-[680px] mx-auto mb-[68px] lg:max-w-[700px] md:max-w-[700px]  sm:max-w-[280px] sm:mb-[30px]">
        <p className="title-create-investment text-center font-secondary xl:text-[40px] xl:mb-[16px] lg:text-[20px] md:text-[24px] sx:text-[28px] text-primary sm:text-[18px]">
          Create your own investment squad
        </p>
        <p className="description-create-investment font-primary xl:text-[20px] sx:text-[16px] text-[20px] text-secondary sm:text-[12px] sm:text-center md:text-[12px]">
          Connect your wallet and create your investment squad in less than 60
          seconds. No coding experience required.
        </p>
      </div>

      <div className="content-create-investment flex xl:flex-row gap-[20px] xl:max-w-[1200px] sx:max-w-[680px] lg:max-w-[600px] lg:flex lg:flex-col lg:mb-[48px] justify-center items-center xl:mb-[48px] sx:mb-[30px] sm:flex-col sm:mb-[20px] mx-auto">
        <div className="xl:w-[580px] sx:w-[500px] lg:w-[500px]  md:w-[400px] ">
          <Image
            alt="img-create-investment-1"
            src="/images/img-investment.png"
            className="rounded-[16px] "
            width={580}
            height={642}
            objectFit="contain"
          />
        </div>
        <div className="xl:w-[580px] sx:w-[500px] lg:w-[500px]  md:w-[400px] ">
          <Image
            alt="img-create-investment-2"
            src="/images/img-investment-2.png"
            className="rounded-[16px] "
            width={580}
            height={642}
            objectFit="contain"
          />
        </div>
        <div className="button-create-investment max-w-[200px] mx-auto text-center">
          <button className="bg-primary text-primary text-center font-primary rounded-[5px] sm:text-[12px] sm:py-[6px] sm:px-[16px] sx:text-[16px] sx:py-[8px] sx:px-[20px] xl:text-[18px] xl:py-[10px] xl:px-[38px] lg:py-[6px] lg:px-[16px] md:text-[16px] md:py-[8px] md:px-[24px]">
            Get started
          </button>
        </div>
      </div>
    </section>
  );
};

export default Create;
