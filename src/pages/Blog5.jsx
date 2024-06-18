import React, { useEffect } from "react";
import Blogcard from "../components/Blogcard";
import "./Blog5.css";
import axios from "axios";

const data = [
  {
    imgSrc: "/images/blog5-1.png",
    url: "/article5",
    title: "Modern lighting for large spaces",
    description:
      "With the right light fixture, you can completely change the space and make it focal point of the room. ",
    button: "Read more",
  },

  {
    imgSrc: "/images/blog5-2.png",
    url: "/blog/5",
    title: "Living room designs",
    description:
      "When you furnish your living room, make sure that you first identify its function and the design will fall into place.",
    button: "Read more",
  },

  {
    imgSrc: "/images/blog5-3.png",
    url: "/blog/5",
    title: "The newest coffee table trends",
    description:
      "Explore the captivating realm of the latest coffee table trends that are shaping contemporary interiors.",
    button: "Read more",
  },

  {
    imgSrc: "/images/blog5-4.png",
    url: "/blog/5",
    title: "Choosing right colors for your home",
    description:
      "Color isn't just a choice - it's a language that speaks volumes about a space's personality, mood, and character.",
    button: "Read more",
  },
];

function Blog5() {
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/blog/5")
      .then((data) => console.log(data));
  }, []);

  return (
    <div>
      <div className="blog5-container">
        <div className="custom-heading4">Our blog</div>
        <p className="custom-text">
          Welcome to the captivating world of furniture – where each piece has a
          story to tell and each space becomes a canvas for your dreams.
        </p>

        <div className="blogcard-list">
          {data.map((category) => (
            <Blogcard
              imgSrc={category.imgSrc}
              url={category.url}
              title={category.title}
              description={category.description}
              button={category.button}
            />
          ))}
        </div>
        <div className="numbers-container">
          <a href="/blog" className="number">
            1
          </a>
          <a href="/blog/2" className="number">
            2
          </a>
          <a href="/blog/3" className="number">
            3
          </a>
          <a href="/blog/4" className="number">
            4
          </a>

          <a href="/blog/5" className="number" style={{ fontWeight: "bold" }}>
            5
          </a>
        </div>
      </div>
    </div>
  );
}

export default Blog5;
