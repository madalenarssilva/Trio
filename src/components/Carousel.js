import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import useFetch from "../../src/useFetch.js";

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

const Gallery = ({ items }) => {
  const tools = useFetch("https://api.trio-mbi-api.com/wp-json/wp/v2/tool");
  const images = [];

  function searchTool(idToSearch, tools) {
    console.log(tools);
    if (tools == null) {
      return null;
    }
    return tools.filter((item) => {
      return item.id === idToSearch;
    });
  }

  if (tools != null) {
    //Needed due to async useFetch
    {
      items &&
        items.map((item, index) =>
          images.push(
            <img
              src={searchTool(item.ID, tools)[0].acf.icon.url}
              onDragStart={handleDragStart}
              role="presentation"
            />
          )
        );
    }
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
