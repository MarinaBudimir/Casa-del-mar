import React from "react";
import "./FavCard.css";
import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";

function FavCard({ name, imgSrc1, url, onDelete }) {
  const handleHeartClick = (e) => {
    e.preventDefault();
    onDelete();
  };

  return (
    <Link to={url} className="favcard">
      <h3>{name}</h3>

      <img src={imgSrc1} alt="" />
      <IoClose onClick={handleHeartClick} className="favcard-close-icon" />
    </Link>
  );
}

export default FavCard;
