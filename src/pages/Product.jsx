import React, { useEffect, useState } from "react";
import Salescard from "../components/Salescard";
import Collage from "../components/Collage";
import Additionalinfo from "../components/Additionalinfo";
import "./Product.css";
import axios from "axios";
import { useParams } from "react-router-dom";

// const itemdescription = [
//   {
//     imgSrc: "/images/chiara1.png",
//     url: "/chiara",
//     title: "Chiara",
//     size: "Size: 150 x 55 x 83 cm",
//     description:
//       "Description: Custom Chiara bench is meticulously crafted from solid Peruvian white oak. The tapered legs and long length make her chic statement piece. Featuring a double leather cushion, you'll feel like you are sitting on a bed of feathers. Chiara ensures every space lingers in memory.",
//     price: "750,00€",
//     button1: "1+",
//     button2: "Add to shopping cart",
//     button3: "Add to favorites",
//   },
// ];

// const data = [
//   {
//     imgSrc: "/images/chiara2.png",
//     url: "/chiara",
//   },

//   {
//     imgSrc: "/images/chiara3.png",
//     url: "/chiara",
//   },

//   {
//     imgSrc: "/images/chiara4.png",
//     url: "/chiara",
//   },
//   {
//     imgSrc: "/images/chiara5.png",
//     url: "/chiara",
//   },
// ];

// const add = [
//   {
//     imgSrc: "/images/chiara6.png",
//     url: "/chiara",
//     title: "Additional info",
//   },
// ];

function Product() {
  const [product, setProduct] = useState([]);
  let { name } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/products/${name}`)
      .then((response) => setProduct(response.data));
  }, []);

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:3001/api/chiara")
  //     .then((data) => console.log(data));
  // }, []);
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:3001/api/chiara")
  //     .then((add) => console.log(add));
  // }, []);

  return (
    <div>
      <div className="product-container">
        {product.map((p) => {
          return (
            <>
              <div className="sales-container">
                <Salescard
                  imgSrc1={p.imgSrc1}
                  url={p.url}
                  title={p.name}
                  size={p.size}
                  description={p.description}
                  price={p.price}
                  quantity={p.quantity}
                />
              </div>

              <div classname="collage-container">
                <Collage
                  imgSrc2={p.imgSrc2}
                  imgSrc3={p.imgSrc3}
                  imgSrc4={p.imgSrc4}
                  imgSrc5={p.imgSrc5}
                  url={p.url}
                />
              </div>

              <div className="parent-container">
                <Additionalinfo
                  imgSrc6={p.imgSrc6}
                  url={p.url}
                  title={p.title}
                  description={p.description}
                />
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Product;
