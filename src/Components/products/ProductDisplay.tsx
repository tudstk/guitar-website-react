import React, { useState } from 'react';
import Navbar from '../navbar/Navbar';
import { useParams } from 'react-router';

const ProductDisplay = ({ list }:any) => {
    const { title } = useParams();
    return (
        <>
            <Navbar/>
            <section className='bg-div-gray min-h-screen'>
                    {list.filter((card:any) => card.title === title).map((card:any,index:any)=>
                    (
                        <div className='flex flex-row p-16 justify-center items-center pt-20'>
                            <div className='p-12 w-60  bg-navbar-black rounded-md'>
                                <img src={ card.img } alt=''/>
                            </div>
                            <div className='w-144 ml-20'>
                                <h1 className='text-slate-300 font-bold text-3xl'>{ card.title }</h1>
                                <h3 className='text-md mt-4 font-bold text-slate-300/90'>Description:</h3>
                                <p className='text-slate-300/50 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ex asperiores expedita aut! Quas excepturi quaerat deserunt natus, id expedita itaque cumque dicta. Veniam facere neque, nihil tempore fuga repellat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ipsum maiores officia aliquam, repudiandae nobis, in hic ab tempora molestias voluptatem non! Qui numquam voluptas nulla, officia facere illo repellendus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid enim, eveniet unde aut id explicabo, laborum ex blanditiis quisquam molestias officia et placeat assumenda, velit excepturi aspernatur ut maiores fugiat.
                                </p>
                                <div>
                                    <h3 className='text-md mt-4 font-bold text-slate-300/90 py-1'>Specs:</h3>
                                    <div className='text-sm'>
                                        <span  className='text-slate-300/70 font-bold'>Brand: </span>
                                        <span className='text-slate-300 '>{card.specs.brand}</span>
                                    </div>
                                    <div className='text-sm'>
                                        <span  className='text-slate-300/70 font-bold'>Number of strings: </span>
                                        <span className='text-slate-300 '>{card.specs.stringNumber}</span>
                                    </div>
                                    <div className='text-sm'>
                                        <span  className='text-slate-300/70 font-bold'>Body: </span>
                                        <span className='text-slate-300 '>{card.specs.body}</span>
                                    </div>
                                    <div className='text-sm'>
                                        <span  className='text-slate-300/70 font-bold'>Fretboard: </span>
                                        <span className='text-slate-300 '>{card.specs.fretboard}</span>
                                    </div>
                                    <div className='text-sm'>
                                        <span  className='text-slate-300/70 font-bold'>Frets: </span>
                                        <span className='text-slate-300 '>{card.specs.frets}</span>
                                    </div>
                                    <div className='text-sm'>
                                        <span  className='text-slate-300/70 font-bold'>Number of frets: </span>
                                        <span className='text-slate-300 '>{card.specs.fretNumber}</span>
                                    </div>
                                    <div className='text-sm'>
                                        <span  className='text-slate-300/70 font-bold'>Nut width: </span>
                                        <span className='text-slate-300 '>{card.specs.nutWidth}</span>
                                    </div>
                                    <div className='text-sm'>
                                        <span  className='text-slate-300/70 font-bold'>Scale: </span>
                                        <span className='text-slate-300 '>{card.specs.scale}</span>
                                    </div>
                                    <div className='text-sm'>
                                        <span  className='text-slate-300/70 font-bold'>Pickups: </span>
                                        <span className='text-slate-300 '>{card.specs.pickups}</span>
                                    </div>
                                    <div className='text-sm'>
                                        <span  className='text-slate-300/70 font-bold'>Switch: </span>
                                        <span className='text-slate-300 '>{card.specs.switch}</span>
                                    </div>
                                    <div className='text-sm'>
                                        <span  className='text-slate-300/70 font-bold'>Colour: </span>
                                        <span className='text-slate-300 '>{card.specs.colour}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
            </section>
        </>
    )
}

export default ProductDisplay;