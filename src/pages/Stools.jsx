import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import "./Stools.css";
import axios from "axios";

const data = [
  {
    name: "Chloe",
    imgSrc: "/images/stools1.png",
    price: "270,00€",
    url: "Chloe",
  },
  {
    name: "Isabel",
    imgSrc: "/images/stools2.png",
    price: "330,00€",
  },
  {
    name: "Rocio",
    imgSrc: "/images/stools3.png",
    price: "450,00€",
  },
];

function Stools() {
  const [stools, setStools] = useState(data);
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
