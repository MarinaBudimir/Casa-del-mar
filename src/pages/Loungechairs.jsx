import React, { useState } from "react";
import Card from "../components/Card";
import "./Loungechairs.css";
import axios from "axios";

const data = [
  {
    name: "Beatrice",
    imgSrc: "/images/loungechairs1.png",
    price: "700,00€",
    url: "Beatrice",
  },
  {
    name: "Nicole",
    imgSrc: "/images/loungechairs2.png",
    price: "900,00€",
  },
  {
    name: "Marnie",
    imgSrc: "/images/loungechairs3.png",
    price: "900,00€",
  },
];

function Loungechairs() {
  const [loungechairs, setLoungechairs] = useState(data);
  return (
    <div>
      <div className="loungechairs-container">
        <h1>Lounge chairs </h1>
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

export default Loungechairs;
