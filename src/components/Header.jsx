// import React from "react";
// import { FaUser } from "react-icons/fa6";
// import { IoSearch } from "react-icons/io5";
// import "./Header.css";
// import { Link } from "react-router-dom";

// import { FaBars, FaTimes } from "react-icons/fa";

// function Header() {
//   return (
//     <header>
//       <div className="header-container">
//         <div className="custom-heading">
//           <Link to="/" className="link title">
//             casa del mar
//           </Link>
//         </div>
//         <nav>
//           <ul>
//             <li>
//               <Link to="/">home</Link>
//             </li>
//             <li>
//               <Link to="/about">about</Link>
//             </li>
//             <li>
//               <Link to="/products">products</Link>
//             </li>
//             <li>
//               <Link to="/blog">blog</Link>
//             </li>
//             <IoSearch />
//             <Link to="/user" className="icon">
//               <FaUser />
//             </Link>
//           </ul>
//         </nav>
//       </div>
//     </header>
//   );
// }

// export default Header;

import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaUser } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const checkWindowSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", checkWindowSize);

    return () => {
      window.removeEventListener("resize", checkWindowSize);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    document.body.classList.toggle("no-scroll");
  };

  const closeMenu = () => {
    setMenuOpen(false);
    document.body.classList.remove("no-scroll");
  };

  return (
    <header>
      <div className="header-container">
        <div className="custom-heading">
          <Link to="/" className="link title">
            casa del mar
          </Link>
        </div>
        {isMobile ? (
          <>
            <FaBars className="menu-icon" onClick={toggleMenu} />
            {menuOpen && (
              <nav className="nav-menu">
                <FaTimes className="close-icon" onClick={closeMenu} />
                <ul>
                  <li>
                    <Link to="/" onClick={closeMenu}>
                      home
                    </Link>
                  </li>
                  <li>
                    <Link to="/about" onClick={closeMenu}>
                      about
                    </Link>
                  </li>
                  <li>
                    <Link to="/products" onClick={closeMenu}>
                      products
                    </Link>
                  </li>
                  <li>
                    <Link to="/blog" onClick={closeMenu}>
                      blog
                    </Link>
                  </li>
                  <li>
                    <IoSearch />
                  </li>
                  <li>
                    <Link to="/user" onClick={closeMenu}>
                      <FaUser />
                    </Link>
                  </li>
                </ul>
              </nav>
            )}
          </>
        ) : (
          <nav className="nav-menu">
            <ul>
              <li>
                <Link to="/">home</Link>
              </li>
              <li>
                <Link to="/about">about</Link>
              </li>
              <li>
                <Link to="/products">products</Link>
              </li>
              <li>
                <Link to="/blog">blog</Link>
              </li>
              <li>
                <IoSearch />
              </li>
              <li>
                <Link to="/user">
                  <FaUser />
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
