/*import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import "./Products.css";
import axios from "axios";

/*
function Product() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/api/products/Ayla")
      .then((response) => setProduct(response.data));
  }, []);



function Products() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/api/categories")
      .then((response) => setCategories(response.data));
  }, []);
  return (
    <div>
      <div className="products-container">
        <url className="card-container">
          {categories.map((q) => {
            return <Card name={q.name} imgSrc={q.imgSrc} url={q.url}></Card>;
          })}
        </url>
      </div>
    </div>
  );
}

export default Products;
*/

import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import "./Products.css";
import axios from "axios";
import { Link } from "react-router-dom"; // Import Link from React Router

function Products() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/categories")
      .then((response) => setCategories(response.data))
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  return (
    <div>
      <div className="products-container">
        <div className="card-container">
          {categories.map((q, index) =>
            q.name === "Seating" ? (
              <Link to="/seating" className="card-link" key={index}>
                <Card name={q.name} imgSrc={q.imgSrc} url={"/seating"} />
              </Link>
            ) : (
              <Card name={q.name} imgSrc={q.imgSrc} url={q.url} key={index} />
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default Products;
