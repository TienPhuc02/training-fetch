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
    <div className="partnerships-container mb-[140px]">
      <p className="partnerships-title text-center font-secondary text-[40px] text-primary mb-[80px]">
        Out Partnerships
      </p>
      <div className="partnerships-lists  grid grid-cols-4 gap-[32px]">
        {partnerships.map((partnership, index) => (
          <div
            key={index}
            className="item-partnerships py-[57px] bg-white rounded-[16px]"
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
