import React from "react";
import { itemList } from "../../Fake_api/DataApi";
import Items from "./Items";

export default function ItemList  ()  {
  return (
    <div className="grid grid-cols-3  mt-1 gap-1 ">
      {itemList.map((listItem, index) => (
        <Items item={listItem} key={index} />
      ))}
    </div>
  );
};


