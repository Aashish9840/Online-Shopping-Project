import React, { useState } from "react";
import "../index.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export const Header = () => {
  const CartItem = useSelector((store) => store.CartItemSlice);
  const [catagory, setcatagory] = useState("shop");
  return (
    <div className="main-header-container">
      <div className="logo-name">
        <Link>
          <img src=".././Assets/logo.png" alt="" />
        </Link>
        <h1>Shopping</h1>
      </div>
      <div className="collection-catagory-navbar">
        <Link onClick={() => setcatagory("shop")} to="/">
          Shop {catagory == "shop" ? <hr /> : <></>}
        </Link>
        <Link to="/men" onClick={() => setcatagory("men")}>
          Men {catagory === "men" ? <hr /> : <></>}
        </Link>
        <Link to="/women" onClick={() => setcatagory("women")}>
          Women {catagory === "women" ? <hr /> : <></>}
        </Link>
        <Link to="/kid" onClick={() => setcatagory("kid")}>
          Kids {catagory === "kid" ? <hr /> : <></>}
        </Link>
      </div>
      <div className="cart-search">
        <div className="search">
          <input type="text" />
          <Link to="/login">
            <button>LogIn</button>
          </Link>
        </div>
        <div className="cart">
          <Link to="/cartdisplay">
            <img src="././Assets/cart_icon.png" alt="" />
          </Link>
          <div className="count">{CartItem.length}</div>
        </div>
      </div>
    </div>
  );
};
