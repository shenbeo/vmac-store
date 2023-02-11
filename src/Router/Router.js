import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import CartPage from "../pages/CartPage";
import ProductsPage from "../pages/ProductsPage";
import Signup from "../pages/Signup";
import ProductsDetails from "../pages/ProductsDetails";
import HomePage from "../pages/HomePage";
const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cartPage" element={<CartPage/>} />
        <Route path="/productsPage" element={<ProductsPage />} />
        <Route path="/productsPage/:productId" element={<ProductsDetails/>} />
        <Route path="/productsHome/:productId" element={<ProductsDetails/>} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
};

export default Router;
