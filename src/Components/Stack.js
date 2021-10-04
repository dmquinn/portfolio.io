import React, { useEffect } from "react";
import SliderCard from "./SliderCard";
import { StackData } from "../StackData";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../stylesheets/Slider.css";

const Stack = ({ setIsOpen, setModalData, modalData }) => {
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
    <div style={{ height: "100%" }} className="mx-14 ">
      <h3 className="text-white" id="stack">
        My Stack
      </h3>
      <Carousel ssr itemClassName="image-item" responsive={responsive}>
        {StackData.map((card, i) => {
          return (
            <div className="">
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

export default Stack;
