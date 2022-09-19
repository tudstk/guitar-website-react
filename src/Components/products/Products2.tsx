import React from "react";
import list from "../../data/Data";
import Cards from "./Card";

const Products2 = ({handleClick}:any) => {
    return (
        <section className='bg-div-gray text-white mt-14 md:mt-0 w-screen overflow-hidden font-body'>
            <h1 className="font-sans italic text-3xl mt-10 opacity-70 mb-8">Our latest products</h1>
            <div className="flex items-center justify-center pb-16">
                <div className="flex flex-col md:grid gap-8 grid-cols-4">
                {
                    list.map((item) => 
                    <Cards list={list} key={item.id} item={item} handleClick={handleClick}/>)
                }
                </div>
            </div>
        </section>
    )
}

export default Products2;