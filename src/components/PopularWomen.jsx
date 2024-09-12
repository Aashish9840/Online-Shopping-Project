import React from "react";
import "../index.css";
import data_product from "../../public/Assets/data";
import { DataItem } from "./DataItem";
export const PopularWomen = () => {
  return (
    <div className="main-women-container">
      <div className="heading">
        <h1>POPULAR IN WOMEN</h1>
        <hr />
      </div>
      <div className="women-popular-wrapper">
        {data_product.map((productitem) => (
          <DataItem key={productitem.id} itemdata={productitem} />
        ))}
      </div>
    </div>
  );
};
