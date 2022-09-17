import React from 'react';
import igIcon from './ig.png';
import fbIcon from './fb.png';

const Footer = () => {
    return(
        <section className='w-screen h-64 text-sm bg-footer-bg flex flex-col justify-center items-center text-slate-400 md:h-48'>
            <ul className='flex flex-col md:flex-row'>
                <li className='p-2 transition duration-150 hover:text-slate-300 cursor-pointer ease-in'>TERMS AND CONDITIONS</li>
                <li className='p-2 hidden md:block'>/</li>
                <li className='p-2 transition duration-150 hover:text-slate-300 cursor-pointer ease-in'>PRIVACY POLICY</li>
                <li className='p-2 hidden md:block'>/</li>
                <li className='p-2 transition duration-150 hover:text-slate-300 cursor-pointer ease-in'>SHIPPING COSTS AND DELIVERY TIME</li>
                <li className='p-2 hidden md:block'>/</li>
                <li className='p-2 transition duration-150 hover:text-slate-300 cursor-pointer ease-in'>WARRANTY TERMS</li>
            </ul>
            <ul className='flex flex-row justify-between content-center mr-2'>
                <li className="m-5">
                    <img src={ igIcon } alt="igIcon" className="md:block w-5 opacity-50 transition duration-150 hover:opacity-80 cursor-pointer ease-in"/>
                </li>
                <li className="m-5">
                    <img src={ fbIcon } alt="fbIcon" className="md:block w-5 opacity-50 transition duration-150 hover:opacity-80 cursor-pointer ease-in"/>
                </li>
            </ul>
            <h6 className='text-xs opacity-70'>Copyright ©  2022 Tudor Stroescu</h6>
        </section>
    )
}

export default Footer;