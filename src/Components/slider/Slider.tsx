import React, { Component } from "react";
import Slider from "react-slick";
import slide1 from './pic3.jpg';
import slide2 from './guitar-wp.jpg';
import slide3 from './pic2.jpg';

const SimpleSlider = () => {
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            speed:500,
            autoplaySpeed: 4000,
            cssEase: "linear",
            appendDots: (dots:any) => (
                <div
                  style={{
                    backgroundColor: "#171717",
                    padding: "7px",
                  }}
                >
                  <ul style={{ margin: "0px"}}> {dots} 
                  </ul>
                </div>
              ),
        };
    return (
      <div>
        <Slider {...settings}>
          <div className="h-172 text-white">
            <img src={slide1} className='w-full h-full object-cover' alt=''/>
          </div>
          <div className="h-172 text-white">
            <img src={slide2} className='w-full h-full object-cover' alt=''/>
          </div>
          <div className="h-172 text-white">
            <img src={slide3} className='w-full h-full object-cover' alt=''/>
          </div>
        </Slider>
      </div>
    );
}

export default SimpleSlider;