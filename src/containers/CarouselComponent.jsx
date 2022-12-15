import React from "react";
import Carousel from "react-bootstrap/Carousel";

const CarouselComponent = () => {
  return (
    <>
      <div style={{ display: "block", width: 1500, padding: 30 }}>
        <Carousel>
          <Carousel.Item interval={1500}>
            <img
              className="d-block w-100"
              src="https://img6.hkrtcdn.com/14609/bnr_1460845_o.png"

              alt="Subscribe"
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              className="d-block w-100"
              src="https://img1.hkrtcdn.com/21467/bnr_2146650_o.jpg"

              alt="Vitamin Range"
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1500}>
            <img
              className="d-block w-100"
              src="https://img9.hkrtcdn.com/20867/bnr_2086658_o.jpg"

              alt="Pro Check"
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1500}>
            <img
              className="d-block w-100"
              src="https://img3.hkrtcdn.com/21468/bnr_2146712_o.jpg"

              alt="MuscleBlaze"
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
};

export default CarouselComponent;
