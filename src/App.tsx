import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import Navbar from './Components/navbar/Navbar';
import Login from './Components/login/Login';
import SignUp from './Components/signup/SignUp';
import Cart from './Components/cart/Cart2';
import WelcomeSection from './Components/welcome/WelcomeSection';
import About from './Components/about/About';
import Address from './Components/address/Address';
import Products2 from './Components/products/Products2';
import Footer from './Components/footer/Footer';
import News from './Components/news/News';
import React from 'react';
import SimpleSlider from './Components/slider/Slider';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function App() {

  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([] as any);
    const handleClick = (item:any) => {
        // if (cart.indexOf(item) !== -1) return;
        setCart([...cart, item]);
        console.log(cart);
  };

  const handleChange = (item:any, d:any) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element = {
          <div className="App">
            <Navbar setShow={setShow} size={cart.length}/>
            {show ? <SimpleSlider/> : null}
            {/* {show ? <WelcomeSection/> : null} */}
            {show ? (<Products2 handleClick={handleClick}/>) : (<Cart cart={cart} setCart={setCart} handleChange={handleChange}/>) }
            {show ? <News/> : null}
            {show ? <Footer/> : null}
          </div>
        }/>
        <Route path="/login" element={ <Login/> }/>
        <Route path="/signup" element={ <SignUp/> }/>
        <Route path="/address" element={ <Address/> }/>
        {/* <Route path="/cart" element={ <Cart/> }/> */}
        <Route path="/about" element={ <About/> }/>
      </Routes>
    </Router>
  );
}

export default App;
