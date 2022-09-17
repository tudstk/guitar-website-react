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
      <article className=' bg-div-gray w-3/5 h-screen m-auto text-slate-300'>
        <h1 className='mt-8 font-bold text-xl'>Your Cart</h1>
        {cart.map((item:any) => (
          <div className="flex justify-between items-center mt-8 border-b-3 border-navbar-black pb-4" key={item.id}>
            <div className="flex items-center w-96">
              <img src={item.img} className='w-6' alt="" />
              <p className='font-bold ml-8'>{item.title}</p>
            </div>
            <div>
              <span className='mr-36 font-bold'>${item.price}</span>
            </div>
            <div>
              <button className='p-1.5 px-2.5 font-bold mr-2 bg-navbar-black rounded-sm hover:bg-navbar-black-2' onClick={() => handleChange(item, -1)}>-</button>
              <button className='py-2.5 px-1.5 font-bold mr-2'>{item.amount}</button>
              <button className='p-1.5 px-2 font-bold mr-2 bg-navbar-black rounded-sm hover:bg-navbar-black-2' onClick={() => handleChange(item, 1)}>+</button>
              <button className='ml-12 pr-8 text-red-300 hover:text-red-200' onClick={() => handleRemove(item.id)}>Remove</button>
            </div>
          </div>
        ))}
        <div className="mt-8 text-lg">
          <span>Total price of your cart:</span>
          <span className='font-bold'> ${price}</span>
        </div>
        <button className='w-60 h-12 mt-4 font-bold bg-blue-500 text-slate-200 rounded-lg hover:bg-blue-400'>
           Proceed your payment
        </button>
      </article>
    );
  };

export default Cart;