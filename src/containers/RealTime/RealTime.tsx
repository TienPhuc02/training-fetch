import Image from 'next/image';
import React from 'react';

const RealTime = () => {
  return (
    <section className="xl:max-w-[1200px] sx:max-w-[720px] md:max-w-[650px] sm:max-w-[300px] mx-auto items-center justify-center real-time-container text-primary xl:flex-row xl:mb-[140px] lg:max-w-[900px] lg:gap-[28px] lg:mb-[90px] sx:gap-[20px] sx:mb-[80px] sm:mb-[70px] sm:flex sm:flex-col ">
      <div className="real-time-left flex flex-col items-center justify-center sm:flex-col gap-[12px] xl:order-0 sm:order-1 ">
        <div className="xl:w-[625px] lg:w-full  md:w-[550px]">
          <Image
            alt="img-create-investment-4"
            src="/images/img-investment-4.png"
            className="rounded-[16px]"
            width={625}
            height={257}
          />
        </div>
        <div className="xl:w-[625px] lg:w-full md:w-[550px]">
          <Image
            alt="img-create-investment-5"
            src="/images/img-investment-5.png"
            className="rounded-[16px]"
            width={625}
            height={257}
          />
        </div>
      </div>
      <div className="real-time-right xl:py-[141px] xl:text-primary xl:max-w-[441px] sm:order-0 sm:pb-[50px] xl:order-1 sx:py-[50px] sx:max-w-[600px] sx:text-center md:max-w-[500px]">
        <p className="real-time-right-title font-secondary text-primary leading-[1.2] xl:text-[40px] xl:text-left mb-[28px] sx:text-[30px] md:max-w-[500px] sx:mb-[24px] sm:text-center sm:mb-[16px] sm:text-[22px] md:text-[28px]">
          Real-time digital asset management
        </p>
        <p className="real-time-right-description font-primary text-secondary xl:leading-[1.4] xl:text-[20px] xl:text-left sx:text-[18px] sx:leading-[1.3] sx:mb-[40px] sm:text-[14px] md:max-w-[500px] sm:mb-[30px] sm:text-center md:text-[16px]">
          Manage your portfolio and keep track of how the value of your digital
          assets are changing. All in one single platform.
        </p>
      </div>
    </section>
  );
};

export default RealTime;
