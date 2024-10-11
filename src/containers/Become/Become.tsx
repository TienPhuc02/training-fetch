import Image from 'next/image';
import React from 'react';

const Become = () => {
  return (
    <section className="become-container xxl:flex xxl:flex-row xxl:justify-between xxl:gap-[28px] xxl:mb-[140px] sm:flex-col sm:mb-[70px]">
      <div className="become-left text-primary xxl:max-w-[441px] xxl:max-h-[354px] sm:flex sm:flex-col sm:items-center">
        <p className="xxl:font-secondary xxl:text-[40px] text-primary xxl:leading-[1.2] xxl:max-w-[432px] xxl:max-h-[144px] xxl:mb-[28px] sm:text-[22px] xxl:text-left sm:text-center sm:mb-[16px]">
          Become a member of existing investment squads
        </p>
        <p className="xxl:font-primary xxl:text-[20px] xxl:text-secondary xxl:mb-[50px] xxl:text-left leading-1 sm:text-[14px] sm:mb-[30px] sm:text-center">
          Depending on your taste, either low cap, blue chip NFTs, or even web3
          startup, you can easily choose the right squad for you.
        </p>
        <button className="py-[10px] px-[17px] bg-primary text-white text-center text-[18px] font-primary rounded-[5px] sm:text-[12px] sm:py-[6px] sm:px-[16px] sm:mb-[20px]">
          Investment squads
        </button>
      </div>
      <div className="become-right xxl:text-white">
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
