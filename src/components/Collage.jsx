import React from "react";
import "./Collage.css";
import { Link } from "react-router-dom";

function Collage({ imgSrc, url }) {
  return (
    <Link to={url} className="collage-item">
      <img src={imgSrc} alt="" className="collage-img" />
    </Link>
  );
}

export default Collage;
