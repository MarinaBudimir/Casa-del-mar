import React, { useEffect } from "react";
import Card from "../components/Card";
import "./Sofas.css";
import axios from "axios";

const data = [
  {
    title: "Celine",
    showHeart: true,
    imgSrc: "/images/sofas1.png",
    price: "1000,00€",
    url: "/celine",
  },
  {
    title: "Masha",
    showHeart: true,
    imgSrc: "/images/sofas2.png",
    price: "1200,00€",
  },
  {
    title: "Nora",
    showHeart: true,
    imgSrc: "/images/sofas3.png",
    price: "1900,00€",
  },
];

function Sofas() {
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/sofas")
      .then((data) => console.log(data));
  }, []);
  return (
    <div>
      <div className="sofas-container">
        <div className="custom-heading4">Sofas</div>
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

export default Sofas;
