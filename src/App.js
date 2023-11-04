import React from "react";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import CartPage from "./components/CartPage";

import "./style.css"
import { Route, Routes } from "react-router-dom";

const App = () => {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
  

    </div>
  )
}

export default App;
