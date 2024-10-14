import Image from 'next/image';
import React from 'react';

const RealTime = () => {
  return (
    <section className="xl:max-w-[1200px] sm:max-w-[300px]  mx-auto real-time-container xl:text-primary xl:flex xl:flex-row xl:justify-between xl:mb-[140px] sm:mb-[70px] sm:flex sm:flex-col">
      <div className="real-time-left flex sm:flex-col gap-[12px] xl:order-0 sm:order-1">
        <Image
          alt="img-create-investment-4"
          src="/images/img-investment-4.png"
          className="rounded-[16px] "
          width={625}
          height={257}
        />
        <Image
          alt="img-create-investment-5"
          src="/images/img-investment-5.png"
          className="rounded-[16px] "
          width={625}
          height={257}
        />
      </div>
      <div className="real-time-right xl:py-[141px] xl:text-primary xl:max-w-[441px] sm:order-0 sm:pb-[50px] xl:order-1">
        <p className="real-time-right-title font-secondary text-primary leading-[1.2] xl:text-[40px] xl:text-left mb-[28px] sm:text-center sm:mb-[16px] sm:text-[22px] ">
          Real-time digital asset management
        </p>
        <p className="real-time-right-description font-primary text-secondary xl:leading-[1.4] xl:text-[20px] xl:text-left sm:text-[14px] sm:mb-[30px] sm:text-center">
          Manage your portfolio and keep track of how the value of your digital
          assets are changing. All in one single platform.
        </p>
      </div>
    </section>
  );
};

export default RealTime;
