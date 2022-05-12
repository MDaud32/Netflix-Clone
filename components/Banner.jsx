import React from 'react';

const Banner = ({ title, subTitle, imgUrl }) => {
  return (
    <div className="flex relative w-full h-80">
      <div className="absolute z-10">
        <div className="text-white">
          <h2>{title}</h2>
          <h3>{subTitle}</h3>
          <div>
            <button>Play</button>
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
