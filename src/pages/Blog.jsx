import React, { useEffect } from "react";
import Blogcard from "../components/Blogcard";
import "./Blog.css";
import axios from "axios";

const data = [
  {
    imgSrc: "/images/blog1-1.png",
    url: "/article",
    title: "Modern furniture in health facilities",
    description:
      "Modern furniture plays a huge role in many healthcare facilities to open their arms for patients and employees.  ",
    button: "Read more",
  },

  {
    imgSrc: "/images/blog1-2.png",
    url: "/blog",
    title: "How to choose material for your home",
    description:
      "Choosing the materials can be challenging. Find out how  choose right materials for your furniture.",
    button: "Read more",
  },

  {
    imgSrc: "/images/blog1-3.png",
    url: "/blog",
    title: "Simple interior design",
    description:
      "Minimalism in furniture and interior design has long been a staple of modern spaces. It never goes out of fashion. ",
    button: "Read more",
  },

  {
    imgSrc: "/images/blog1-4.png",
    url: "/blog",
    title: "Modern sofa trends",
    description:
      "No matter the place they are in, sofas are often the main focus of a room.  ",
    button: "Read more",
  },
];

function Blog() {
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/blog")
      .then((data) => console.log(data));
  }, []);

  return (
    <div>
      <div className="blog-container">
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
          <a href="/blog" className="number" style={{ fontWeight: "bold" }}>
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
          <a href="/blog/5" className="number">
            5
          </a>
        </div>
      </div>
    </div>
  );
}

export default Blog;
