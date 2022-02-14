/**
 * El componente <Cart> repesenta el contenedor general
 * para la vista del carrito de compras.
 * 
 * Contiene {orderCompleted} como estado para alternar la vista de confirmación de pedidos.
 * 
 */


import React, { useContext, useState } from "react";
import ProductCartItem from "./ProductCartItem";
import "../styles/Cart.css";
import AppContext from "../context/AppContext";
import OrderCompleted from "./OrderCompleted";

const Cart = ( { stateCart }) => { // {stateCart} envia por Props una funcion (handdleToggleCart) la vista del carrito.

  const { state, clearCart } = useContext(AppContext); // Instancia de Context

  const [orderCompleted, setOrderCompleted] = useState(false); // State para alternar la vista de {OrderCompleted}

  /**
   * {toggleOrderState} alterna el estado (true/false) de {OrderCompleted}
   * con el uso de {setOrderCompleted}.
   */
  const toggleOrderState = () =>{
    setOrderCompleted(!orderCompleted);
  }

  /**
   * {sumTotal} es una funcion que por medio de reduce() , suma el valor
   * del precio de todos los productos del carrito {state}
   * y devuelve un precio total con {sum}.
   */
  const sumTotal = () => {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.attributes.price;
    const sum = state.cart.reduce(reducer, 0);
    return sum;
  };

  /**
   * {handdleTotal} es una función que valida lo siguiente:
   * si el carrito de compras {state} no tiene productos, no produce efecto.
   * Pero si el carrito de compras contiene al menos un producto,
   * muestra la vista de {OrderCompleted} a la ves que elimina
   * todos los elementos del carro de compras.
   */
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
