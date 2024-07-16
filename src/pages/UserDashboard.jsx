import React, { useEffect, useState } from "react";
import "./UserDashboard.css";
import axios from "axios";
import Card from "../components/Card";
import Salescard from "../components/Card";
import { Link } from "react-router-dom";

function UserDashboard() {
  const [favorites, setFavorites] = useState([]);
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/favorites")
      .then((response) => {
        setFavorites(response.data);
      })
      .catch((error) => console.error("Error fetching favorites:", error));
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/carts")
      .then((response) => {
        setCarts(response.data);
      })
      .catch((error) => console.error("Error fetching carts:", error));
  }, []);

  const handleHeartClick = (index) => {
    const favorite = favorites[index];

    // Remove favorite from database
    axios
      .delete("http://localhost:3001/api/favorites/${favorite._id}")
      .then(() => {
        // Remove favorite from state
        const updatedFavorites = favorites.filter((_, i) => i !== index);
        setFavorites(updatedFavorites);
      })
      .catch((error) => console.error("Error deleting favorite:", error));
  };

  const handleCartDelete = (index) => {
    const cart = carts[index];

    // Remove cart item from database
    axios
      .delete("http://localhost:3001/api/carts/${cart._id}")
      .then(() => {
        // Remove cart item from state
        const updatedCarts = carts.filter((_, i) => i !== index);
        setCarts(updatedCarts);
      })
      .catch((error) => console.error("Error deleting cart:", error));
  };

  return (
    <main>
      <div className="userdashboard-container">
        <h1>Hello!</h1>
        <p>
          Welcome to your personal dashboard. Here you can manage your
          favorites, add or remove items, and easily navigate your cart and
          previous purchases.
        </p>
        <h2>Your cart</h2>
        <ul className="cart-container">
          {carts.map((i) => (
            <Salescard
              key={i._id}
              name={i.name}
              imgSrc={i.imgSrc}
              size={i.size}
              url={i.url}
              price={i.price}
              quantity={i.quantity}
            />
          ))}
        </ul>
        <p>Total amount: </p>
        <Link className="checkout-button">Proceed to checkout</Link>
        <p></p>

        <h2>Your favorites</h2>

        <ul className="fav-container">
          {favorites.map((category) => (
            <Card
              key={category._id}
              name={category.name}
              imgSrc={category.imgSrc}
              showHeart={true} // Always show heart icon in favorites
              isFavorite={true}
              url={category.url}
            />
          ))}
        </ul>
      </div>
    </main>
  );
}

export default UserDashboard;
