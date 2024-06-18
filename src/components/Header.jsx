import React from "react";
import { FaUser } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import "./Header.css";
import { Link } from "react-router-dom";

const categories = [
  { name: "stolice" },
  { name: "stolovi" },
  { name: "kauci" },
  { name: "vrata" },
];

function Header() {
  return (
    <header>
      <div className="header-container">
        <div className="custom-heading">
          <Link to="/" className="link title">
            casa del mar
          </Link>
        </div>
        <nav>
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
            <IoSearch />
            <Link to="/user" className="icon">
              <FaUser />
            </Link>
          </ul>
        </nav>

        {/* {categories.map((category)=>{
                    return (
                        // <Card category={category}/>
                        // <h1>{category.name}</h1>

                    )
                })} */}
      </div>
    </header>
  );
}

export default Header;
