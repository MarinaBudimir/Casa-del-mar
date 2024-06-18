import React, { useEffect } from "react";
import Salescard from "../components/Salescard";
import Collage from "../components/Collage";
import Additionalinfo from "../components/Additionalinfo";
import "./Anthea.css";
import axios from "axios";

const itemdescription = [
  {
    imgSrc: "/images/anthea1.png",
    url: "/anthea",
    title: "Anthea",
    size: "Size: 90 x 65 x 45 cm",
    description:
      "Description: Anthea has thoughtful details that add character to the dining table. Swivel seating is covered in cotton canvas, linen blends and rich leathers. Dark wood frames are characterized by slim tapers and soft splays. Anthea elevates dining experience to new heights. ",
    price: "550,00€",
    button1: "1+",
    button2: "Add to shopping cart",
    button3: "Add to favorites",
  },
];

const data = [
  {
    imgSrc: "/images/anthea2.png",
    url: "/anthea",
  },

  {
    imgSrc: "/images/anthea3.png",
    url: "/anthea",
  },

  {
    imgSrc: "/images/anthea4.png",
    url: "/anthea",
  },
  {
    imgSrc: "/images/anthea5.png",
    url: "/anthea",
  },
];

const add = [
  {
    imgSrc: "/images/anthea6.png",
    url: "/anthea",
    title: "Additional info",
  },
];

function Anthea() {
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/anthea")
      .then((itemdescription) => console.log(itemdescription));
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/anthea")
      .then((data) => console.log(data));
  }, []);
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/anthea")
      .then((add) => console.log(add));
  }, []);

  return (
    <div>
      <div className="anthea-container">
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

export default Anthea;
