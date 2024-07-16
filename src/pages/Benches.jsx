import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import "./Benches.css";
import axios from "axios";

const data = [
  {
    name: "Chiara",
    showHeart: true,
    imgSrc: "/images/benches1.png",
    price: "750,00€",
    url: "Chiara",
  },
  {
    name: "Dilara",
    showHeart: true,
    imgSrc: "/images/benches2.png",
    price: "800,00€",
  },
  {
    name: "Vitalia",
    showHeart: true,
    imgSrc: "/images/benches3.png",
    price: "900,00€",
  },
];

function Benches() {
  const [benches, setBenches] = useState(data);

  return (
    <div>
      <div className="benches-container">
        <h1>Benches </h1>
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

export default Benches;
