import React, { useState } from "react";
import "./Salescard.css";
import { Link } from "react-router-dom";
import axios from "axios";

function Salescard({
  imgSrc1,
  url,
  title,
  size,
  description,
  price,
  quantity,
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

  const addToFavorites = () => {
    axios
      .post("http://localhost:3001/api/favorites", {
        name: title,
      })
      .then((response) => {
        console.log("Added to favorites:", response.data);
      })
      .catch((error) => {
        console.error("There was an error adding to favorites!", error);
      });
  };
  const addToCarts = () => {
    axios
      .post("http://localhost:3001/api/carts", {
        name: title,
        quantity: selectedNumber,
      })
      .then((response) => {
        console.log("Added to carts:", response.data);
      })
      .catch((error) => {
        console.error("There was an error adding to carts!", error);
      });
  };

  return (
    <div className="salescard-container">
      <img src={imgSrc1} alt="" className="salescard-img" />
      <div>
        <h1>{title}</h1>
        <p>Size: {size} cm</p>
        <p>{description}</p>
        <h2>Price: {price + ",00€"}</h2>
        <div className="salescard-buttons">
          <button className="salescard-button" onClick={handleButtonClick}>
            {selectedNumber ? selectedNumber : "+1"}
          </button>
          {showDropdown && (
            <div className="dropdown-content">
              {[...Array(quantity).keys()].map((number) => (
                <button
                  key={number}
                  onClick={() => handleNumberSelection(number + 1)}
                >
                  {number + 1}
                </button>
              ))}
            </div>
          )}

          {/* cart page */}
          <Link className="salescard-button" onClick={addToCarts}>
            Add to shopping cart
          </Link>

          {/* favorites page */}
          <Link className="salescard-button" onClick={addToFavorites}>
            Add to favorites
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Salescard;
