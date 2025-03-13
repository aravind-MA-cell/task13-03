import React, { useState } from "react";
import "./Carousel.css";
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";

const images = [
  {
    src: "https://images.pexels.com/photos/1128797/pexels-photo-1128797.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Image 1",
  },
  {
    src: "https://images.pexels.com/photos/906150/pexels-photo-906150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Image 2",
  },
  {
    src: "https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Image 3",
  },
  {
    src: "https://images.pexels.com/photos/248159/pexels-photo-248159.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Image 4",
  },
  {
    src: "https://images.pexels.com/photos/36487/above-adventure-aerial-air.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Image 5",
  },
  {
    src: "https://images.pexels.com/photos/1128797/pexels-photo-1128797.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Image 6",
  },
  {
    src: "https://images.pexels.com/photos/906150/pexels-photo-906150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Image 7",
  },
  {
    src: "https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Image 8",
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel-container">
      <h2>Carousel</h2>
      <div className="carousel-imgs">
        {images.slice(0, 2).map((image, index) => (
          <img key={index} src={image.src} alt={image.title} />
        ))}
        {images.length > 2 && (
          <button className="more-img" onClick={() => setShowPopup(true)}>
            {images.length - 2} More
          </button>
        )}
      </div>

      {showPopup && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0, 0, 0, 0.8)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <h3 className="carousel-title">
            {currentIndex + 1} of {images.length}
          </h3>
          <img
            src={images[currentIndex].src}
            alt={images[currentIndex].title}
            width="600"
            className="carousel-main-img"
          />
          <div className="footer-imgs" >
            {images.map((image, index) => (
              <img
                key={index}
                src={image.src}
                alt={image.title}
                style={{
                  cursor: "pointer",
                  border: currentIndex === index ? "2px solid white" : "none",
                }}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
          <div className="top-btns">
            <button className="previous-btn" onClick={prevSlide}>
              <GrFormPrevious />
            </button>
            <button onClick={nextSlide} className="next-btn">
              <GrFormNext />
            </button>
          </div>
          <div className="popup-btns">
            <button className="previous-btn" onClick={prevSlide}>
              <GrFormPrevious />
            </button>
            <button onClick={nextSlide} className="next-btn">
              <GrFormNext />
            </button>
          </div>
          <button className="close-btn" onClick={() => setShowPopup(false)}>
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default Carousel;
