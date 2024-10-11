import Image from 'next/image';
import React from 'react';

const Become = () => {
  return (
    <section className="become-container xl:flex xl:flex-row xl:justify-between xl:gap-[28px] xl:mb-[140px] sm:flex-col sm:mb-[70px]">
      <div className="become-left text-primary xl:max-w-[441px] xl:max-h-[354px] sm:flex sm:flex-col sm:items-center">
        <p className="xl:font-secondary xl:text-[40px] text-primary xl:leading-[1.2] xl:max-w-[432px] xl:max-h-[144px] xl:mb-[28px] sm:text-[22px] xl:text-left sm:text-center sm:mb-[16px]">
          Become a member of existing investment squads
        </p>
        <p className="xl:font-primary xl:text-[20px] xl:text-secondary xl:mb-[50px] xl:text-left leading-1 sm:text-[14px] sm:mb-[30px] sm:text-center">
          Depending on your taste, either low cap, blue chip NFTs, or even web3
          startup, you can easily choose the right squad for you.
        </p>
        <button className="xl:py-[10px] xl:px-[17px] bg-primary text-white text-center xl:text-[18px] font-primary rounded-[5px] sm:text-[12px] sm:py-[6px] sm:px-[16px] sm:mb-[20px]">
          Investment squads
        </button>
      </div>
      <div className="become-right xl:text-white">
        <Image
          alt="img-create-investment-3"
          src="/images/img-investment-3.png"
          className="rounded-[16px]"
          width={659}
          height={354}
        />
      </div>
    </section>
  );
};

export default Become;
