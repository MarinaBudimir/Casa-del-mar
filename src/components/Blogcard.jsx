import React from "react";
import "./Blogcard.css";
import { Link } from "react-router-dom";

function Blogcard({ imgSrc, url, title, description, button }) {
  return (
    <Link to={url} className="blogcard-container">
      <img src={imgSrc} alt="" className="blogcard-img" />
      <div>
        <h5>{title}</h5>
        <p>{description}</p>

        {/* umisto article ide url, stavi ih u bazi */}
        <Link to={url} className="blogcard-button">
          Read more
        </Link>
      </div>
    </Link>
  );
}

export default Blogcard;
