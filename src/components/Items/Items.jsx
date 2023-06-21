import React, { useState } from "react";
import { Link } from "react-router-dom";



export default function Items ({ item }) {
  const [hoverEffects, setHoverEffects] = useState(" opacity-0");

// OPACITY
  function handleHoverEnter() {
    setHoverEffects(" opacity-1 bg-[rgba(0,0,0,0.3)]");
  }
  function handleHoverExit() {
    setHoverEffects(" opacity-0");
  }
//END OPACITY

  return (
    <div className="">
      <Link to="/productsPage">
        <div
          className="flex relative  overflow-hidden  items-center justify-center cursor-pointer w-[100%]"
          onMouseEnter={handleHoverEnter}
          onMouseLeave={handleHoverExit}
        >
          <img
            className=" object-cover  md:h-[220px] h-[100px] w-[100%]"
            src={item.img}
            alt="item-img"
          />
          <div
            className={
              `flex p-1 items-center justify-center absolute w-[100%] transition-all h-[100%] ease-in md:duration-500 duration-400` +
              hoverEffects
            }
          >
            <h1 className="md:text-xl text-[16px] text-white font-bold tracking-widest">
              {/* {item.title} */}
            </h1>
          </div>
        </div>
      </Link>
    </div>
  );
};


