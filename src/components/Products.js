import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartData } from "../redux/features/fatchCartData";
import { add } from "../redux/features/cartSlice";
const Products = () => {
  const dispatch = useDispatch();

  const listCartData = useSelector((state) => state.cartData);
  const productList = listCartData?.data[0];
  useEffect(() => {
    dispatch(getCartData());
  }, []);

  console.log("product Data", productList);
  return (
    <div class="container">
      <div class="row">
        {productList?.map((item) => {
          return (
            <div
              className="card"
              style={{ width: "18rem", margin: "10px" }}
              key={item.id}
            >
              <img
                className="card-img-top"
                src={item.image}
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <button
                  className="btn btn-primary"
                  onClick={() => dispatch(add(item))}
                >
                  add to Cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
