import React, { useEffect } from "react";
import Salescard from "../components/Salescard";
import Collage from "../components/Collage";
import Additionalinfo from "../components/Additionalinfo";
import "./Chloe.css";
import axios from "axios";

const itemdescription = [
  {
    imgSrc: "/images/chloe1.png",
    url: "/chloe",
    title: "Chloe",
    size: "Size: 45 x 50 x 89 cm",
    description:
      "Description: Mid-century in style, our Chloe Counter Stool will elevate any living space. With a base crafted from solid ash wood and a seatback made from leather, this sleek chair with performance fabric can handle spills and stains, offering both durability and sophistication for everyday use.",
    price: "270,00€",
    button1: "1+",
    button2: "Add to shopping cart",
    button3: "Add to favorites",
  },
];

const data = [
  {
    imgSrc: "/images/chloe2.png",
    url: "/chloe",
  },

  {
    imgSrc: "/images/chloe3.png",
    url: "/chloe",
  },

  {
    imgSrc: "/images/chloe4.png",
    url: "/chloe",
  },
  {
    imgSrc: "/images/chloe5.png",
    url: "/chloe",
  },
];

const add = [
  {
    imgSrc: "/images/chloe6.png",
    url: "/chloe",
    title: "Additional info",
  },
];

function Chloe() {
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/chloe")
      .then((itemdescription) => console.log(itemdescription));
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/chloe")
      .then((data) => console.log(data));
  }, []);
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/chloe")
      .then((add) => console.log(add));
  }, []);

  return (
    <div>
      <div className="chloe-container">
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

export default Chloe;
