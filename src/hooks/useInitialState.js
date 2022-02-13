import { useState } from "react";

const InitialState = {
    cart: [],
};

const useInitialState = () =>{
    const [state, setState] = useState(InitialState);

    const addToCart = (payload,newId) =>{
        const newProduct = {...payload, id: newId};
        setState({
            ...state,
            cart: [...state.cart, newProduct]
        });
    };

    const removeFromCart = (payload) =>{
        setState({
            ...state,
            cart: state.cart.filter(items => items.id != payload.id),
        });
    }

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