import React from "react";
import "./Collage.css";
import { Link } from "react-router-dom";

function Collage({ imgSrc2, imgSrc3, imgSrc4, imgSrc5, url }) {
  return (
    <Link to={url} className="collage-container ">
      <img src={imgSrc2} alt="" />
      <img src={imgSrc3} alt="" />
      <img src={imgSrc4} alt="" />
      <img src={imgSrc5} alt="" />
    </Link>
  );
}

export default Collage;
