import React, { useEffect } from "react";
import Card from "../components/Card";
import "./Stools.css";
import axios from "axios";

const data = [
  {
    name: "Chloe",
    showHeart: true,
    imgSrc: "/images/stools1.png",
    price: "270,00€",
    url: "/chloe",
  },
  {
    name: "Isabel",
    showHeart: true,
    imgSrc: "/images/stools2.png",
    price: "330,00€",
  },
  {
    name: "Rocio",
    showHeart: true,
    imgSrc: "/images/stools3.png",
    price: "450,00€",
  },
];

function Stools() {
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/stools")
      .then((data) => console.log(data));
  }, []);
  return (
    <div>
      <div className="stools-container">
        <h1>Stools </h1>
        <p>
          {" "}
          Are you sitting comfortably? With our range of seating pieces you will
          be soon. Choose the one that suits you and your home the best. Sit
          back, relax, and enjoy!{" "}
        </p>
        <url className="card-container">
          {data.map((category) => {
            return (
              <Card
                name={category.name}
                showHeart={category.showHeart}
                imgSrc={category.imgSrc}
                url={category.url}
                price={category.price}
              ></Card>
            );
          })}
        </url>
      </div>
    </div>
  );
}

export default Stools;
