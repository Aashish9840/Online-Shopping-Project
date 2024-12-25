import React, { useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { all_Data, cataitemContext } from "../Store/Data";
import { DataItem } from "../components/DataItem";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import CloseIcon from "@mui/icons-material/Close";
import { CartSliceAction } from "../Store/CartSlice";

export const Product = () => {
  const [slide, setslide] = useState();
  const { cataitem } = useContext(cataitemContext);
  const productItem = useSelector((store) => store.productSelect);
  const { all_product } = useContext(all_Data);
  const arr = [
    productItem.image,
    productItem.image,
    productItem.image,
    productItem.image,
  ];
  const [modalImage, setModalImage] = useState(null); // State for modal image

  if (!productItem) {
    return (
      <div className="Null-product">Loading... Please select a product.</div>
    );
  }

  const relatedProducts = all_product.filter(
    (product) => product.category === cataitem
  );

  const CartItem = useSelector((store) => store.CartItemSlice);
  const dispatch = useDispatch();

  const handleCartItems = (item) => {
    dispatch(CartSliceAction.addToCart(item));
  };

  const handleImageClick = (image, index) => {
    setModalImage(image); // Set the clicked image
    setslide(index);
  };

  const closeModal = () => {
    setModalImage(null); // Clear the modal image
  };
  const backimage = (slide) => {
    let value = slide - 1;
    setslide(value);
    setModalImage(arr[value]);
    console.log(value);
  };
  const forwardimage = (slide) => {
    let value = slide + 1;
    setslide(value);
    setModalImage(arr[value]);
    console.log(value);
  };
  return (
    <div className="core-wrapper">
      {modalImage && (
        <div className="modal">
          <div className="modal-content">
            <img src={modalImage} alt="Zoomed" />
            <CloseIcon className="close-icon" onClick={() => closeModal()} />
            <div className="backward">
              <ArrowBackIosIcon
                className="backward-arrow"
                onClick={() => backimage(slide)}
              />
            </div>
            <div className="forward">
              <ArrowForwardIosIcon
                className="forward-arrow"
                onClick={() => forwardimage(slide)}
              />
            </div>
          </div>
        </div>
      )}
      <div className="main-product-cart">
        <div className="breadcrum">
          <p>
            home <img src=".././Assets/breadcrum_arrow.png" alt="" />
            {cataitem}
            <img src=".././Assets/breadcrum_arrow.png" alt="" />
            <img src=".././Assets/breadcrum_arrow.png" alt="" />
            {productItem.name}
          </p>
        </div>
        <div className="product-cart-selection">
          <div className="product-cart-left">
            <div className="left-imgage">
              {arr.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt=""
                  onClick={() => handleImageClick(image, index)}
                />
              ))}
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
                A lightweight, comfortable product launched with extreme quality
                materials. Suitable for both summer and winter.
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
                Category:
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
          {relatedProducts.map((productitem) => (
            <DataItem key={productitem.id} itemdata={productitem} />
          ))}
        </div>
      </div>
    </div>
  );
};
