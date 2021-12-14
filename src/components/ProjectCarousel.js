import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const handleDragStart = (e) => e.preventDefault();

const responsive = {
  0: { items: 1 },
  1024: { items: 2 },
};

const Gallery = ({ items }) => {
  const images = [];

  {
    items &&
      items.map((item, index) =>
        images.push(
          <img
            src={item.full_image_url}
            onDragStart={handleDragStart}
            role="presentation"
          />
        )
      );
  }

  return (
    <AliceCarousel
      mouseTracking
      items={images}
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
