import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Float_btn from "../components/Loader/Float_btn";
// import Login from "../pages/Login";
// import CartPage from "../pages/CartPage";
// import ProductsPage from "../pages/ProductsPage";
// import Signup from "../pages/Signup";
// import ProductsDetails from "../pages/ProductsDetails";
// import HomePage from "../pages/HomePage";

const Login = React.lazy(() => import("../pages/Login"));
const CartPage = React.lazy(() => import("../pages/CartPage"));
const ProductsPage = React.lazy(() => import("../pages/ProductsPage"));
const Signup = React.lazy(() => import("../pages/Signup"));
const ProductsDetails = React.lazy(() => import("../pages/ProductsDetails"));
const HomePage = React.lazy(() => import("../pages/HomePage"));

export default function Router() {
  return (
    <div>
      <Suspense fallback={<p className=" text-sm m-2">Loading...</p>}>
        {/* <Float_btn /> */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cartPage" element={<CartPage />} />
          <Route path="/productsPage" element={<ProductsPage />} />
          <Route
            path="/productsPage/:productId"
            element={<ProductsDetails />}
          />
          <Route
            path="/productsHome/:productId"
            element={<ProductsDetails />}
          />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Suspense>
    </div>
  );
}
