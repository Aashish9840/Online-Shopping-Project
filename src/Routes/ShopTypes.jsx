import React, { useContext } from "react";
import { all_Data } from "../Store/Data";
import { DataItem } from "../components/DataItem";
import ".././index.css";

export const ShopTypes = () => {
  const { all_product } = useContext(all_Data);
  const men_product = all_product.filter((product) => {
    return product.category === "men";
  });

  return (
    <div className="men-core-container">
      <div className="upper">
        <img src="../Assets/banner_mens.png" alt="" />
      </div>
      <div className="messages">
        <p>Showing 1-12 Out of 36</p>
        <button>Sorted By</button>
      </div>
      <div className="women-popular-wrapper">
        {men_product.map((productitem) => (
          <DataItem key={productitem.id} itemdata={productitem} />
        ))}
      </div>
    </div>
  );
};
