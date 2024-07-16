// import React, { useEffect, useState } from "react";
// import Blogcard from "../components/Blogcard";
// import "./Blog.css";
// import axios from "axios";

// function Blog() {
//   const [blogs, setBlogs] = useState([]);
//   useEffect(() => {
//     axios
//       .get("http://localhost:3001/api/blogs")
//       .then((response) => setBlogs(response.data))
//       .catch((error) => console.log(error.message));
//   }, []);

//   return (
//     <div>
//       <div className="blog-container">
//         <h1>Our blog</h1>
//         <p className="custom-text">
//           Welcome to the captivating world of furniture – where each piece has a
//           story to tell and each space becomes a canvas for your dreams.
//         </p>

//         <div className="blogcard-list">
//           {blogs.map((category) => (
//             <Blogcard
//               imgSrc={category.imgSrc}
//               url={category.url}
//               title={category.title}
//               description={category.description}
//               button={category.button}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Blog;

import React, { useEffect, useState } from "react";
import Blogcard from "../components/Blogcard";
import "./Blog.css";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(() => {
    const storedPage = sessionStorage.getItem("currentPage");
    return storedPage ? parseInt(storedPage) : 1; // Default to page 1 if not found in sessionStorage
  });
  const blogsPerPage = 4;
  const location = useLocation();
  const navigate = useNavigate();

  // Effect to handle query parameter change in URL (e.g., when navigating with pagination links)
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const page = parseInt(searchParams.get("page")) || currentPage; // Default to page 1 if not provided in query params
    setCurrentPage(page);
  }, [location.search]);

  // Effect to fetch blogs when currentPage changes
  useEffect(() => {
    axios
      .get("http://localhost:3001/api/blogs?page=${currentPage}")
      .then((response) => setBlogs(response.data))
      .catch((error) => console.log(error.message));

    sessionStorage.setItem("currentPage", currentPage.toString());
  }, [currentPage]);

  // Calculate currentBlogs based on currentPage and blogsPerPage
  const startIndex = (currentPage - 1) * blogsPerPage;
  const currentBlogs = blogs.slice(startIndex, startIndex + blogsPerPage);

  // Calculate total pages
  const totalPages = Math.ceil(blogs.length / blogsPerPage);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <div className="blog-container">
        <h1>Our blog</h1>
        <p className="custom-text">
          Welcome to the captivating world of furniture – where each piece has a
          story to tell and each space becomes a canvas for your dreams.
        </p>

        <div className="blogcard-list">
          {currentBlogs.map((blog) => (
            <Blogcard
              key={blog._id}
              imgSrc={blog.imgSrc}
              url={blog.url}
              title={blog.title}
              description={blog.description}
              button={blog.button}
            />
          ))}
        </div>

        <div className="pagination">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              className={currentPage === index + 1 ? "active" : ""}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
