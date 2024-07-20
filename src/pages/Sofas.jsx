import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import "./Sofas.css";
import axios from "axios";

const data = [
  {
    name: "Celine",
    imgSrc: "/images/sofas1.png",
    price: "1000,00€",
    url: "Celine",
  },
  {
    name: "Masha",
    imgSrc: "/images/sofas2.png",
    price: "1200,00€",
  },
  {
    name: "Nora",
    imgSrc: "/images/sofas3.png",
    price: "1900,00€",
  },
];

function Sofas() {
  const [sofas, setSofas] = useState(data);
  return (
    <div>
      <div className="sofas-container">
        <h1>Sofas</h1>
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

export default Sofas;
