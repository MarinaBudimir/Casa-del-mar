import React, { useState } from "react";
import "./Salescard.css";
import { Link } from "react-router-dom";

function Salescard({
  imgSrc,
  url,
  title,
  size,
  description,
  price,
  button1,
  button2,
  button3,
}) {
  const [showDropdown, setShowDropdown] = useState(false); // State to control dropdown visibility
  const [selectedNumber, setSelectedNumber] = useState(null); // State to store selected number

  const handleButtonClick = () => {
    setShowDropdown(!showDropdown); // Toggle dropdown visibility
  };

  const handleNumberSelection = (number) => {
    setSelectedNumber(number); // Update selected number
    setShowDropdown(false); // Hide dropdown after selection
  };

  return (
    <Link to={url} className="salescard-container">
      <img src={imgSrc} alt="" className="salescard-img" />
      <div>
        <h8>{title}</h8>
        <p>{size}</p>
        <p>{description}</p>
        <h9>{price}</h9>
        <div className="salescard-buttons">
          <button className="salescard-button" onClick={handleButtonClick}>
            {selectedNumber ? selectedNumber : button1}
          </button>
          {showDropdown && (
            <div className="dropdown-content">
              {[...Array(10).keys()].map((number) => (
                <button
                  key={number}
                  onClick={() => handleNumberSelection(number + 1)}
                >
                  {number + 1}
                </button>
              ))}
            </div>
          )}
          <Link to={url} className="salescard-button">
            {button2}
          </Link>
          <Link to={url} className="salescard-button">
            {button3}
          </Link>
        </div>
      </div>
    </Link>
  );
}

export default Salescard;
