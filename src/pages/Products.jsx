import React, { useEffect } from "react";
import Card from "../components/Card";
import "./Products.css";
import axios from "axios";

const data = [
  {
    title: "Lighting",
    imgSrc: "/images/lighting.png",
  },
  {
    title: "Mirrors",
    imgSrc: "/images/mirrors.png",
  },
  {
    title: "Ornaments",
    imgSrc: "/images/ornaments.png",
  },
  {
    title: "Seating",
    imgSrc: "/images/seating.png",
    url: "/Seating",
  },
  {
    title: "Storage",
    imgSrc: "/images/storage.png",
  },
  {
    title: "Tables",
    imgSrc: "/images/tables.jpg",
  },
];

function Products() {
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/products")
      .then((data) => console.log(data));
  }, []);
  return (
    <div>
      <div className="products-container">
        <url className="card-container">
          {data.map((category) => {
            return (
              <Card
                title={category.title}
                imgSrc={category.imgSrc}
                url={category.url}
              ></Card>
            );
          })}
        </url>
      </div>
    </div>
  );
}

export default Products;
