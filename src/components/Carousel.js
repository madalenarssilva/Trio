import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const handleDragStart = (e) => e.preventDefault();

const responsive = {
  0: { items: 1 },
  1024: { items: 3 },
};

const Gallery = ({ items }) => {
  console.log(items);
  return (
    <AliceCarousel
      mouseTracking
      items={items.map((item) => {
        return (
          <img
            src={"/" + item}
            onDragStart={handleDragStart}
            role="presentation"
          />
        );
      })}
      responsive={responsive}
      disableButtonsControls={true}
      /*controlsStrategy="alternate"*/
      disableDotsControls={true}
      controlsStrategy="responsive"
      infinite={true}
      autoPlay={true}
      autoPlayInterval={"2500"}
    />
  );
};

export default Gallery;
