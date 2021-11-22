import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const handleDragStart = (e) => e.preventDefault();

const items = [
  <img src="/Bility.png" onDragStart={handleDragStart} role="presentation" />,
  <img src="/Didi.png" onDragStart={handleDragStart} role="presentation" />,
  <img src="/Lief.png" onDragStart={handleDragStart} role="presentation" />,
];

const Gallery = () => {
  return (
    <AliceCarousel mouseTracking items={items} />
  );
}

export default Gallery;