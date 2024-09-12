import { createContext } from "react";
import React from "react";
import all_product from "../../public/Assets/all_product";

export const all_Data = createContext(null);

export const Data = ({ children }) => {
  const itemData = { all_product };
  return (
    <all_Data.Provider value={itemData}>
      <div>{children}</div>
    </all_Data.Provider>
  );
};
