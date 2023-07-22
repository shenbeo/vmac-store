import React from "react";
import { CartProvider } from "react-use-cart";
const Router = React.lazy(() => import("../Router/Router"));

export default function Home() {
  return (
    <div>
      <CartProvider>
        <Router />
      </CartProvider>
    </div>
  );
}
