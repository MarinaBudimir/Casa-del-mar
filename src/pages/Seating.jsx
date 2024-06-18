import React, { useEffect } from "react";
import Card from "../components/Card";
import "./Seating.css";
import axios from "axios";

const data = [
  {
    title: "Benches",
    imgSrc: "/images/seating1.png",
    url: "/benches",
  },
  {
    title: "Dining chairs",
    imgSrc: "/images/seating2.png",
    url: "/diningchairs",
  },
  {
    title: "Lounge chairs",
    imgSrc: "/images/seating3.png",
    url: "/loungechairs",
  },
  {
    title: "Ottomans",
    imgSrc: "/images/seating4.png",
    url: "/ottomans",
  },
  {
    title: "Sofas",
    imgSrc: "/images/seating5.png",
    url: "/sofas",
  },
  {
    title: "Stools",
    imgSrc: "/images/seating6.png",
    url: "/stools",
  },
];

function Seating() {
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/seating")
      .then((data) => console.log(data));
  }, []);
  return (
    <div>
      <div className="seating-container">
        <div className="custom-heading4 ">Seating </div>
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

export default Seating;
