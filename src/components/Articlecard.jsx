import React from "react";
import "./Articlecard.css";
import { Link } from "react-router-dom";

function Articlecard({ imgSrc, url, description1, description2 }) {
  return (
    <Link to={url} className="articlecard-container">
      <img src={imgSrc} alt="" className="articlecard img" />
      <div className="articlecard text">
        <p>{description1}</p>
        <p>{description2}</p>
      </div>
    </Link>
  );
}

export default Articlecard;
