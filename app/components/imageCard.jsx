import React from "react";
import Image from "next/image";
import Photo1 from "../../public/photo1.png";
import Photo2 from "../../public/photo2.png";

const ImageCard = () => {
  return (
    <section className="relative">
      <div className="flex justify-center md:hidden">
        <Image src={Photo1} alt="Interior" className="w-[351px] h-[264.32px]" />
      </div>
      <div className="hidden md:flex">
        <Image src={Photo1} alt="Interior" className="w-[555px] h-[400px]" />
      </div>
      <div className="w-[300px] h-[138px] bg-gray-900 z-5 absolute top-52 left-14 md:top-80 md:left-56">
        <div className="container flex items-center gap-5 ml-5 ">
          <div>
            <Image
              src={Photo2}
              className="w-[36.59px] h-[36.59px] rounded-full "
            />
          </div>
          <div>
            <h1 className="text-lg">Aliza Webber</h1>
            <p className="leading-none font-light text-gray-400">
              Interior designer
            </p>
          </div>
        </div>
        <div className="w-[210px] ml-5  ">Designed in 2020 by Aliza Webber</div>
      </div>
    </section>
  );
};

export default ImageCard;
