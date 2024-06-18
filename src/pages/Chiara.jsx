import React, { useEffect } from "react";
import Salescard from "../components/Salescard";
import Collage from "../components/Collage";
import Additionalinfo from "../components/Additionalinfo";
import "./Chiara.css";
import axios from "axios";

const itemdescription = [
  {
    imgSrc: "/images/chiara1.png",
    url: "/chiara",
    title: "Chiara",
    size: "Size: 150 x 55 x 83 cm",
    description:
      "Description: Custom Chiara bench is meticulously crafted from solid Peruvian white oak. The tapered legs and long length make her chic statement piece. Featuring a double leather cushion, you'll feel like you are sitting on a bed of feathers. Chiara ensures every space lingers in memory.",
    price: "750,00€",
    button1: "1+",
    button2: "Add to shopping cart",
    button3: "Add to favorites",
  },
];

const data = [
  {
    imgSrc: "/images/chiara2.png",
    url: "/chiara",
  },

  {
    imgSrc: "/images/chiara3.png",
    url: "/chiara",
  },

  {
    imgSrc: "/images/chiara4.png",
    url: "/chiara",
  },
  {
    imgSrc: "/images/chiara5.png",
    url: "/chiara",
  },
];

const add = [
  {
    imgSrc: "/images/chiara6.png",
    url: "/chiara",
    title: "Additional info",
  },
];

function Chiara() {
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/chiara")
      .then((itemdescription) => console.log(itemdescription));
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/chiara")
      .then((data) => console.log(data));
  }, []);
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/chiara")
      .then((add) => console.log(add));
  }, []);

  return (
    <div>
      <div className="chiara-container">
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

export default Chiara;
