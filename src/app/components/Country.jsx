import Image from 'next/image';
import React from 'react';

function Country({ img, imgAlt, description }) {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-center mt-16">
        <div className="md:w-1/5">
          <Image
            src={img}
            alt={imgAlt}
            width={34}
            height={24}
            priority
          />
        </div>
        <p className="w-full md:w-4/5 pt-5 md:pt-0">
          {description}
        </p>
      </div>
    </>
  );
}

export default Country;
