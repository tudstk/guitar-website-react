import React from 'react';
import Navbar from '../navbar/Navbar';
import { useParams } from 'react-router';

const ProductDisplay = ({list}:any) => {
    const {title} = useParams();
    return (
        <>
            <Navbar/>
            <section className='bg-navbar-black min-h-screen'>
                    {list.filter((card:any) => card.title === title).map((card:any,index:any)=>
                    (
                        <div className='flex flex-row p-16 justify-center items-center pt-20'>
                            <div className='p-12 w-60  bg-navbar-black-2 rounded-md'>
                                <img src={card.img} alt=''/>
                            </div>
                            <div className='w-144 ml-20'>
                                <h1 className='text-slate-300 font-bold text-2xl'>{card.title}</h1>
                                <p className='text-slate-300/70 text-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ex asperiores expedita aut! Quas excepturi quaerat deserunt natus, id expedita itaque cumque dicta. Veniam facere neque, nihil tempore fuga repellat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ipsum maiores officia aliquam, repudiandae nobis, in hic ab tempora molestias voluptatem non! Qui numquam voluptas nulla, officia facere illo repellendus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid enim, eveniet unde aut id explicabo, laborum ex blanditiis quisquam molestias officia et placeat assumenda, velit excepturi aspernatur ut maiores fugiat.</p>
                            </div>
                        </div>
                    ))}
            </section>
        </>
    )
}

export default ProductDisplay;