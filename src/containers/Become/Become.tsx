import Image from 'next/image';
import React from 'react';

const Become = () => {
  return (
    <section className="become-container flex justify-between  gap-[28px] mb-[140px]">
      <div className="become-left text-white max-w-[441px]  max-h-[354px]">
        <p className="font-secondary text-[40px] text-primary max-w-[432px] mb-[28px] leading-[48px]">
          Become a member of existing investment squads
        </p>
        <p className="font-primary text-[20px] text-secondary mb-[50px] leading-[28px]">
          Depending on your taste, either low cap, blue chip NFTs, or even web3
          startup, you can easily choose the right squad for you.
        </p>
        <button className="py-[10px]  px-[17px] bg-primary text-white text-center text-[18px] font-primary rounded-[5px]">
          Investment squads
        </button>
      </div>
      <div className="become-right text-white">
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
