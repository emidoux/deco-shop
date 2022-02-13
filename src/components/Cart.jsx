import React, { useContext, useState } from "react";
import ProductCartItem from "./ProductCartItem";
import "../styles/Cart.css";
import AppContext from "../context/AppContext";
import OrderCompleted from "./OrderCompleted";

const Cart = ( { stateCart }) => {
  const { state, clearCart } = useContext(AppContext);

  const [orderCompleted, setOrderCompleted] = useState(false);

  const toggleOrderState = () =>{
    setOrderCompleted(!orderCompleted);
  }

  const sumTotal = () => {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.attributes.price;
    const sum = state.cart.reduce(reducer, 0);
    return sum;
  };

  const handdleTotal = () =>{
    if(state.cart.length === 0){
      console.log(state.length);
      return null;
    } else {
      return(toggleOrderState(), clearCart());
    }
  }


  return (
    <div className="Cart-container animate__animated animate__fadeInRight">
      {orderCompleted && <OrderCompleted cartState={ stateCart } />}
      <div className="Cart-title-container">
        <p className="Cart-title-text">Mi Carrito</p>
      </div>
      {state.cart.map((item) => (
        <ProductCartItem product={item} key={item.id} />
      ))}
      <div className="Cart-total-container" onClick={() => handdleTotal() }>
        <p className="Cart-total-checkoutText">Checkout</p>
        <span className="Cart-total-count">Total $ {sumTotal()}</span>
      </div>
    </div>
  );
};

export default Cart;
