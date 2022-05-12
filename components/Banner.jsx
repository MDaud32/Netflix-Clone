import Image from 'next/image';
import React from 'react';

const Banner = ({ title, subTitle, imgUrl }) => {
  return (
    <div className="flex relative w-full h-[80vh]">
      <div className="absolute z-10">
        <div className="text-white px-[4rem] py-[4rem] text-center">
          <div className="flex flex-row gap-2">
            <p className="text-red-600 text-5xl font-bold">N</p>
            <p className="mt-3">S E R I E S</p>
          </div>
          <h2 className="text-3xl uppercase font-semibold stroke-[4px] mt-2 stroke-black">
            {title}
          </h2>
          <h3 className="text-2xl uppercase text-slate-400">{subTitle}</h3>
          <div className="flex justify-center">
            <button className="px-8 py-2 rounded-md mt-5 bg-white text-black flex items-center">
              <Image
                src="/static/play-icon.svg"
                alt="this is auther pic"
                width={40}
                height={40}
              />
              <span>Play</span>
            </button>
          </div>
        </div>
      </div>
      <div>
        <div
          style={{
            backgroundImage: `url(${imgUrl})`,
            backgroundSize: 'cover',
            width: '100%',
            height: '100%',
            backgroundPosition: '50% 50%',
            position: 'absolute',
          }}></div>
      </div>
    </div>
  );
};

export default Banner;
