import React from 'react'
import pic1 from "../../../assets/images/pic1.jpg";
import pic2 from "../../../assets/images/pic2.jpg";
import pic3 from "../../../assets/images/pic3.jpg";
import Carousel from 'react-bootstrap/Carousel';

export default function Slider() {
  return (
        <Carousel indicators={false} className=''>
            <Carousel.Item>
            <img
                className="slider-image img-fluid w-100"
                src={pic1}
                alt="First slide"
            />
            </Carousel.Item>
            <Carousel.Item>
            <img
                className="img-fluid slider-image w-100"
                src={pic2}
                alt="Second slide"
            />
            </Carousel.Item>
            <Carousel.Item>
            <img
                className="d-block slider-image w-100"
                src={pic3}
                alt="Third slide"
            />
            </Carousel.Item>
        </Carousel>
    )
}
