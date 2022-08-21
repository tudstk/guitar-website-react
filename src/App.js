import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from './Components/navbar/Navbar';
import Login from './Components/login/Login';
import Cart from './Components/cart/Cart';
import WelcomeSection from './Components/welcome/WelcomeSection';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element = {
          <div className="App">
            <Navbar/>
            <WelcomeSection/>
          </div>
        }/>
        <Route path="/login" element={ <Login/> }/>
        <Route path="/cart" element={ <Cart/> }/>
      </Routes>
    </Router>
  );
}

export default App;
