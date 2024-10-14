import Image from 'next/image';
import React from 'react';

const Partnerships = () => {
  const partnerships = new Array(12).fill({
    src: '/images/partnerships.png',
    alt: 'partnerships',
    width: 276,
    height: 46
  });
  return (
    <div className="xl:max-w-[1200px] sm:max-w-[300px]   mx-auto partnerships-container xl:mb-[140px] lg:max-w-[900px] lg:flex-col lg:items-center lg:justify-between lg:gap-[28px] sm:mb-[70px]">
      <p className="partnerships-title text-center font-secondary xl:text-[40px] sm:text-center sm:mb-[16px] sm:text-[22px] text-primary mb-[80px]">
        Out Partnerships
      </p>
      <div className="partnerships-lists  grid grid-cols-4 gap-[32px]">
        {partnerships.map((partnership, index) => (
          <div
            key={index}
            className="item-partnerships xl:py-[57px] sm:py-[12px] bg-white xl:rounded-[16px] sm:rounded-[5px]"
          >
            <Image
              src={partnership.src}
              alt={partnership.alt}
              width={partnership.width}
              height={partnership.height}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partnerships;
