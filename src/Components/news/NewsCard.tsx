import React from "react";

const NewsCards = ({item, handleClick}:any) => {
    const {id, img, title, description, link} = item;
    return (
        <div>
            <div className="w-72 bg-div-gray rounded-md">
                <div className="h-36">
                    <img src={img} alt="" className="w-full h-full object-cover"/>
                </div>
                <h3 className="px-6 py-4">{title}</h3>
                <p className="text-sm text-slate-300 px-6 pb-4">{description}</p>
            </div>
            <button onClick={()=>handleClick(item)} className="w-full flex items-center justify-center p-0 h-12 bg-[#537da6] hover:hover:bg-[#84abd1] cursor-pointer">
                <a href={item.link} target="_blank" rel="noreferrer">Read more...</a>
            </button>
        </div>
    )
}

export default NewsCards;