import React, { useEffect } from "react";
import Articlecard from "../components/Articlecard";
import "./Article.css";
import axios from "axios";

const data = [
  {
    imgSrc: "/images/blog1-1-1.png",
    url: "/article",
    description1:
      "Whether it's a doctor's office or at the dentist, what is it that most patients hope to see once they enter through the door? A beautiful seating area and cogitative accessories to make them feel comfortable.",
    description2:
      "Casa del mar's furniture ensures to give much more than just furniture, but an experience for patients to always remember.",
  },

  {
    imgSrc: "/images/blog1-1-2.png",
    url: "/article",
    description1:
      "Let's start off with the variety of chairs Casa del mar has to offer. From the Dove chair that will look perfect in a pediatrician's office to the Ivy chair suitable for every waiting room. ",
    description2:
      "There is a chair ready for every healthcare facility. The variety of chairs is endless and will without a doubt impress the patients.",
  },

  {
    imgSrc: "/images/blog1-1-3.png",
    url: "/article",
    description1:
      "Casa del mar doesn't only offer the best appearance of modern furniture but ensures the greatest quality as well. Patients are in and out of healthcare facilities every day, which means the quality of modern furniture is crucial to ensure it being long lasting.",
    description2:
      "From homes, to Healthcare Facilities, Casa del mar is ready!",
  },
];

function Article() {
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/article")
      .then((data) => console.log(data));
  }, []);

  return (
    <div>
      <div className="article-container">
        <div className="custom-heading4">
          Modern furniture in health facilities{" "}
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

export default Article;
