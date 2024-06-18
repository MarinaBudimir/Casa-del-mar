import React, { useEffect } from "react";
import Salescard from "../components/Salescard";
import Collage from "../components/Collage";
import Additionalinfo from "../components/Additionalinfo";
import "./Celine.css";
import axios from "axios";

const itemdescription = [
  {
    imgSrc: "/images/celine1.png",
    url: "/celine",
    title: "Celine",
    size: "Size: 75 x 90 x 160 cm",
    description:
      "Description: Celine provides both functional seating and contributes to the overall aesthetic of a space. Her specific fabric and shape evoke Parisian refinement, boasting luxurious upholstery in rich tones and a sleek, avant-garde design that effortlessly enhances any room's ambiance.",
    price: "1000,00€",
    button1: "1+",
    button2: "Add to shopping cart",
    button3: "Add to favorites",
  },
];

const data = [
  {
    imgSrc: "/images/celine2.png",
    url: "/celine",
  },

  {
    imgSrc: "/images/celine3.png",
    url: "/celine",
  },

  {
    imgSrc: "/images/celine4.png",
    url: "/celine",
  },
  {
    imgSrc: "/images/celine5.png",
    url: "/celine",
  },
];

const add = [
  {
    imgSrc: "/images/celine6.png",
    url: "/celine",
    title: "Additional info",
  },
];

function Celine() {
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/celine")
      .then((itemdescription) => console.log(itemdescription));
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/celine")
      .then((data) => console.log(data));
  }, []);
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/celine")
      .then((add) => console.log(add));
  }, []);

  return (
    <div>
      <div className="celine-container">
        <div className="sales-container">
          {itemdescription.map((category) => (
            <Salescard
              imgSrc={category.imgSrc}
              url={category.url}
              title={category.title}
              size={category.size}
              description={category.description}
              price={category.price}
              button1={category.button1}
              button2={category.button2}
              button3={category.button3}
            />
          ))}
        </div>

        <div className="collage-container">
          {data.map((category) => (
            <Collage imgSrc={category.imgSrc} url={category.url} />
          ))}
        </div>
        <div className="parent-container">
          {add.map((category) => (
            <Additionalinfo
              imgSrc={category.imgSrc}
              url={category.url}
              title={category.title}
              description={category.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Celine;
