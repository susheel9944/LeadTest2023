import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const cartItem = useSelector((state) => state.cart);
  console.log("cart item", cartItem[0]);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <span className="logo">Shoping</span>
      <div>
        <Link to="/" className="navLink">
          Home
        </Link>
        <Link to="/cart" className="navLink">
          Cart
        </Link>

        <span className="cartCount">Cart Items:{cartItem.length} </span>
      </div>
    </div>
  );
};

export default Navbar;
