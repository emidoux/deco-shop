import React, { useContext } from "react";
import "../styles/ProductCard.css";
import AppContext from "../context/AppContext";

const ProductCard = ( {product} ) =>{

    const { state, addToCart } = useContext(AppContext);

    const verifyIdNotExist = (id) => {
        const idExist = state.cart.some(item => item.id === id)
    
        if(idExist) {
          return verifyIdNotExist(id + 1);
        } else {
          return id;
        }
      }

    const handleCart = (item) =>{
        const newId = verifyIdNotExist(item.id);
       addToCart(item, newId);
    }

    return(
        <div className="ProductCard-container">
            <figure className="ProductCard-image-container">
                <img className="ProductCard-image" src={product.attributes.image} alt={product.attributes.name} />
            </figure>
        <p className="ProductCard-title">
            {product.attributes.name}
        </p>
        <p className="ProductCard-category">
            {product.attributes.category}
        </p>
        <div className="ProductCard-footer-container">
            <p className="ProductCard-price">
                ${product.attributes.price}
            </p>
            <img className="ProductCard-addButton" src="/img/addIcon.svg" alt="Add to cart" onClick={() => handleCart(product)} />
        </div>
    </div>
    );
};

export default ProductCard;