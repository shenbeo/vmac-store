import React from "react";
import { itemList } from "../../Fake_api/DataApi";
import Items from "./Items";

const ItemList = () => {
  return (
    <div className="grid grid-cols-3 ">
      {itemList.map((listItem, index) => (
        <Items item={listItem} key={index} />
      ))}
    </div>
  );
};

export default ItemList;
