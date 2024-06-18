import React, { useEffect } from "react";
import Blogcard from "../components/Blogcard";
import "./Blog3.css";
import axios from "axios";

const data = [
  {
    imgSrc: "/images/blog3-1.jpg",
    url: "/article3",
    title: "How to use bright colors?",
    description:
      "Cheerful colors don't have to be intimidating. If you choose them wisely, they can make a significant impact on design.",
    button: "Read more",
  },

  {
    imgSrc: "/images/blog3-2.png",
    url: "/blog/3",
    title: "Modern furniture and decor for kids",
    description:
      "With a few pieces of furniture and decor, you can create spaces that children will love while still being comfortable.",
    button: "Read more",
  },

  {
    imgSrc: "/images/blog3-3.jpg",
    url: "/blog/3",
    title: "Decorating and furnishing small spaces",
    description:
      "With some fresh furniture and decorating ideas, you can make even the tiniest home feel spacious and comfortable.",
    button: "Read more",
  },

  {
    imgSrc: "/images/blog3-4.png",
    url: "/blog/3",
    title: "Modern furniture for country homes",
    description:
      "If you can maintain rustic feature of a coutry home while updating its furniture, it will remain the relaxing getaway. ",
    button: "Read more",
  },
];

function Blog3() {
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/blog/3")
      .then((data) => console.log(data));
  }, []);

  return (
    <div>
      <div className="blog3-container">
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

          <a href="/blog/3" className="number" style={{ fontWeight: "bold" }}>
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

export default Blog3;
