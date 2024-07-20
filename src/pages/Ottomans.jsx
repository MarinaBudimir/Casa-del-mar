import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import "./Ottomans.css";
import axios from "axios";

const data = [
  {
    name: "Ayla",
    imgSrc: "/images/ottomans1.png",
    price: "300,00€",
    url: "Ayla",
  },
  {
    name: "Esma",
    imgSrc: "/images/ottomans2.png",
    price: "470,00€",
  },
  {
    name: "Leyla",
    imgSrc: "/images/ottomans3.png",
    price: "900,00€",
  },
];

function Ottomans() {
  const [ottomans, setOttomans] = useState(data);
  return (
    <div>
      <div className="ottomans-container">
        <h1>Ottomans </h1>
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

export default Ottomans;
