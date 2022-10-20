import React from "react";
import Carousel from "react-bootstrap/Carousel";
import imageBrand from '../Assets/Brand-Images/345-1200x900_9479.jpg'
import imageBrand2 from '../Assets/Brand-Images/tumblr_o05v3eZmyT1ugn1wu_og_1280.png'

const BrandCarousel = () => {
  return (
    <div className="my-4">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={imageBrand}
            alt="First slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={imageBrand2}
            alt="Second slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default BrandCarousel;
