import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../redux/features/cartSlice";
import "./cart.css";
const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart);

  return (
    <div className="container">
      <div className="row">
        <h3>Cart</h3>
        <div className="cartWrapper">
          {products.map((item) => {
            return (
              <div className="cartCard">
                <img src={item.image} alt="Product" />
                <h5>{item.name}</h5>
                <h5>{item.updatedAt}</h5>

                <button
                  type="button"
                  class="btn btn-danger"
                  onClick={() => dispatch(remove(item.id))}
                >
                  Remove
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Cart;
