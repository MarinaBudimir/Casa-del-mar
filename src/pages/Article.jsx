import React, { useEffect, useState } from "react";
import Articlecard from "../components/Articlecard";
import { useParams } from "react-router-dom";
import "./Article.css";
import axios from "axios";

function Article() {
  const [article, setArticle] = useState([]);
  let { id } = useParams();
  console.log(id);
  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/articles/${id}`)
      .then((response) => setArticle([response.data]))
      .catch((error) => console.log(error.message));
  }, []);

  return (
    <div>
      <div className="article-container">
        <div className="articlecard-list">
          {article.map((a) => (
            <div className="articlecard-container">
              <Articlecard
                title={a.title}
                imgSrc1={a.imgSrc1}
                imgSrc2={a.imgSrc2}
                imgSrc3={a.imgSrc3}
                url={a.url}
                description1={a.description1}
                description2={a.description2}
                description3={a.description3}
                description4={a.description4}
                description5={a.description5}
                description6={a.description6}
              />{" "}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Article;
