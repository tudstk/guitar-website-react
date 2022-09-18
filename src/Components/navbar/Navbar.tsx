import React from "react";
import { Link } from 'react-router-dom';

import accountIcon from './account-icon.png';
import shoppingCartIcon from './shopping-cart-icon.png';
import igIcon from './ig.png';
import fbIcon from './fb.png';

const Navbar = ({setShow, size}:any) => {
    return(
        <div className='flex justify-between items-center w-screen bg-navbar-black text-white fixed top-0 z-50 font-body text-xs'>
            {/* <p className='m-5 ml-6 md:ml-32'>
                <h1 className="opacity-80">Guitar Shop</h1>
            </p> */}
            <ul className='flex flex-row justify-between content-center mr-2 md:ml-32'>
                <li>
                    <h1 className="opacity-100 text-slate-400 m-5" onClick={() => setShow(true)}>Logo</h1>
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
            <input placeholder="Search..." className="hidden md:block w-80 h-8 text-slate-900 opacity-90 p-4 pl-6 rounded-3xl focus:outline-0 focus:opacity-100">
            </input>
            <ul className='flex flex-row justify-between content-center mr-2 md:mr-32'>
                
                <li className="m-5">
                    <img src={ igIcon } alt="igIcon" className="hidden md:block w-[1.125rem] opacity-70 transition duration-150 hover:opacity-100 cursor-pointer ease-in"/>
                </li>
                <li className="m-5 ml-3">
                    <img src={ fbIcon } alt="fbIcon" className="hidden md:block w-[1.125rem] opacity-70 transition duration-150 hover:opacity-100 cursor-pointer ease-in"/>
                </li>
                <li className="m-5 flex flex-row">
                    {/* <Link to="/cart"> */}
                        <img src={ shoppingCartIcon } alt="shoppingCartIcon" className="w-[1.125rem] opacity-70 transition duration-150 hover:opacity-100 cursor-pointer ease-in" onClick={() => setShow(false)}/>
                    {/* </Link> */}
                    <span className="pl-1 text-blue-300">{size}</span>
                </li>
                <li className='m-5'>
                    <Link to='/login'>
                        <img src={ accountIcon } alt="accountIcon" className="w-[1.125rem] opacity-70 transition duration-150 hover:opacity-100 cursor-pointer ease-in"/>
                    </Link>
                </li>
            </ul>
      </div>
    )
}

export default Navbar;