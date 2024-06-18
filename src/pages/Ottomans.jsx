import React, { useEffect } from "react";
import Card from "../components/Card";
import "./Ottomans.css";
import axios from "axios";

const data = [
  {
    title: "Ayla",
    showHeart: true,
    imgSrc: "/images/ottomans1.png",
    price: "300,00€",
    url: "/ayla",
  },
  {
    title: "Esma",
    showHeart: true,
    imgSrc: "/images/ottomans2.png",
    price: "470,00€",
  },
  {
    title: "Leyla",
    showHeart: true,
    imgSrc: "/images/ottomans3.png",
    price: "900,00€",
  },
];

function Ottomans() {
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/ottomans")
      .then((data) => console.log(data));
  }, []);
  return (
    <div>
      <div className="ottomans-container">
        <div className="custom-heading4 ">Ottomans </div>
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

export default Ottomans;
