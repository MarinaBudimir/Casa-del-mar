import React, { useEffect } from "react";
import Blogcard from "../components/Blogcard";
import "./Blog4.css";
import axios from "axios";

const data = [
  {
    imgSrc: "/images/blog4-1.png",
    url: "/article4",
    title: "How to identify high quality furniture?",
    description:
      "There are some features to look for when trying to find high quality furniture. Price tag doesn't guarantee excellence. ",
    button: "Read more",
  },

  {
    imgSrc: "/images/blog4-2.png",
    url: "/blog/4",
    title: "How to keep leather looking new?",
    description:
      "Leather is an investment. When taken care of properly, it can last for decades. Check our tips to make it long-lasting.",
    button: "Read more",
  },

  {
    imgSrc: "/images/blog4-3.png",
    url: "/blog/4",
    title: "Using contemporary armchairs",
    description:
      "They need to provide pleasant seating and their uncommon size and design make them the perfect furniture piece. ",
    button: "Read more",
  },

  {
    imgSrc: "/images/blog4-4.png",
    url: "/blog/4",
    title: "Chrome vs stainless steel",
    description:
      "Picking the metals can be difficult. Different furniture has different requirements for both aesthetic and durability.  ",
    button: "Read more",
  },
];

function Blog4() {
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/blog/4")
      .then((data) => console.log(data));
  }, []);

  return (
    <div>
      <div className="blog4-container">
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

          <a href="/blog/4" className="number" style={{ fontWeight: "bold" }}>
            4
          </a>

          <a href="/blog/5" className="number">
            5
          </a>
        </div>
      </div>
    </div>
  );
}

export default Blog4;
