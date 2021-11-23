import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const handleDragStart = (e) => e.preventDefault();

const responsive = {
  0: { items: 1 },
  1024: { items: 3 },
};

const items = [
  <img src="/react.png" onDragStart={handleDragStart} role="presentation" />,
  <img
    src="/bootstrap.svg"
    onDragStart={handleDragStart}
    role="presentation"
  />,
  <img src="/figma.svg" onDragStart={handleDragStart} role="presentation" />,
  <img
    src="/javaScript.png"
    onDragStart={handleDragStart}
    role="presentation"
  />,
  <img src="/css.png" onDragStart={handleDragStart} role="presentation" />,
];

const Gallery = () => {
  return (
    <AliceCarousel
      mouseTracking
      items={items}
      responsive={responsive}
      /*controlsStrategy="alternate"*/
      disableDotsControls={true}
      controlsStrategy="responsive"
    />
  );
};

export default Gallery;
