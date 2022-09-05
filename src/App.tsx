import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from './Components/navbar/Navbar';
import Login from './Components/login/Login';
import SignUp from './Components/signup/SignUp';
import Cart from './Components/cart/Cart';
import WelcomeSection from './Components/welcome/WelcomeSection';
import About from './Components/about/About';
import Products from './Components/products/Products';
import React from 'react';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element = {
          <div className="App">
            <Navbar/>
            <WelcomeSection/>
            <Products/>
          </div>
        }/>
        <Route path="/login" element={ <Login/> }/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/cart" element={ <Cart/> }/>
        <Route path="/about" element={ <About/> }/>
      </Routes>
    </Router>
  );
}

export default App;
