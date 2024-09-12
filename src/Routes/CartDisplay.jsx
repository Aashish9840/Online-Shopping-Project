import React from "react";
import "../index.css";
import { useDispatch, useSelector } from "react-redux";
import { CartSliceAction } from "../Store/CartSlice";

export const CartDisplay = () => {
  const CartData = useSelector((store) => store.CartItemSlice);
  const dispatch = useDispatch();

  const handleRemove = (item) => {
    dispatch(CartSliceAction.removeFromCart(item));
  };
  let subTotal = 0;
  CartData.forEach((item) => {
    if (item.quantity > 0) {
      subTotal = subTotal + item.quantity * item.new_price;
    } else {
      subTotal = subTotal + item.quantity;
    }
  });
  const fee = 100;
  const Total = subTotal + fee;
  return (
    <div className="main-cart-show">
      <div className="cart-item-container">
        <div className="cart-iteam-heading">
          <p>Products</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>remove</p>
        </div>
        <hr />
        <div className="wrapper-cart-selected-items">
          {CartData.map((Cart) => (
            <div className="wrapper-cart-selected" key={Cart.id}>
              <div className="cart-iteam-heading extra-class">
                <img src={Cart.image} alt="" />
                <p>{Cart.name}</p>
                <p>{Cart.new_price}</p>
                <p>{Cart.quantity}</p>
                <p>{Cart.new_price * Cart.quantity}</p>
                <p>
                  <img
                    onClick={() => handleRemove(Cart)}
                    className="remove-icon"
                    src=".././Assets/cart_cross_icon.png"
                    alt=""
                  />
                </p>
              </div>
              <hr />
            </div>
          ))}
        </div>
      </div>
      <div className="cart-payment-wrapper">
        <div className="cart-summmary">
          <h1>Cart Total</h1>
          <div className="subtotal">
            <h2>Subtotal</h2>
            <h2>${subTotal}</h2>
          </div>
          <hr />
          <div className="subtotal">
            <h2>Siping Fee</h2>
            <h2>${fee}</h2>
          </div>
          <hr />
          <div className="subtotal">
            <h3>Total</h3>
            <h3>${Total}</h3>
          </div>
          <hr />
          <button>Ready to Proceed</button>
        </div>
        <div className="promocode">
          <h1>If you have any promocode. Enter here</h1>
          <div className="enter-promocode">
            <input type="text" placeholder="Enter promo code" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};
