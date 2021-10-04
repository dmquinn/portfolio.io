import React, { useEffect } from "react";
import SliderCard from "./SliderCard";
import SliderData from "../SliderData";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../stylesheets/Slider.css";

const Popular = ({ setIsOpen, setModalData, modalData }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 5, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <div style={{ overflowX: "visible", height: "100%" }} className=" mx-14 ">
      <h3 className="text-white">Popular Projects</h3>
      <Carousel ssr itemClassName="image-item" responsive={responsive}>
        {SliderData.map((card, i) => {
          return (
            <div>
              <SliderCard
                card={card}
                key={i}
                setIsOpen={setIsOpen}
                setModalData={setModalData}
                modalData={modalData}
              />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Popular;
