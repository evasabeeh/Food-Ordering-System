import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar"; 
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import PlaceOrder from "./pages/PlaceOrder";
import StoreContextProvider from "./StoreContext";
import Footer from "./components/Footer";
import Verify from "./pages/Verify";
import MyOrders from "./pages/MyOrders";
import { LoginPopup } from "./components/LoginPopup/LoginPopup";

const App = () => {

  const [showLogin,setShowLogin] = useState(false);

  return (
    <BrowserRouter>
      <StoreContextProvider>
        {showLogin ? <LoginPopup setShowLogin={setShowLogin}/> : <></>}
        <div className="app">
          <Navbar setShowLogin={setShowLogin}/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/order" element={<PlaceOrder />} />
            <Route path="/verify" element={<Verify/>} />
            <Route path="/myorders" element={<MyOrders/>} />
          </Routes>
        </div>
        <Footer />
      </StoreContextProvider>
    </BrowserRouter>
  );
};

export default App;
