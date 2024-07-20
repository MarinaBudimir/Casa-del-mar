// import React, { useState } from "react";
// import "./Card.css";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

// function Card({ name, showHeart, imgSrc, url, price }) {
//   const [isHeartFilled, setIsHeartFilled] = useState(false);

//   const handleHeartClick = (e) => {
//     e.preventDefault(); // Prevent default action of the click (navigation)
//     setIsHeartFilled(!isHeartFilled);
//   };

//   const addToFavorites = () => {
//     axios.post("http://localhost:3001/api/favorites", { name: name });
//   };

//   return (
//     <Link to={url} className="card">
//       <h2>{name}</h2>
//       {showHeart && (
//         <div onClick={handleHeartClick}>
//           {isHeartFilled ? (
//             <AiFillHeart
//               className="heart-icon"
//               style={{ color: "#3e3628" }}
//               onClick={addToFavorites}
//             />
//           ) : (
//             <AiOutlineHeart
//               className="heart-icon"
//               style={{ color: "#3e3628" }}
//             />
//           )}
//         </div>
//       )}
//       <img src={imgSrc} alt="" />
//       <p>{price}</p>
//     </Link>
//   );
// }

// export default Card;
import React, { useState } from "react";
import "./Card.css";
import { Link } from "react-router-dom";
import axios from "axios";

function Card({ name, imgSrc, url, price, quantity }) {
  // const handleHeartClick = (e) => {
  //   e.preventDefault(); // Prevent default action of the click (navigation)

  //   setIsHeartFilled(!isHeartFilled);

  //   if (isHeartFilled) {
  //     setIsHeartFilled(false);
  //     deleteFromFavorites();
  //   } else {
  //     setIsHeartFilled(true);
  //     addToFavorites();
  //   }
  // };

  const addToFavorites = () => {
    axios
      .post("http://localhost:3001/api/favorites", { name: name })
      .then((response) => {
        console.log("Added to favorites:", response.data);
      })
      .catch((error) => {
        console.error("There was an error adding to favorites!", error);
      });
  };

  const deleteFromFavorites = () => {
    axios
      .delete("http://localhost:3001/api/favorites", { name: name })
      .then((response) => {
        console.log("Deleted from favorites:", response.data);
      })
      .catch((error) => {
        console.error("There was an error deleting from favorites!", error);
      });
  };

  return (
    <Link to={url} className="card">
      <h2>{name}</h2>
      <p>{quantity}</p>
      <img src={imgSrc} alt="" />
      <p>{price}</p>
    </Link>
  );
}

export default Card;
