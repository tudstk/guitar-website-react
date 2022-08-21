import React from "react";
import Wp from './guitar-wp.jpg'

const WelcomeSection = () => {
    return(
        <div className='w-screen'>
              <img src={ Wp } alt="wp" className='h-fit'/>
        </div>
    );
};

export default WelcomeSection;