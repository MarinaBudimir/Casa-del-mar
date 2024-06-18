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
        <Link to={url} className="blogcard-button">
          {button}
        </Link>
      </div>
    </Link>
  );
}

export default Blogcard;
