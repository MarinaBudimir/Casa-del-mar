import React, { useEffect } from "react";
import Articlecard from "../components/Articlecard";
import "./Article5.css";
import axios from "axios";

const data = [
  {
    imgSrc: "/images/blog5-1-1.png",
    url: "/article5",
    description1:
      "When it comes to hanging lights, you have seemingly endless options. For large spaces with high ceilings, huge industrial pendant lights are perfectly on trend.",
    description2:
      "String lighting or horizontal chandeliers are great modern lighting options for smaller spaces. They take up minimal space and add wide illumination for the entire room.",
  },

  {
    imgSrc: "/images/blog5-1-2.png",
    url: "/article5",
    description1:
      "Floor lamps for living rooms are also great for providing lighting options and creating ambient light. ",
    description2:
      "Floor lamps can be particularly beautiful in bedrooms. Giving yourself multiple lighting options makes it easier to relax, read, and otherwise unwind from a busy day.",
  },

  {
    imgSrc: "/images/blog5-1-3.png",
    url: "/article5",
    description1:
      "If you have a bookcase, a desk, a painting, or something else important that you want to illuminate, using small lighting fixtures can draw attention to these.",
    description2:
      "No matter the size, you deserve beautiful modern light fixtures to illuminate your space. Casa del mar offers a big variety of modern lights.",
  },
];

function Article5() {
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/article5")
      .then((data) => console.log(data));
  }, []);

  return (
    <div>
      <div className="article5-container">
        <h1>Modern lighting for large spaces </h1>

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

export default Article5;
