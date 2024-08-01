// src/Carousel.js
import React, { useState } from 'react';
import './Reviews.css';
import css from "./assets/css3-plain.svg"
import python from "./assets/python.svg"
import swift from "./assets/java-original.svg"
import { FaAngleDoubleLeft } from "react-icons/fa";
import { FaAngleDoubleRight } from "react-icons/fa";

const images = [
  css,
  python,
  swift
];

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="carousel">
      <button className="carousel-button prev" onClick={prevImage}>
      <FaAngleDoubleLeft />
      </button>
      <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} className="carousel-image" />
      <button className="carousel-button next" onClick={nextImage}>
      <FaAngleDoubleRight />
      </button>
    </div>
  );
};

export default Reviews;
