import React, { useEffect } from "react";
import Card from "../components/Card";
import "./Loungechairs.css";
import axios from "axios";

const data = [
  {
    title: "Beatrice",
    showHeart: true,
    imgSrc: "/images/loungechairs1.png",
    price: "700,00€",
    url: "/beatrice",
  },
  {
    title: "Nicole",
    showHeart: true,
    imgSrc: "/images/loungechairs2.png",
    price: "900,00€",
  },
  {
    title: "Marnie",
    showHeart: true,
    imgSrc: "/images/loungechairs3.png",
    price: "900,00€",
  },
];

function Loungechairs() {
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/loungechairs")
      .then((data) => console.log(data));
  }, []);
  return (
    <div>
      <div className="loungechairs-container">
        <div className="custom-heading4 ">Lounge chairs </div>
        <p className="custom-text">
          {" "}
          Are you sitting comfortably? With our range of seating pieces you will
          be soon. Choose the one that suits you and your home the best. Sit
          back, relax, and enjoy!{" "}
        </p>
        <url className="card-container">
          {data.map((category) => {
            return (
              <Card
                title={category.title}
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

export default Loungechairs;
