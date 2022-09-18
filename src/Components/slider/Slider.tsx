import React, { Component } from "react";
import Slider from "react-slick";
import slide1 from './V16Vinter.jpg';
import slide2 from './Zgkis6lA.jpeg';
import slide3 from './Solar-banner-A1-6ETCB.jpg';
import slide4 from './pic3.jpg';
import slide5 from './Solar-banner-all_new_batch_may18.jpg';
import { Link } from "react-router-dom";
import MobileNavbar from "../navbar/MobileNavbar";

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
          <MobileNavbar/>
          <div className="mt-2">
            <Slider {...settings}>
              <div className="h-40 text-white md:h-144">
                <img src={slide1} className='w-full h-full object-cover' alt=''/>
              </div>
              <div className="h-40 text-white md:h-144">
                <img src={slide2} className='w-full h-full object-cover' alt=''/>
              </div>
              <div className="h-40 text-white md:h-144">
                <img src={slide3} className='w-full h-full object-cover' alt=''/>
              </div>
              <div className="h-40 text-white md:h-144">
                <img src={slide4} className='w-full h-full object-cover' alt=''/>
              </div>
              <div className="h-40 text-white md:h-144">
                <img src={slide5} className='w-full h-full object-cover' alt=''/>
              </div>
            </Slider>
          </div>
      </div>
    );
}

export default SimpleSlider;