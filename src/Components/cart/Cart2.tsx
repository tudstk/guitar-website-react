import React, { useEffect, useState } from 'react'

const Cart = ({ cart, setCart, handleChange }:any) => {
    const [price, setPrice] = useState(0);
  
    const handleRemove = (id:any) => {
      const arr = cart.filter((item:any) => item.id !== id);
      setCart(arr);
      handlePrice();
    };
  
    const handlePrice = () => {
      let ans = 0;
      cart.map((item:any) => (ans += item.amount * item.price));
      setPrice(ans);
    };
  
    useEffect(() => {
      handlePrice();
    });
  
    return (
      <article className=' bg-div-gray w-3/5 m-auto text-slate-300 md:h-screen'>
        <h1 className='mt-8 font-bold text-xl'>Your Cart</h1>
        {cart.map((item:any) => (
          <div className="flex justify-between items-center flex-col mt-8 border-b-3 border-navbar-black pb-4 md:flex-row" key={item.id}>
            <div className="flex items-center flex-col w-96 md:flex-row">
              <img src={item.img} className='w-6' alt="" />
              <p className='ml-0 mt-4 font-bold md:ml-8 md:mt-0'>{item.title}</p>
            </div>
            <div>
              <span className='mr-0 font-bold md:mr-36'>${item.price}</span>
            </div>
            <div className='mt-4 md:mt-0'>
              <button className='p-1.5 px-2.5 font-bold mr-2 bg-navbar-black rounded-sm hover:bg-navbar-black-2' onClick={() => handleChange(item, -1)}>-</button>
              <button className='py-2.5 px-1.5 font-bold '>{item.amount}</button>
              <button className='p-1.5 px-2 font-bold ml-2 bg-navbar-black rounded-sm hover:bg-navbar-black-2' onClick={() => handleChange(item, 1)}>+</button>
            </div>
            <button className='ml-0 pr-0 mt-2 text-red-300 hover:text-red-200 md:ml-12 md:pr-8 md:mt-0' onClick={() => handleRemove(item.id)}>Remove</button>
          </div>
        ))}
        <div className="mt-8 text-lg">
          <span>Total price of your cart:</span>
          <span className='font-bold'> ${price}</span>
        </div>
        <button 
        className='w-60 h-12 mt-4 font-bold bg-blue-500 text-slate-200 rounded-lg hover:bg-blue-400 disabled:bg-neutral-400'
        disabled={price===0}>
           Proceed your payment
        </button>
      </article>
    );
  };

export default Cart;