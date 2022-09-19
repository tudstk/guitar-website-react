import React, { useState } from "react";
import { Link } from "react-router-dom";

const Cards = ({item, handleClick}:any) => {
    const {title, price, img} = item;
    const [add, setAdd] = useState('Add to cart');

    return (
        <div>
            <div className="w-48 px-8 pt-12 pb-2 bg-navbar-black rounded-t-md">
            <Link to={`/products/${item.title}`}>
                <h3 className="mb-8 hover:underline underline-offset-2 decoration-1 decoration-slate-400 cursor-pointer">{title}</h3>
            </Link>
                <img src={img} alt=""/>
                <h4 className="pt-4">${price}</h4>
            </div>
            
                <button onClick={()=>handleClick(item)} className="w-full flex items-center justify-center p-0 h-12 bg-[#537da6] text-white hover:bg-[#84abd1] hover: cursor-pointer">
                    <h1 onClick={()=>setAdd('Added to cart')}>{add}</h1>
                </button>
           
        </div>
    )
}

export default Cards;