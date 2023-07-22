import React from "react";
import Slider from "../components/Slider/Slider";
import Policy from "../components/Policy/Policy";
import News from "../components/News/News";
import ProductsSale from "../components/ProductsHome/ProductsSale";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ProductsHome from "../components/ProductsHome/ProductsHome";
import { useState, useEffect } from "react";
import ItemList from "../components/Items/ItemList";
import RotateLoader from "react-spinners/RotateLoader";

export default function HomePage() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <div>
      {loading ? (
        <div className="flex  h-[100vh] items-center justify-center">
          <RotateLoader
            color="#001e2b"
            height={8}
            width={400}
            loading={loading}
          />
        </div>
      ) : (
        <div className=" bg-white">
          <Header />
          <Slider />
          <ItemList />
          <ProductsSale />
          <ProductsHome />
          <News />
          <Policy />
          <Footer />
        </div>
      )}
    </div>
  );
}
