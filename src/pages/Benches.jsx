import React, { useEffect } from "react";
import Card from "../components/Card";
import "./Benches.css";
import axios from "axios";

const data = [
  {
    title: "Chiara",
    showHeart: true,
    imgSrc: "/images/benches1.png",
    price: "750,00€",
    url: "/chiara",
  },
  {
    title: "Dilara",
    showHeart: true,
    imgSrc: "/images/benches2.png",
    price: "800,00€",
  },
  {
    title: "Vitalia",
    showHeart: true,
    imgSrc: "/images/benches3.png",
    price: "900,00€",
  },
];

function Benches() {
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/benches")
      .then((data) => console.log(data));
  }, []);
  return (
    <div>
      <div className="benches-container">
        <div className="custom-heading4 ">Benches </div>
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

export default Benches;
