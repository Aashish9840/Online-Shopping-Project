import React, { useContext } from "react";
import new_collections from "../../public/Assets/new_collections";
import { all_Data } from "../Store/Data";
import { DataItem } from "./DataItem";

export const NewCollection = () => {
  return (
    <div className="main-women-container">
      <div className="heading">
        <h1>NEW COLLECTION</h1>
        <hr />
      </div>
      <div className="women-popular-wrapper">
        {new_collections.map((productitem) => (
          <DataItem key={productitem.id} itemdata={productitem} />
        ))}
      </div>
    </div>
  );
};
