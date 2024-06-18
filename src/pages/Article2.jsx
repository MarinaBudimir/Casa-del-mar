import React, { useEffect } from "react";
import Articlecard from "../components/Articlecard";
import "./Article2.css";
import axios from "axios";

const data = [
  {
    imgSrc: "/images/blog2-1-1.png",
    url: "/article2",
    description1:
      "Just because you want your office space to be professional doesn't mean it can't also be modern and unique. With a few things in mind, you can easily mix a professional and modern design.",
    description2:
      "By choosing a few accent pieces to stand out within your design, you're showing your company's creativity and spark.",
  },

  {
    imgSrc: "/images/blog2-1-2.png",
    url: "/article2",
    description1:
      "Brightly-lit offices are often the most modern and productive. Having multiple sources of natural light is always best, but that's often out of your control.",
    description2:
      "If your office space doesn't have large windows or skylights, choosing modern lighting that provides ample light is key.",
  },

  {
    imgSrc: "/images/blog2-1-3.png",
    url: "/article2",
    description1:
      "Implementing coworking spaces in your office design is one of the key components for a professional look.",
    description2:
      "Providing seating separate from traditional office chairs is a great way to foster creativity and create environments for employees to work at their best.",
  },
];

function Article2() {
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/article2")
      .then((data) => console.log(data));
  }, []);

  return (
    <div>
      <div className="article2-container">
        <div className="custom-heading4">
          Creating a professional office design{" "}
        </div>

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

export default Article2;
