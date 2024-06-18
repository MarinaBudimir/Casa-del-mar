import React, { useEffect } from "react";
import Blogcard from "../components/Blogcard";
import "./Blog2.css";
import axios from "axios";

const data = [
  {
    imgSrc: "/images/blog2-1.png",
    url: "/article2",
    title: "Creating a professional office design",
    description:
      "Modern trends and changes in work environments mean that a professional space does not have to be traditional. ",
    button: "Read more",
  },

  {
    imgSrc: "/images/blog2-2.png",
    url: "/blog/2",
    title: "How to keep furniture sustainable?",
    description:
      "Using sustainable, locally sourced and reclaimed furniture is today one of the most important aspects of modern design.",
    button: "Read more",
  },

  {
    imgSrc: "/images/blog2-3.png",
    url: "/blog/2",
    title: "How to reupholster furniture",
    description:
      "You don’t like the fabric of your furniture anymore? Learn how It can be easily updated with fresh upholstery.",
    button: "Read more",
  },

  {
    imgSrc: "/images/blog2-4.png",
    url: "/blog/2",
    title: "Most unique uses of modern bar stools",
    description:
      "Besides being creative, modern bar stools have some interesting and unique uses. ",
    button: "Read more",
  },
];

function Blog2() {
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/blog/2")
      .then((data) => console.log(data));
  }, []);

  return (
    <div>
      <div className="blog2-container">
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
          <a href="/blog/2" className="number" style={{ fontWeight: "bold" }}>
            2
          </a>

          <a href="/blog/3" className="number">
            3
          </a>
          <a href="/blog/4" className="number">
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

export default Blog2;
