import React, { useEffect } from "react";
import Salescard from "../components/Salescard";
import Collage from "../components/Collage";
import Additionalinfo from "../components/Additionalinfo";
import "./Ayla.css";
import axios from "axios";

const itemdescription = [
  {
    imgSrc: "/images/ayla1.png",
    url: "/ayla",
    title: "Ayla",
    size: "Size: 45 x 65 x 37 cm",
    description:
      "Description: Cream boucle fabric brings a touch of texture and softness to Ayla. The frame is crafted from birch wood, then upholstered in foam and poly-wadding for an ottoman that blends structural durability with visual beauty, making it a versatile and stylish addition to any living space.",
    price: "300,00€",
    button1: "1+",
    button2: "Add to shopping cart",
    button3: "Add to favorites",
  },
];

const data = [
  {
    imgSrc: "/images/ayla2.png",
    url: "/ayla",
  },

  {
    imgSrc: "/images/ayla3.png",
    url: "/ayla",
  },

  {
    imgSrc: "/images/ayla4.png",
    url: "/ayla",
  },
  {
    imgSrc: "/images/ayla5.png",
    url: "/ayla",
  },
];

const add = [
  {
    imgSrc: "/images/ayla6.png",
    url: "/ayla",
    title: "Additional info",
  },
];

function Ayla() {
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/ayla")
      .then((itemdescription) => console.log(itemdescription));
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/ayla")
      .then((data) => console.log(data));
  }, []);
  useEffect(() => {
    axios.get("http://localhost:3000/api/ayla").then((add) => console.log(add));
  }, []);

  return (
    <div>
      <div className="ayla-container">
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

export default Ayla;
