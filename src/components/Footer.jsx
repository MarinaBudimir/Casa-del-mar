import React from "react";
import { FaUser } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="custom-footing text1">
          <Link to="/" className="link title">
            casa del mar
          </Link>
        </div>
        <p>Get the freshest news from us</p>
        <div className="button-container">
          <button className="small-button">Carrers</button>
          <button className="small-button">
            <Link to="/contact" className="link">
              Contact
            </Link>
          </button>
          <button className="small-button">Customer Care</button>
          <button className="small-button">Services</button>
        </div>

        <div className="footer-contact">
          <button className="small-button button5">
            Enter your e-mail address
          </button>

          <button className="small-button button6">Subscribe</button>
        </div>

        <div className=" line-wrapper custom-text text3 ">
          2024 Casa del mar. All rights reserved
        </div>
      </div>
    </footer>
  );
}
export default Footer;
