import React from "react";
import "./Articlecard.css";
/*import { Link } from "react-router-dom";  */

function Articlecard({
  title,
  imgSrc1,
  description1,
  description2,
  imgSrc2,
  description3,
  description4,
  imgSrc3,
  description5,
  description6,
}) {
  return (
    <div>
      <h1 style={{ marginBottom: "20px" }}>{title}</h1>
      <div className="articlecard-list">
        <div className="articlecard-container">
          <img src={imgSrc1} alt="" className="articlecard img" />
          <div className="articlecard text">
            <p>{description1}</p>
            <p>{description2}</p>
          </div>
        </div>
        <div className="articlecard-container">
          <img src={imgSrc2} alt="" className="articlecard img" />
          <div className="articlecard text">
            <p>{description3}</p>
            <p>{description4}</p>
          </div>
        </div>
        <div className="articlecard-container">
          <img src={imgSrc3} alt="" className="articlecard img" />
          <div className="articlecard text">
            <p>{description5}</p>
            <p>{description6}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Articlecard;
