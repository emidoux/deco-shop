/**
 * useInitialState corresponde a la lógica inicial para el State de la aplicación.
 */

import { useState } from "react";

/**
 * Creación de un "cart" para referenciar a la lista 
 * de productos del carro de compras.
 */
const InitialState = {
    cart: [],
};


/**
 * useInitialState() establece la lógica de estado para la APP.
 * 
 */
const useInitialState = () =>{
    const [state, setState] = useState(InitialState); //Estado que utiliza el InitialState para
    //inicializar el estado del carro de compras.

    /**
     * addToCart() recibe un producto y un ID para añadirlos al carro de compras.
     */

    const addToCart = (payload,newId) =>{
        const newProduct = {...payload, id: newId};
        setState({
            ...state,
            cart: [...state.cart, newProduct]
        });
    };

    /**
     * removeFromCart() recibe un producto para removerlo del carro de compras.
     * por medio de filter().
     */

    const removeFromCart = (payload) =>{
        setState({
            ...state,
            cart: state.cart.filter(items => items.id != payload.id),
        });
    }

    /**
     * clearCart() establece el estado de del carro de compras,
     * nuevamente como un array vacío.
     */
    const clearCart = () =>{
        setState({
            ...state,
            cart: []
        });
    }


    return {
        state,
        addToCart,
        removeFromCart,
        clearCart
    }
};

export default useInitialState;