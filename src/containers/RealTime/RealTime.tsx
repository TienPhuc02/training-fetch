import Image from 'next/image';
import React from 'react';

const RealTime = () => {
  return (
    <section className="real-time-container text-white flex justify-between mb-[140px]">
      <div className="real-time-left flex flex-col gap-[12px]">
        <Image
          alt="img-create-investment-4"
          src="/images/img-investment-4.png"
          className="rounded-[16px] w-[625px] h-[257px]"
          width={625}
          height={257}
        />
        <Image
          alt="img-create-investment-5"
          src="/images/img-investment-5.png"
          className="rounded-[16px] w-[625px] h-[257px]"
          width={625}
          height={257}
        />
      </div>
      <div className="real-time-right py-[141px] text-white max-w-[441px]">
        <p className="real-time-right-title font-secondary text-primary leading-[48px] text-[40px] mb-[28px]">
          Real-time digital asset management
        </p>
        <p className="real-time-right-description font-primary text-secondary leading-[28px] text-[20px]">
          Manage your portfolio and keep track of how the value of your digital
          assets are changing. All in one single platform.
        </p>
      </div>
    </section>
  );
};

export default RealTime;
