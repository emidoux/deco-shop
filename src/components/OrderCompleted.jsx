/**
 * <OrderCompleted> estructura la vista de "orden completada", que se renderiza
 *  luego de presionar el botón "checkout" en <Cart>.
 */

import React from "react";
import "../styles/OrderCompleted.css";

const OrderCompleted = ( { cartState }) =>{ //{cartState} importa como Prop la función para
    //cerrar <Cart> y establecer el carro de compras como un array vacío nuevamente.

    return(
        <div className="OrderCompleted-container animate__animated animate__fadeIn">
        <figure className="OrderCompleted-image-container animate__animated animate__pulse">
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