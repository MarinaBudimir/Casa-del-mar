import React, { useEffect, useState } from "react";
import "./UserDashboard.css";
import axios from "axios";
import FavCard from "../components/FavCard";
import { Link } from "react-router-dom";
import CartCard from "../components/CartCard";

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

  const handleFavoriteDelete = (id) => {
    axios
      .delete(`http://localhost:3001/api/favorites/${id}`)
      .then(() => {
        setFavorites((prevFavorites) =>
          prevFavorites.filter((favorite) => favorite._id !== id)
        );
      })
      .catch((error) => console.error("Error deleting favorite:", error));
  };

  const handleCartDelete = (id) => {
    axios
      .delete(`http://localhost:3001/api/carts/${id}`)
      .then(() => {
        setCarts((prevCarts) => prevCarts.filter((cart) => cart._id !== id));
      })
      .catch((error) => console.error("Error deleting cart:", error));
  };

  // Function to calculate the total amount
  const calculateTotalAmount = () => {
    return carts.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  };

  // Format the total amount to use comma as decimal separator
  const formatAmount = (amount) => {
    return amount.toFixed(2).replace(".", ",");
  };

  const totalAmount = formatAmount(calculateTotalAmount());

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
            <CartCard
              key={i._id}
              name={i.name}
              imgSrc1={i.imgSrc1}
              size={i.size}
              url={i.url}
              price={i.price}
              quantity={i.quantity}
              onDelete={() => handleCartDelete(i._id)}
            />
          ))}
        </ul>

        <p className="total">Total amount: {totalAmount} €</p>
        <Link className="checkout-button">Proceed to checkout</Link>

        <h2>Your favorites</h2>
        <ul className="fav-container">
          {favorites.map((category) => (
            <FavCard
              key={category._id}
              name={category.name}
              imgSrc1={category.imgSrc1}
              url={category.url}
              onDelete={() => handleFavoriteDelete(category._id)}
            />
          ))}
        </ul>
      </div>
    </main>
  );
}

export default UserDashboard;
