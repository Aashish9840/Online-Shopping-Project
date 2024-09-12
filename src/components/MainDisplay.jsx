import React from "react";

export const MainDisplay = () => {
  return (
    <div className="container-shop-display">
      <div className="left">
        <div className="text-container">
          <p>NEW ARRIVALS ONLY</p>
          <div className="hand-icon">
            <h1>new</h1>
            <img src=".././Assets/hand_icon.png" alt="" />
          </div>
          <h1>collections</h1>
          <h1>for everyone</h1>
        </div>
        <div className="shop-button">
          <button>latest collection</button>
          <img src=".././Assets/arrow.png" alt="" />
        </div>
      </div>
      <div className="right">
        <img src=".././Assets/hero_image.png" alt="" />
      </div>
    </div>
  );
};
