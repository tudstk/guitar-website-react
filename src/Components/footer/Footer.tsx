import React from 'react';
import igIcon from './ig.png';
import fbIcon from './fb.png';

const Footer = () => {
    return(
        <section className='w-screen h-48 bg-footer-bg flex flex-col justify-center items-center text-slate-400'>
            <ul className='flex flex-row'>
                <li className='p-2 transition duration-150 hover:text-slate-300 cursor-pointer ease-in'>TERMS AND CONDITIONS</li>
                <li className='p-2'>/</li>
                <li className='p-2 transition duration-150 hover:text-slate-300 cursor-pointer ease-in'>PRIVACY POLICY</li>
                <li className='p-2'>/</li>
                <li className='p-2 transition duration-150 hover:text-slate-300 cursor-pointer ease-in'>SHIPPING COSTS AND DELIVERY TIME</li>
                <li className='p-2'>/</li>
                <li className='p-2 transition duration-150 hover:text-slate-300 cursor-pointer ease-in'>WARRANTY TERMS</li>
            </ul>
            <ul className='flex flex-row justify-between content-center mr-2'>
                <li className="m-5">
                    <img src={ igIcon } alt="igIcon" className="hidden md:block w-5 opacity-50 transition duration-150 hover:opacity-80 cursor-pointer ease-in"/>
                </li>
                <li className="m-5 ml-3">
                    <img src={ fbIcon } alt="fbIcon" className="hidden md:block w-5 opacity-50 transition duration-150 hover:opacity-80 cursor-pointer ease-in"/>
                </li>
            </ul>
        </section>
    )
}

export default Footer;