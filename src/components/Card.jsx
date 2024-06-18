import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";
import { CiHeart } from "react-icons/ci";

function Card({ title, showHeart, imgSrc, url, price }) {
  return (
    <Link to={url} className="card">
      <h2>{title}</h2>
      {showHeart && <CiHeart className="heart-icon" />}
      <img src={imgSrc} alt="" />
      <p>{price}</p>
    </Link>
  );
}

export default Card;
