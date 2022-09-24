import React from 'react';
import { Link } from 'react-router-dom';
// import SearchBar from '../search bar/SearchBar';
// import list from "../data2/Data2";

const MobileNavbar = () => {
    return(
        <>
            <div>
                <ul className='md:hidden mt-16 flex flex-row justify-center content-center text-slate-400 text-xs'>
                  <li className="m-2 opacity-70 transition duration-150 hover:opacity-100 cursor-pointer ease-in">
                      <Link to='/'>
                          HOME
                      </Link>
                  </li>
                  <li className="m-2 text-slate-500">|</li>
                  <li className=" m-2 opacity-70 transition duration-150 hover:opacity-100 cursor-pointer ease-in">
                      <Link to='/about'>
                          ABOUT  
                      </Link>
                  </li>
                  <li className="m-2 text-slate-500">|</li>
                  <li className="m-2 opacity-70 transition duration-150 hover:opacity-100 cursor-pointer ease-in">
                    CONTACT
                  </li>
                  <li className="m-2 text-slate-500">|</li>
                  <li className="m-2 opacity-70 transition duration-150 hover:opacity-100 cursor-pointer ease-in">
                    SUBSCRIBE
                  </li>
                </ul>
            </div>
            
        </>
    )
}

export default MobileNavbar;