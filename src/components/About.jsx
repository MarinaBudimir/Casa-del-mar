import React from "react";
import { FaUser } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
// import "./About.css";

function About() {
  return (
    <main>
      <div className="about-container">
        <div className="about-grid">
          <div id="aboutitem-0">
            <div className="custom-aboutheading2"> The core of who we are </div>
            <div className="custom-text">
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
          </div>

          <div id="aboutitem-1">
            <div className="custom-aboutheading2">Our purpose</div>
            <div className="custom-text">
              <p>
                {" "}
                The main aim of us is to transform interiors by creating
                contemporary designs with high functionality.
              </p>
              <p>
                <button className="about-button ">Contact us</button>
              </p>
            </div>
          </div>

          <div id="aboutitem-2"></div>

          <div id="aboutitem-3">
            <div className="custom-aboutheading2"> Unique design</div>
            <div className="custom-text">
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
          </div>

          <div id="aboutitem-4">
            <div className="custom-aboutheading2">
              Commitment to the customer
            </div>
            <div className="custom-text">
              <p>
                {" "}
                Casa del mar listens and carries out the needs and desires of
                her consumers. This compan's focus are well pleased buyers who
                are willing to buy again.
              </p>
            </div>
          </div>

          <div id="aboutitem-5"></div>

          <div id="aboutitem-6"></div>

          <div id="aboutitem-7">
            <div className="custom-aboutheading2">
              {" "}
              Environmental sustainability
            </div>
            <div className="custom-text">
              <p>
                {" "}
                The company is environmentally conscious. Using recycled and
                recyclable materials the company wants to produce long-lasting
                products with high-quality in a responsible, careful way.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default About;
