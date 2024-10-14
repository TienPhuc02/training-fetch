import Image from 'next/image';
import React from 'react';

const Become = () => {
  return (
    <section
      className="mx-auto become-container flex xl:flex-row justify-between items-center xl:max-w-[1200px]  xl:gap-[28px] xl:mb-[140px]
     lg:max-w-[900px] lg:flex-col lg:items-center lg:justify-between lg:gap-[28px] lg:mb-[90px] md:max-w-[650px] sx:max-w-[720px] sx:mb-[80px] sx:gap-[20px] sm:flex-col sm:mb-[70px] sm:max-w-[300px]"
    >
      <div className="become-left xl:items-start text-primary xl:max-w-[441px] xl:max-h-[354px] flex sm:flex-col sm:items-center xl:flex-col xl:justify-between sx:max-w-[600px] sx:items-center sx:text-center md:max-w-[650px]">
        <p className="font-secondary xl:text-[40px] text-primary leading-[1.2] xl:max-w-[432px] xl:max-h-[144px] xl:mb-[28px] sx:text-[28px] sx:mb-[24px] lg:text-[24px] sx:text-center sm:text-[22px] xl:text-left sm:text-center sm:mb-[16px] md:text-[26px]">
          Become a member of existing investment squads
        </p>
        <p className="xl:font-primary xl:text-[20px] text-secondary xl:mb-[50px] sx:text-[18px] sx:mb-[40px] xl:text-left leading-[1.2] sm:text-[14px] lg:text-secondary sm:mb-[30px] sm:text-center md:text-[16px]">
          Depending on your taste, either low cap, blue chip NFTs, or even web3
          startup, you can easily choose the right squad for you.
        </p>
        <div className="wrapper-button-become pt-3">
          <button className="xl:py-[10px] xl:px-[17px] bg-primary text-primary xl:text-[18px] sx:text-[16px] sx:py-[8px] sx:px-[20px] font-primary rounded-[5px] sm:text-[12px] sm:py-[6px] sm:px-[16px] sm:mb-[20px] mt-auto xl:self-start md:text-[16px] md:py-[8px] md:px-[14px]">
            Investment squads
          </button>
        </div>
      </div>

      <div className="become-right lg:flex lg:gap-[20px] text-primary lg:flex-col lg:items-center lg:justify-center">
        <div className="xl:w-[660px] sx:w-[600px] lg:w-[500px] md:w-[450px]">
          <Image
            alt="img-create-investment-3"
            src="/images/img-investment-3.png"
            className="rounded-[16px] w-full h-auto"
            width={660}
            height={642}
            objectFit="contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Become;
