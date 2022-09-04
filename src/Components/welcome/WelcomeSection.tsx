import React from "react";
import Wp from './guitar-wp-2.jpg'

const WelcomeSection = () => {
    return(
        <>
        <div className="h-32 md:h-144">
            <div className='mt-16 md:mt-10 w-screen h-144 overflow-hidden'>
                <img src={ Wp } alt="wp" />
            </div>
        </div>
            {/* <div className="w-screen h-8 bg-black">
            </div> */}
        </>
    );
};

export default WelcomeSection;