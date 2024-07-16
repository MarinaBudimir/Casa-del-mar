import React from "react";
import { FaUser } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import "./About.css";
import { Link } from "react-router-dom";

function About() {
  return (
    <main>
      <div className="about-container">
        <div className="about-grid">
          <div id="aboutitem-0">
            <h2> The core of who we are </h2>

            <p>
              {" "}
              Casa del mar is a home furnishing company that manufactures and
              vends furniture and home accessories.
            </p>
            <p>
              {" "}
              This brand always takes a step further in making interesting,
              sophisticated and most importantly, useful objects.
            </p>
          </div>

          <div id="aboutitem-1">
            <h2>Our purpose</h2>

            <p>
              {" "}
              The main aim of us is to transform interiors by creating
              contemporary designs with high functionality.
            </p>
            <p>
              <button className="about-button ">
                <Link to="/contact" className="link">
                  Contact us
                </Link>
              </button>
            </p>
          </div>

          <div id="aboutitem-2"></div>

          <div id="aboutitem-3">
            <h2> Unique design</h2>

            <p>
              {" "}
              The label Casa del mar makes each piece of its collections with
              care. Every design is innovative, chic and released only when
              highest standars are achieved.
            </p>
            <p>
              {" "}
              Likewise, all of the products have their own visual integrity.
            </p>
          </div>

          <div id="aboutitem-4">
            <h2>Commitment to the customer</h2>

            <p>
              {" "}
              Casa del mar listens and carries out the needs and desires of her
              consumers. This company's focus are well pleased buyers who are
              willing to buy again.
            </p>
          </div>

          <div id="aboutitem-5"></div>

          <div id="aboutitem-6"> </div>
          <div id="aboutitem-7">
            <h2> Environmental sustainability</h2>

            <p>
              {" "}
              The company is environmentally conscious. Using recycled and
              recyclable materials the company wants to produce long-lasting
              products with high-quality in a responsible, careful way.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default About;
