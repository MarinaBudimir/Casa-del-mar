import React from "react";
import { FaUser } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import "./Header.css";

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
        <h2 class="custom-heading">casa del mar</h2>
        <nav>
          <ul>
            <li>
              <a href="">home</a>
            </li>
            <li>
              <a href="">about</a>
            </li>
            <li>
              <a href="">products</a>
            </li>
            <li>
              <a href="">blog</a>
            </li>
            <IoSearch />
            <FaUser />
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
