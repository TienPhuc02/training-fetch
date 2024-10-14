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
    <div className="xl:max-w-[1200px] md:max-w-[600px] sm:max-w-[300px] sx:max-w-[720px] mx-auto partnerships-container xl:mb-[140px] sx:mb-[100px] lg:max-w-[900px] lg:flex-col lg:items-center lg:justify-between lg:gap-[28px] sm:mb-[70px] md:mb-[80px]">
      <p className="partnerships-title text-center font-secondary xl:text-[40px] md:text-[28px] sx:text-[32px] sm:text-center sm:mb-[16px] sm:text-[22px] text-primary mb-[80px] sx:mb-[60px]">
        Our Partnerships
      </p>
      <div className="partnerships-lists grid xl:grid-cols-4 gap-[32px] sx:grid-cols-3 md:grid-cols-2">
        {partnerships.map((partnership, index) => (
          <div
            key={index}
            className="item-partnerships xl:w-[276px] xl:py-[57px] md:py-[30px] flex justify-center items-center sx:py-[40px] sm:py-[12px] bg-white xl:rounded-[16px] md:rounded-[10px] sx:rounded-[10px] sm:rounded-[5px]"
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
