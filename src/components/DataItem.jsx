import React, { useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { productSelectAction } from "../Store/SelecProductSlice";
import { cataitemContext } from "../Store/Data";

export const DataItem = ({ itemdata }) => {
  const { setCataitem } = useContext(cataitemContext);
  const selectedProduct = useSelector((store) => store.productSelect);
  const dispatch = useDispatch();
  const handleProductSelect = (allitems) => {
    dispatch(productSelectAction.selectProduct(allitems));
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth", // 'smooth' or 'auto'
    });
    setCataitem(itemdata.category);
    console.log("clicked item", itemdata.category);
  };
  return (
    <div className="women-popular">
      <Link to="/product">
        <img
          onClick={() => handleProductSelect(itemdata)}
          className="women-popular-image"
          src={itemdata.image}
          alt=""
        />
      </Link>
      <p>{itemdata.name}</p>
      <h4>
        ${itemdata.new_price} <span> ${itemdata.old_price}</span>
      </h4>
    </div>
  );
};
