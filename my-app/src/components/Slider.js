import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./Slider.css";

import Img1 from "../img/carrousel1.png";
import Img2 from "../img/carrousel2.png";
import Img3 from "../img/carrousel3.png";

const Slider = () => {
  const datas = [
    {
      id: 1,
      image: Img1,
      alt: "mmoney is back",
      title: "Titre du slider 1",
      text: `Lorem ipsum dolor sit amet, consectetur`,
    },
    {
      id: 2,
      image: Img2,
      alt: "minor adulte",
      title: "Titre du slider 2",
      text: `Lorem ipsum dolor sit amet, consectetur`,
    },
    {
      id: 3,
      image: Img3,
      alt: "magic monlight",
      title: "Titre du slider 3",
      text: `Lorem ipsum dolor sit amet, consectetur`,
    },
  ];

  return (
    <Carousel
      autoPlay
      interval={4000}
      infiniteLoop
      showIndicators={false}
      showStatus={false}
    >
      {datas.map((slide) => (
        <div key={slide.id}>
          <img src={slide.image} alt={slide.alt} />
          <div className="overlay">
            <h2 className="overlay__title">{slide.title}</h2>
            <p className="overlay__text">{slide.text}</p>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default Slider;
