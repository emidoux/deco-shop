/**
 * <ProductyCard> es un componente que recrea la vista individual de cada tarjeta
 * de producto listadas. Recive {product} como prop para mostrar los datos individuales
 * de los productos obtenidos.
 */

import React, { useContext, useState } from "react";
import "../styles/ProductCard.css";
import AppContext from "../context/AppContext";

const ProductCard = ({ product }) => {
  const { state, addToCart } = useContext(AppContext); //Global context

  const [animated, setAnimated] = useState(false); // State dedicado a generar animación.


  /**
   * isAnimatedButton() comprueba si las clases del botón con
   * que se interactua contiene la correspondiente para
   * generar la animación. Regresa el valor correspondiente en
   * el state {animated} como true o false.
   */
  const isAnimatedButton = () => {
    return animated;
  }

  /**
   * animateButton() alterna el estado de animacion del elemento del que dispara
   * el evento. En este caso, si el boton no contiene animacion (animated = false),
   * lo alterna.
   */
  const animateButton = () =>{
      setAnimated(!animated);
  }

  /**
   * verifyIdNotExist() Es una función recursiva que comprueba que el ID del
   * producto a ingresar, no exista previamente en el estado del carro de compras,
   * tanto como para evitar crear un array de elementos con mismo ID como KEY y React permita
   * un renderizado correcto en el DOM, como para poder eliminar productos del carro
   * sin inconvenientes con ID.
   */
  const verifyIdNotExist = (id) => {
        const idExist = state.cart.some((item) => item.id === id);

        if (idExist) {
        return verifyIdNotExist(id + 1);
        } else {
        return id;
        }
    };


    /**
     * handleCart() añade el producto que ejecuta dicha función
     * a el carrito de compras. Previamente validando el manejo
     * del ID con la funcion verifyIdNotExist().
     */
    const handleCart = (item) => {
      const newId = verifyIdNotExist(item.id);
      addToCart(item, newId);
    };

  return (
    <div className="ProductCard-container">
      <figure className="ProductCard-image-container">
        <img
          className="ProductCard-image"
          src={product.attributes.image}
          alt={product.attributes.name}
        />
      </figure>
      <p className="ProductCard-title">{product.attributes.name}</p>
      <p className="ProductCard-category">{product.attributes.category}</p>
      <div className="ProductCard-footer-container">
        <p className="ProductCard-price">${product.attributes.price}</p>
        <img
          className={isAnimatedButton() ? "ProductCard-addButton animate__animated animate__fadeIn" : "ProductCard-addButton"} //Comprueba si requiere animación.
          onAnimationEnd={()=> animateButton()} //Elimina la animación del botón luego de utilizarla.
          src="/img/addIcon.svg"
          alt="Add to cart"
          onClick={() => (handleCart(product), animateButton())}
        />
      </div>
    </div>
  );
};

export default ProductCard;
