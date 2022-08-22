import React from "react";
import Wp from './guitar-wp-2.jpg'

const WelcomeSection = () => {
    return(
        <>
            <div className='mt-14 md:mt-10 w-screen h-144 overflow-hidden'>
                <img src={ Wp } alt="wp" className='w-screen bg-cover'/>
            </div>
            {/* <div className="w-screen h-8 bg-black">
            </div> */}
        </>
    );
};

export default WelcomeSection;