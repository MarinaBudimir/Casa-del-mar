import React, { useEffect } from "react";
import Card from "../components/Card";
import "./Diningchairs.css";
import axios from "axios";

const data = [
  {
    name: "Anthea",
    showHeart: true,
    imgSrc: "/images/diningchairs1.png",
    price: "550,00€",
    url: "/anthea",
  },
  {
    name: "Chelsea",
    showHeart: true,
    imgSrc: "/images/diningchairs2.png",
    price: "600,00€",
  },
  {
    name: "Stella",
    showHeart: true,
    imgSrc: "/images/diningchairs3.png",
    price: "900,00€",
  },
];

function Diningchairs() {
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/diningchairs")
      // .then((d) => console.log(d.data));
      .then((data) => console.log(data));
  }, []);
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

export default Diningchairs;
