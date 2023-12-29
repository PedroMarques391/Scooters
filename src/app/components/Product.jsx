'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

function Product({
  mainTitle,
  description,
  price,
  stockQuantity,
  productCategory,
  CTALink,
  SKU,
  img1,
  imgAlt1,
  img2,
  imgAlt2,
  img3,
  imgAlt3,
  img4,
  imgAlt4,
  img5,
  imgAlt5,
  img6,
  imgAlt6,

}) {
  const [slideImages] = useState({
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
  });

  const [activeImg, setActiveImg] = useState(slideImages.img1);

  return (

    <div className="flex flex-col justify-between lg:flex-row gap-16 lg:items-center relative">

      <div className="absolute top-0 right-0">
        <span className="text-[#8B0000] font-semibold capitalize hidden md:flex text-xl md:text-2xl lg:text-3xl ">{productCategory}</span>
      </div>
      <div className="flex flex-col gap-6 lg:w-2/4">
        <Image
          src={activeImg}
          alt="Urban MotorCycle"
          width={600}
          height={500}
          priority
          className="w-full h-full md:w-[50%] md:h-[50%] mx-auto lg:w-[80%] lg:h-[80%] aspect-square object-cover rounded-xl"
        />

        <div className="flex flex-row justify-between mx-auto h-20 w-full md:max-w-[80%]">
          <Image
            src={slideImages.img1}
            alt={imgAlt1}
            width={500}
            height={500}
            priority
            className="w-[42px] h-[42px] lg:w-[60px] lg:h-[60px] mr-1 rounded-md cursor-pointer"
            onClick={() => setActiveImg(slideImages.img1)}
          />
          <Image
            src={slideImages.img2}
            alt={imgAlt2}
            width={500}
            height={500}
            priority
            className="w-[42px] h-[42px] lg:w-[60px] lg:h-[60px] mr-1 rounded-md cursor-pointer"
            onClick={() => setActiveImg(slideImages.img2)}
          />
          <Image
            src={slideImages.img3}
            alt={imgAlt3}
            width={500}
            height={500}
            priority
            className="w-[42px] h-[42px] lg:w-[60px] lg:h-[60px] mr-1 rounded-md cursor-pointer"
            onClick={() => setActiveImg(slideImages.img3)}
          />
          <Image
            src={slideImages.img4}
            alt={imgAlt4}
            width={500}
            height={500}
            priority
            className="w-[42px] h-[42px] lg:w-[60px] lg:h-[60px] mr-1 rounded-md cursor-pointer"
            onClick={() => setActiveImg(slideImages.img4)}
          />
          <Image
            src={slideImages.img5}
            alt={imgAlt5}
            width={500}
            height={500}
            priority
            className="w-[42px] h-[42px] lg:w-[60px] lg:h-[60px] mr-1 rounded-md cursor-pointer"
            onClick={() => setActiveImg(slideImages.img5)}
          />
          <Image
            src={slideImages.img6}
            alt={imgAlt6}
            width={500}
            height={500}
            priority
            className="w-[42px] h-[42px] lg:w-[60px] lg:h-[60px] mr-1 rounded-md cursor-pointer"
            onClick={() => setActiveImg(slideImages.img6)}
          />
        </div>
      </div>

      <div className="flex flex-col gap-4 lg:w-2/4">
        <div className="py-1">
          <h1 className="text-3xl font-bold mt-1">{mainTitle}</h1>
        </div>
        <p className="text-[#fcfafa]">
          {description}
        </p>
        <div className="py-1">
          <h6 className="text-1xl md:text-2xl font-semibold">
            <span className="text-xs text-slate-700">Preço por unidade com taxas inclusas: </span>
            R$
            {' '}
            {price}
          </h6>
        </div>
        <div className="uppercase text-sm font-bold text-slate-400 flex justify-between items-center">
          <span className="text-xs text-slate-700">
            SKU:
            {' '}
            {SKU}
          </span>
          <span className="text-xs text-slate-700">
            {stockQuantity}
            {' '}
            em estoque
          </span>
        </div>
        <div className="flex flex-row justify-center md:justify-start items-center mt-2">
          <div className="w-full">
            <Link
              href={CTALink}
              target="_blank"
            >
              <button type="button" className="bg-[#8B0000] text-white hover:bg-black font-semibold px-16 py-3 rounded-xl h-full uppercase w-full md:w-1/2 duration-1000 ">Comprar agora</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
