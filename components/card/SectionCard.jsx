import React from 'react';
import Card from './Card';

const SectionCard = ({ title, videos }) => {
  return (
    <section className="w-full px-[3rem]">
      <h2 className="text-white px-3 py-6 text-3xl">{title}</h2>
      <div className="overflow-x-scroll overflow-y-hidden flex">
        {videos.map((video, id) => {
          return <Card imgUrl={video.imgUrl} key={id} id={id} />;
        })}
      </div>
    </section>
  );
};

export default SectionCard;
