import React from "react";
import { FaUser } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import "./Gallery.css";
import { Link } from "react-router-dom";

function Gallery() {
  return (
    <main>
      <div className="gallery-container">
        <h2 className="custom-heading4">Our gallery</h2>
        <p className="custom-text">
          Take a look inside our gallery to get inspired. Lose yourself in the
          most perfect and unbelievable furniture items that enriched modern
          homes.
        </p>

        <div className="angry-grid ">
          <div id="item-0"></div>
          <div id="item-1"></div>
          <div id="item-2"></div>
          <div id="item-3"></div>
          <div id="item-4"></div>
          <div id="item-5"></div>
        </div>
      </div>
    </main>
  );
}

export default Gallery;
