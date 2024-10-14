import Image from 'next/image';
import React from 'react';

const Gasless = () => {
  return (
    <section
      className="mx-auto gasless-container flex xl:flex-row justify-between items-center xl:max-w-[1200px] xl:gap-[28px] xl:mb-[140px]
      lg:max-w-[900px]  lg:items-center lg:justify-between lg:gap-[28px] lg:mb-[90px] 
      md:max-w-[768px] md:gap-[24px] md:mb-[80px] 
      sx:max-w-[720px] sx:gap-[20px] sx:mb-[100px] sm:flex-col sm:mb-[70px] sm:max-w-[300px]"
    >
      <div
        className="gasless-left text-primary xl:max-w-[441px] xl:max-h-[354px] xl:items-start flex sm:flex-col lg:max-w-[900px]
      sx:max-w-[400px] sx:max-h-[320px] md:max-w-[350px] md:max-h-[300px]"
      >
        <p
          className="font-secondary xl:text-[40px] text-primary leading-[1.2] xl:max-w-[432px] xl:max-h-[144px] xl:mb-[28px] 
        sx:text-[32px] lg:max-w-[900px] sx:max-w-[400px] sx:max-h-[130px] sx:mb-[24px] sm:text-[22px] xl:text-left sm:text-center sm:mb-[16px] md:text-[28px] md:mb-[12px]"
        >
          Gasless governance
        </p>
        <p
          className="xl:font-primary xl:text-[20px] text-secondary xl:mb-[50px] xl:text-left leading-[1.2] 
        sx:text-[18px] sx:max-w-[380px] sx:mb-[40px] lg:max-w-[900px] sm:text-[14px] lg:text-secondary sm:mb-[30px] sm:text-center 
        md:text-[16px] md:mb-[24px]"
        >
          Propose, vote and execute major squad decisions on chain and at $0
          cost.
        </p>
      </div>
      <div className="gasless-right lg:flex lg:gap-[20px] text-primary">
        <div className="xl:w-[675px] lg:w-[600px] sx:w-[600px] md:w-[480px]">
          <Image
            alt="img-gasless"
            src="/images/gasless.png"
            className="rounded-[16px] w-full h-auto"
            width={675}
            height={620}
            objectFit="contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Gasless;
