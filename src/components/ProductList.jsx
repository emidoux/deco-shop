/**
 * <ProductList> es un componente que contiene al listado de productos obtenidos
 * por medio del Fetch a la API. Este componente realiza el Fetch y
 * proporciona la informacion para cada componente individual.
 */

import React, { useEffect, useState } from "react";
import "../styles/ProductList.css";
import ProductCard from "./ProductCard";



const ProductList = () =>{
    const API = "https://deco-shop.herokuapp.com/api/products"; // URL de la API

    const [product, setProduct] = useState([]); // State para manejar el stado del carro de compras.

    /**
     * Este Hook realiza el Fetch a la API, luego de que se cumple la
     * promesa, establece el estado de {product} como un array con la data del Fetch
     * y vuelve a renderizar el componente, listando los productos en el DOM.
     */
    useEffect(async () =>{
        const getData = await fetch(API);
        const data = await getData.json();
        setProduct(data.data)
    },[])

    return(
        <div className="ProductList-container">
            {product.map(item => (<ProductCard product={item} key={item.id}/>) )}
        </div>
    );
};

export default ProductList;