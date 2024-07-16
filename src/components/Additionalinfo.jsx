import React from "react";
import "./Additionalinfo.css";
import { Link } from "react-router-dom";
import { GoPlus } from "react-icons/go";
function Additionalinfo({ imgSrc6, url, title, description }) {
  return (
    <Link to={url} className="additionalinfo-container">
      <div className="additionalinfo-details">
        <h6 className="info-heading">{title}</h6>
        <h7 className="info-subheading">
          Dimensions
          <span className="plus-icon">
            <GoPlus />
          </span>
        </h7>
        <h7 className="info-subheading">
          Features
          <span className="plus-icon">
            <GoPlus />
          </span>
        </h7>
        <h7 className="info-subheading">
          Materials
          <span className="plus-icon">
            <GoPlus />
          </span>
        </h7>
        <h7 className="info-subheading">
          Care & Warranties
          <span className="plus-icon">
            <GoPlus />
          </span>
        </h7>
      </div>
      <div className="additionalinfo-img-container">
        <img src={imgSrc6} alt={title} className="additionalinfo-img" />
      </div>
    </Link>
  );
}

export default Additionalinfo;
