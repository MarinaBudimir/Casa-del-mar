import React, { useEffect } from "react";
import Salescard from "../components/Salescard";
import Collage from "../components/Collage";
import Additionalinfo from "../components/Additionalinfo";
import "./Beatrice.css";
import axios from "axios";

const itemdescription = [
  {
    imgSrc: "/images/beatrice1.png",
    url: "/beatrice",
    title: "Beatrice",
    size: "Size: 76 x 82 x 70 cm",
    description:
      "Description: Meet Beatrice, our best-selling product, featuring a wrapped frame of honey-finished solid oak. This midcentury-inspired seating is modernized with high-performance fabric in a crisp, creamy white, adding both style and durability to any space.",
    price: "700,00€",
    button1: "1+",
    button2: "Add to shopping cart",
    button3: "Add to favorites",
  },
];

const data = [
  {
    imgSrc: "/images/beatrice2.png",
    url: "/beatrice",
  },

  {
    imgSrc: "/images/beatrice3.png",
    url: "/beatrice",
  },

  {
    imgSrc: "/images/beatrice4.png",
    url: "/beatrice",
  },
  {
    imgSrc: "/images/beatrice5.png",
    url: "/beatrice",
  },
];

const add = [
  {
    imgSrc: "/images/beatrice6.png",
    url: "/beatrice",
    title: "Additional info",
  },
];

function Beatrice() {
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/beatrice")
      .then((itemdescription) => console.log(itemdescription));
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/beatrice")
      .then((data) => console.log(data));
  }, []);
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/beatrice")
      .then((add) => console.log(add));
  }, []);

  return (
    <div>
      <div className="beatrice-container">
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

export default Beatrice;
