import React from 'react';
import Card from './Card';

const SectionCard = ({ title }) => {
  return (
    <section className="w-full px-[0.4rem]">
      <h2 className="text-white px-9 py-6 text-3xl">{title}</h2>
      <div className="overflow-x-scroll overflow-y-hidden flex">
        <Card imgUrl="/static/photo.avif" size="large" />
        <Card imgUrl="/static/photo.avif" size="large" />
        <Card imgUrl="/static/photo.avif" size="large" />
        <Card imgUrl="/static/photo.avif" size="large" />
        <Card imgUrl="/static/photo.avif" size="large" />
        <Card imgUrl="/static/photo.avif" size="large" />
        <Card imgUrl="/static/photo.avif" size="large" />
        <Card imgUrl="/static/photo.avif" size="large" />
      </div>
    </section>
  );
};

export default SectionCard;
