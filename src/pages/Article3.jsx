import React, { useEffect } from "react";
import Articlecard from "../components/Articlecard";
import "./Article3.css";
import axios from "axios";

const data = [
  {
    imgSrc: "/images/blog3-1-1.png",
    url: "/article3",
    description1:
      "If you prefer neutral paint and neutral furniture, you can pair these with some bright accessories to add splash to your space. ",
    description2:
      "Coordinate the colors in your accessories so that your space has a theme. These bright accessories can easily move around and give life to your space.",
  },

  {
    imgSrc: "/images/blog3-1-2.png",
    url: "/article3",
    description1:
      "Instead of choosing a neutral palette, having a completely white decor with small hints of color can have a lot of impact and works well if you're looking for something more muted.  ",
    description2:
      "Using an all-white backdrop instead of a combination of other neutral shades helps to make bright shades and hues pop. ",
  },

  {
    imgSrc: "/images/blog3-1-3.png",
    url: "/article3",
    description1:
      "When working with bright colors, it can often be less overwhelming to choose a focal point to keep the room from becoming an eyesore. ",
    description2:
      "Some added accessories in a similar color can tie the room together beautifully.",
  },
];

function Article3() {
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/article3")
      .then((data) => console.log(data));
  }, []);

  return (
    <div>
      <div className="article3-container">
        <div className="custom-heading4">How to use bright colors? </div>

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

export default Article3;
