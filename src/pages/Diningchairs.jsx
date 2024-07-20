import React, { useState } from "react";
import Card from "../components/Card";
import "./Diningchairs.css";
import axios from "axios";

const data = [
  {
    name: "Anthea",
    imgSrc: "/images/diningchairs1.png",
    price: "550,00€",
    url: "Anthea",
  },
  {
    name: "Chelsea",
    imgSrc: "/images/diningchairs2.png",
    price: "600,00€",
  },
  {
    name: "Stella",
    imgSrc: "/images/diningchairs3.png",
    price: "900,00€",
  },
];

function Diningchairs() {
  const [diningchairs, setDiningchairs] = useState(data);
  return (
    <div>
      <div className="diningchairs-container">
        <h1>Dining chairs </h1>
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

export default Diningchairs;
