import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import "../styles/OrderCompleted.css";

const OrderCompleted = ( { cartState }) =>{

    return(
        <div className="OrderCompleted-container animate__animated animate__fadeIn">
        <figure className="OrderCompleted-image-container">
            <img src="/img/orderCompleted.svg" alt="Order Completed" className="OrderCompleted-image" />
        </figure>
        <p className="OrderCompleted-text">Tu orden ha sido confirmada!</p>
        <div className="OrderCompleted-button-container" onClick={() => cartState()}>
            <p className="OrderCompleted-button-text">Volver</p>
        </div>
    </div>
    );
}

export default OrderCompleted;