import React from "react";
import { CartProvider } from "react-use-cart";
import Router from "../Router/Router";

const Home = () => {
  return (
    <div>
      <CartProvider>
        <Router />
      </CartProvider>
    </div>
  );
};

export default Home;
