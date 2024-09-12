import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { all_Data } from "../Store/Data";
import { DataItem } from "../components/DataItem";
import { CartSliceAction } from "../Store/CartSlice";

export const Product = () => {
  const productItem = useSelector((store) => store.productSelect);
  const { all_product } = useContext(all_Data);

  if (!productItem) {
    return (
      <div className="Null-product">Loading... Please select a product.</div>
    );
  }

  const women_product = all_product.filter((product) => {
    return product.category === "women";
  });

  const kid_product = all_product.filter((product) => {
    return product.category === "kid";
  });

  const men_product = all_product.filter((product) => {
    return product.category === "men";
  });

  // cartitems state management

  const CartItem = useSelector((store) => store.CartItemSlice);
  const dispatch = useDispatch();

  const handleCartItems = (item) => {
    dispatch(CartSliceAction.addToCart(item));
  };

  return (
    <div className="core-wrapper">
      <div className="main-product-cart">
        <div className="breadcrum">
          <p>
            home <img src=".././Assets/breadcrum_arrow.png" alt="" />
            {productItem.category}
            <img src=".././Assets/breadcrum_arrow.png" alt="" /> product
            <img src=".././Assets/breadcrum_arrow.png" alt="" />
            {productItem.name}
          </p>
        </div>
        <div className="product-cart-selection">
          <div className="product-cart-left">
            <div className="left-imgage">
              <img src={productItem.image} alt="" />
              <img src={productItem.image} alt="" />
              <img src={productItem.image} alt="" />
              <img src={productItem.image} alt="" />
            </div>
            <div className="right-image">
              <img src={productItem.image} alt="" />
            </div>
          </div>

          <div className="product-cart-right">
            <div className="title-name">
              <h1>{productItem.name}</h1>
              <h2>
                ${productItem.new_price} <span>${productItem.old_price}</span>
              </h2>
              <p>
                A light wight comfortable product currently launced with exterme
                quallity product. It is suitable to wear in summer as well as
                the winter.
              </p>
            </div>
            <div className="select-size">
              <h1>Select size</h1>
              <div className="size-list">
                <p>S</p>
                <p>M</p>
                <p>L</p>
                <p>XL</p>
                <p>XXL</p>
              </div>
              <button onClick={() => handleCartItems(productItem)}>
                Add To Cart
              </button>
            </div>
            <div className="bottom-details">
              <p>
                Catagory:
                <span>{productItem.category}, T-shirt, Popular Now</span>
              </p>
              <p>
                Tags: <span>Modern, Latest, Popular</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="men-core-container">
        <div className="messages">
          <p>Related Products:</p>
        </div>

        <div className="women-popular-wrapper">
          {productItem.category === "men"
            ? men_product.map((productitem) => (
                <DataItem key={productitem.id} itemdata={productitem} />
              ))
            : productItem.category === "women"
            ? women_product.map((productitem) => (
                <DataItem key={productitem.id} itemdata={productitem} />
              ))
            : kid_product.map((productitem) => (
                <DataItem key={productitem.id} itemdata={productitem} />
              ))}
        </div>
      </div>
    </div>
  );
};
