import React from "react";
import { Link, useNavigate } from "react-router-dom";
import JacksonJS227 from './img/JacksonJS227.png';
import IbanezSteveVai from './img/IbanezSteveVai.png';
import IbanezLagoonBurst from './img/IbanezLagoonBurst.png';
import JacksonJS327 from './img/JacksonJS327.png';

const Products = () => {
    return (
        <>
        <div>
            <div className='bg-div-gray text-white mt-14 md:mt-0 w-screen overflow-hidden font-body'>
                    <h1 className="font-sans text-2xl mt-10 opacity-70 mb-8">OUR PRODUCTS</h1>
                    {/* <p className="mx-8 mt-10 md:mx-60 my-20 text-xl opacity-70 text-left font-extralight tracking-wide">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi omnis libero dolores unde nulla quo accusamus consequatur ratione, alias voluptatem itaque neque cum accusantium dignissimos! Non quasi voluptates hic incidunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis corrupti quisquam in sunt libero nisi autem reiciendis molestias repellat pariatur doloremque dignissimos, ullam id sed totam, et esse ut eius! Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique praesentium voluptatibus obcaecati dolor at saepe aperiam itaque vel, veritatis ullam dolore iure delectus, reprehenderit eveniet explicabo sapiente repellendus. Quo, reiciendis.
                    </p> */}
                    <div className="flex items-center justify-center pb-16">
                    <div className="flex flex-col md:grid gap-8 grid-cols-4">
                        <div>
                            <div className="w-48 px-8 pt-12 pb-2 bg-navbar-black rounded-md">
                                <h3 className="mb-8">Jackson JS22-7 Dinky AH SB</h3>
                                <img src={JacksonJS227} alt="js22"/>
                                <h4 className="pt-4">$235</h4>
                            </div>
                            <div className="flex items-center justify-center p-0 h-12 bg-slate-500 hover:bg-slate-400 cursor-pointer">
                                Add to cart
                            </div>
                        </div>
                        <div>
                            <div className="w-48 px-8 pt-12 pb-2 bg-navbar-black rounded-md">
                                <h3 className="mb-8">Ibanez JEM7VP Steve Vai Signature</h3>
                                <img src={IbanezSteveVai} alt="js22"/>
                                <h4 className="pt-4">$499</h4>
                            </div>
                            <div className="flex items-center justify-center p-0 h-12 bg-slate-500 hover:bg-slate-400 cursor-pointer">
                                Add to cart
                            </div>
                        </div>
                        <div>
                            <div className="w-48 px-8 pt-12 pb-2 bg-navbar-black rounded-md">
                                <h3 className="mb-8">Ibanez Blue Lagoon Burst</h3>
                                <img src={IbanezLagoonBurst} alt="js22"/>
                                <h4 className="pt-4">$419</h4>
                            </div>
                            <div className="flex items-center justify-center p-0 h-12 bg-slate-500 hover:bg-slate-400 cursor-pointer">
                                Add to cart
                            </div>
                        </div>
                        <div>
                            <div className="w-48 px-8 pt-12 pb-2 bg-navbar-black rounded-md">
                                <h3 className="mb-8">Jackson JS32-7 Dinky AR SW</h3>
                                <img src={JacksonJS327} alt="js22"/>
                                <h4 className="pt-4">$235</h4>
                            </div>
                            <div className="flex items-center justify-center p-0 h-12 bg-slate-500 hover:bg-slate-400 cursor-pointer">
                                Add to cart
                            </div>
                        </div>
                        <div>
                            <div className="w-48 px-8 pt-12 pb-2 bg-navbar-black rounded-md">
                                <h3 className="mb-8">Jackson JS227</h3>
                                <img src={JacksonJS227} alt="js22"/>
                                <h4 className="pt-4">$235</h4>
                            </div>
                            <div className="flex items-center justify-center p-0 h-12 bg-slate-500 hover:bg-slate-400 cursor-pointer">
                                Add to cart
                            </div>
                        </div>
                        <div>
                            <div className="w-48 px-8 pt-12 pb-2 bg-navbar-black rounded-md">
                                <h3 className="mb-8">Jackson JS227</h3>
                                <img src={JacksonJS227} alt="js22"/>
                                <h4 className="pt-4">$235</h4>
                            </div>
                            <div className="flex items-center justify-center p-0 h-12 bg-slate-500 hover:bg-slate-400 cursor-pointer">
                                Add to cart
                            </div>
                        </div>
                        <div>
                            <div className="w-48 px-8 pt-12 pb-2 bg-navbar-black rounded-md">
                                <h3 className="mb-8">Jackson JS227</h3>
                                <img src={JacksonJS227} alt="js22"/>
                                <h4 className="pt-4">$235</h4>
                            </div>
                            <div className="flex items-center justify-center p-0 h-12 bg-slate-500 hover:bg-slate-400 cursor-pointer">
                                Add to cart
                            </div>
                        </div>
                        <div>
                            <div className="w-48 px-8 pt-12 pb-2 bg-navbar-black rounded-md">
                                <h3 className="mb-8">Jackson JS227</h3>
                                <img src={JacksonJS227} alt="js22"/>
                                <h4 className="pt-4">$235</h4>
                            </div>
                            <div className="flex items-center justify-center p-0 h-12 bg-slate-500 hover:bg-slate-400 cursor-pointer">
                                Add to cart
                            </div>
                        </div>
                    </div>
                    </div>
                    
            </div>
        </div>
        </>
    );
};

export default Products;