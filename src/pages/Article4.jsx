import React, { useEffect } from "react";
import Articlecard from "../components/Articlecard";
import "./Article4.css";
import axios from "axios";

const data = [
  {
    imgSrc: "/images/blog4-1-1.png",
    url: "/article4",
    description1:
      "There are several features we should pay attention to when searching for a high quality furniture such as cushion covers, types of wood, knots etc. ",
    description2:
      "You should be able to easily remove the cushion covers from the foam or down.  Lower quality furniture typically doesn't come with this option.",
  },

  {
    imgSrc: "/images/blog4-1-2.png",
    url: "/article4",
    description1:
      "Ash, mahogany, oak, and walnut are just some of the most popular types of wood used in modern furniture.  ",
    description2:
      "Furniture can either be solid wood or veneer, meaning less expensive wood is covered in a solid wood finish. Both these options are used in high quality modern furniture and are typically durable and long lasting. ",
  },

  {
    imgSrc: "/images/blog4-1-3.png",
    url: "/article4",
    description1:
      "Knots are natural in solid wood. If your furniture, has a lot of knots visible, it means that the wood is weaker. Make sure you check the base of your furniture for knots and if you see more than a few, it may not be high quality! ",
    description2:
      "Casa del mar offers high quality pieces you can enjoy in upcoming years.",
  },
];

function Article4() {
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/article4")
      .then((data) => console.log(data));
  }, []);

  return (
    <div>
      <div className="article4-container">
        <h1>How to identify high quality furniture? </h1>

        <div className="articlecard-list">
          {data.map((category) => (
            <div className="articlecard-container">
              <Articlecard
                imgSrc={category.imgSrc}
                url={category.url}
                description1={category.description1}
                description2={category.description2}
              />{" "}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Article4;
