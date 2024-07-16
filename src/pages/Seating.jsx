/*

import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import "./Seating.css";
import axios from "axios";

function Seating() {
  const [subcategories, setSubcategories] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/api/subcategories")
      .then((response) => setSubcategories(response.data));
  }, []);
  return (
    <div>
      <div className="seating-container">
        <h1>Seating </h1>
        <p>
          {" "}
          Are you sitting comfortably? With our range of seating pieces you will
          be soon. Choose the one that suits you and your home the best. Sit
          back, relax, and enjoy!{" "}
        </p>
        <url className="card-container">
          {subcategories.map((o) => {
            return <Card name={o.name} imgSrc={o.imgSrc} url={o.url}></Card>;
          })}
        </url>
      </div>
    </div>
  );
}

export default Seating;


*/
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import "./Seating.css";
import axios from "axios";

function Seating() {
  const [subcategories, setSubcategories] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/api/subcategories").then((response) => {
      setSubcategories(response.data);
      console.log(response.data);
    });
  }, []);

  return (
    <div>
      <div className="seating-container">
        <h1>Seating</h1>
        <p>
          Are you sitting comfortably? With our range of seating pieces you will
          be soon. Choose the one that suits you and your home the best. Sit
          back, relax, and enjoy!
        </p>
        <div className="card-container">
          {subcategories.map((o, index) => {
            let url;
            switch (o.name.toLowerCase()) {
              case "benches":
                url = "/benches";
                break;
              case "dining chairs":
                url = "/diningchairs";
                break;
              case "lounge chairs":
                url = "/loungechairs";
                break;
              case "ottomans":
                url = "/ottomans";
                break;
              case "sofas":
                url = "/sofas";
                break;
              case "stools":
                url = "/stools";
                break;
              default:
                url = o.url;
            }
            return url ? (
              <Link to={url} className="card-link" key={index}>
                <Card name={o.name} imgSrc={o.imgSrc} url={url} />
              </Link>
            ) : (
              <Card name={o.name} imgSrc={o.imgSrc} url={o.url} key={index} />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Seating;
