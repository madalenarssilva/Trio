import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const handleDragStart = (e) => e.preventDefault();

const items = [
  <img src="/react.png" onDragStart={handleDragStart} role="presentation" />,
  <img src="/bootsrap" onDragStart={handleDragStart} role="presentation" />,
  <img src="/figma" onDragStart={handleDragStart} role="presentation" />,
];

const Gallery = () => {
  return (
    <AliceCarousel mouseTracking items={items} />
  );
}

export default Gallery;