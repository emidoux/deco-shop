import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import "../styles/ProductCartItem.css";

const ProductCartItem = ({ product }) => {
  const { removeFromCart } = useContext(AppContext);

  const handdleRemove = (productToDelete) => {
    removeFromCart(productToDelete);
  };

  return (
    <div className="Cart-product-container">
      <figure className="Cart-product-image-container">
        <img
          src={product.attributes.image}
          alt={product.attributes.name}
          className="Cart-product-image"
        />
      </figure>
      <div className="Cart-product-body-container">
        <div className="Cart-product-body-info-container">
          <p className="Cart-product-body-info-title">
            {product.attributes.name}
          </p>
          <p className="Cart-product-body-info-category">
            {product.attributes.category}
          </p>
        </div>
      </div>
      <div className="Cart-product-options-container">
        <figure
          className="Cart-product-options-delete-container"
          onClick={() => handdleRemove(product)}
        >
          <img
            src="/img/deleteIcon.svg"
            alt="Eliminar producto"
            className="Cart-product-options-delete-image"
          />
        </figure>
        <p className="Cart-product-options-price">
          ${product.attributes.price}
        </p>
      </div>
    </div>
  );
};

export default ProductCartItem;
