import React from "react";

const Cards = ({item, handleClick}:any) => {
    const {id, title, price, img, amount} = item;
    return (
        <div>
            <div className="w-48 px-8 pt-12 pb-2 bg-navbar-black rounded-md">
                <h3 className="mb-8">{title}</h3>
                <img src={img} alt=""/>
                <h4 className="pt-4">${price}</h4>
            </div>
            <button onClick={()=>handleClick(item)} className="w-full flex items-center justify-center p-0 h-12 bg-slate-500 hover:bg-slate-400 cursor-pointer">
                Add to cart
            </button>
        </div>
    )
}

export default Cards;