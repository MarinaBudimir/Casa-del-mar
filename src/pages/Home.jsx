import React from "react";
import { FaUser } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <main>
      <div className="home-container">
        <div className="custom-heading1">Elevate your environment</div>
        <div className="custom-heading2">Modern furnitures</div>
        <div className="custom-text">
          Pairing outstanding functionality with aesthetic design across the
          whole house to make it a home of your dreams.{" "}
        </div>

        <div className="content-container">
          <button className="ourgallery-button">
            <Link to="/Gallery" className="link">
              Our gallery
            </Link>
          </button>

          <div className="image-container">
            <img src="/images/home1.jpg" alt="" />
            <img src="/images/home2.jpg" alt="" />
            <img src="/images/home3.png" alt="" />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
