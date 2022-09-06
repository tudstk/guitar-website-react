import React from "react";
import { Link } from 'react-router-dom';

import accountIcon from './account-icon.png';
import shoppingCartIcon from './shopping-cart-icon.png';
import igIcon from './ig.png';
import fbIcon from './fb.png';

const Navbar = () => {
    return(
        <div className='flex justify-between w-screen bg-navbar-black text-white sticky top-0 z-50 font-body text-sm'>
            {/* <p className='m-5 ml-6 md:ml-32'>
                <h1 className="opacity-80">Guitar Shop</h1>
            </p> */}
            <ul className='flex flex-row justify-between content-center mr-2 md:ml-32'>
                <li>
                    <h1 className="opacity-100 text-slate-400 m-5">Logo</h1>
                </li>
                <li className="hidden md:block m-5 ml-20 opacity-70 transition duration-150 hover:opacity-100 cursor-pointer ease-in">
                    <Link to='/'>
                        HOME
                    </Link>
                </li>
                <li className="hidden md:block m-5 opacity-70 transition duration-150 hover:opacity-100 cursor-pointer ease-in">
                    <Link to='/about'>
                        ABOUT  
                    </Link>
                </li>
                <li className="hidden md:block m-5 opacity-70 transition duration-150 hover:opacity-100 cursor-pointer ease-in">CONTACT</li>
            </ul>
            <input placeholder="Search..." className="hidden md:block w-80 h-8 text-slate-900 opacity-90 mt-4 p-4 pl-6 rounded-3xl focus:outline-0 focus:opacity-100">
            </input>
            <ul className='flex flex-row justify-between content-center mr-2 md:mr-32'>
                
                <li className="m-5">
                    <img src={ igIcon } alt="igIcon" className="hidden md:block w-5 opacity-70 transition duration-150 hover:opacity-100 cursor-pointer ease-in"/>
                </li>
                <li className="m-5 ml-3">
                    <img src={ fbIcon } alt="fbIcon" className="hidden md:block w-5 opacity-70 transition duration-150 hover:opacity-100 cursor-pointer ease-in"/>
                </li>
                <li className="m-5">
                    <Link to="/cart">
                        <img src={ shoppingCartIcon } alt="shoppingCartIcon" className="w-5 opacity-70 transition duration-150 hover:opacity-100 cursor-pointer ease-in"/>
                    </Link>
                </li>
                <li className='m-5'>
                    <Link to='/login'>
                        <img src={ accountIcon } alt="accountIcon" className="w-5 opacity-70 transition duration-150 hover:opacity-100 cursor-pointer ease-in"/>
                    </Link>
                </li>
            </ul>
      </div>
    )
}

export default Navbar;