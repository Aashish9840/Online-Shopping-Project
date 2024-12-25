import { createContext, useState } from "react";
import React from "react";
import all_product from "../../public/Assets/all_product";

export const all_Data = createContext(null);
export const cataitemContext = createContext(null);
export const Data = ({ children }) => {
  const [cataitem, setCataitem] = useState("");
  const itemData = { all_product };
  return (
    <all_Data.Provider value={itemData}>
      <cataitemContext.Provider value={{ cataitem, setCataitem }}>
        <div>{children}</div>
      </cataitemContext.Provider>
    </all_Data.Provider>
  );
};
