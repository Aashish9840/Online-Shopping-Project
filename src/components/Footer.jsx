import React from "react";
import { Link } from "react-router-dom";
import "../index.css";

export const Footer = () => {
  return (
    <div className="main-footer-cointainer">
      <div className="top-footer">
        <div className="logo-name">
          <Link>
            <img src=".././Assets/logo.png" alt="" />
          </Link>
          <h1>Shopping</h1>
        </div>
        <div className="footer-list">
          <a href="#">Company</a>
          <a href="#">Offices</a>
          <a href="#">Product</a>
          <a href="#">About</a>
          <a href="#">Contacts</a>
        </div>
        <div className="footer-links">
          <img src="../../Assets/instagram_icon.png" alt="" />
          <img src="../../Assets/pintester_icon.png" alt="" />
          <img src="../../Assets/whatsapp_icon.png" alt="" />
        </div>
        <hr />
      </div>

      <div className="bottom-footor">
        <p>
          CopyRight @ 2024- <span>All Right Reserved </span>
        </p>
      </div>
    </div>
  );
};
