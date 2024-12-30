import React from "react";
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";
import {Route, Routes } from "react-router-dom";
import Add from "./pages/Add";
import List from "./pages/List";
import Orders from "./pages/Orders";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const App = () => {

  const url = 'http://localhost:4000';              // backend url

  return (
    <div>
      <ToastContainer/>
      <Navbar />
      <hr />
      <div className="app-content bg-primary">
        <SideBar />
        <Routes>
          <Route path="/add" element={<Add url={url}/>}/>
          <Route path="/list" element={<List url={url}/>}/>
          <Route path="/orders" element={<Orders url={url}/>}/>
        </Routes>
      </div>
    </div>
  );
};

export default App;
