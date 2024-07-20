import React from "react";
import "./CartCard.css";
import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";

function CartCard({ name, imgSrc1, url, onDelete, quantity, price }) {
  const handleCloseClick = (e) => {
    e.preventDefault();
    onDelete();
  };

  return (
    <Link to={url} className="cartcard">
      <h3>{name}</h3>
      <img src={imgSrc1} alt="" className="cartcard-img" />
      <IoClose onClick={handleCloseClick} className="cartcard-close-icon" />
      <p className="cartcard-text">Price: {price + ",00€"}</p>
      <p className="cartcard-text">Quantity: {quantity}</p>
    </Link>
  );
}

export default CartCard;
