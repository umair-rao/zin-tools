"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/CardsStylling.css";
import cardData from "./Data/CardsData.json";
import { BsArrowRightCircle } from "react-icons/bs";
import { BsArrowLeftCircle } from "react-icons/bs";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <BsArrowRightCircle
      className={className}
      style={{
        ...style,
        display: "block",
        background: "white",
        color: "black",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <BsArrowLeftCircle
        className={className}
        style={{
            ...style,
            display: "block",
            background: "white",
            color: "black",
          }}
        onClick={onClick}
      />
    );
  }

const SliderConvertFromPdf = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    centerPadding: "2rem",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            infinite: true,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            infinite: true,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            infinite: true,
          }
        }
      ]
  };

  return (
    <div className="container">
      <h2>Convert to PDF</h2>
      <div className="slider-container">
      <Slider {...settings}>
          {cardData.convertToPdf.map((item, i) => (
            <div key={i} className="cardBox" >
              <a href={item.link}>
                <img src={item.image} alt="icon" className="card-img" />
                <h3>{item.title}</h3>
                <p className="card-desc">{item.desc}</p>
              </a>
            </div>
          ))}
    </Slider>
      </div>
    </div>
  );
};

export default SliderConvertFromPdf;
