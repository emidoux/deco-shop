import React, { useContext } from "react";
import ProductCartItem from "./ProductCartItem";
import "../styles/Cart.css";
import AppContext from "../context/AppContext";

const Cart = () => {
  const { state } = useContext(AppContext);

  const sumTotal = () => {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.attributes.price;
    const sum = state.cart.reduce(reducer, 0);
    return sum;
  };


  return (
    <div className="Cart-container animate__animated animate__fadeInRight">
      <div className="Cart-title-container">
        <p className="Cart-title-text">Mi Carrito</p>
      </div>
      {state.cart.map((item) => (
        <ProductCartItem product={item} key={item.id} />
      ))}
      <div className="Cart-total-container">
        <p className="Cart-total-checkoutText">Checkout</p>
        <span className="Cart-total-count">Total ${sumTotal()}</span>
      </div>
    </div>
  );
};

export default Cart;
