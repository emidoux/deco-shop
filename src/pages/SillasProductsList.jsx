/**
 * <SillasProductsList> es un componente que contiene al listado de productos obtenidos
 * por medio del Fetch a la API y se los filtra por categoria "Sillas".
 */

import React, { useEffect, useState } from "react";
import "../styles/SillasProductsList.css";
import ProductCard from "../components/ProductCard";



const SillasProductsList = () =>{

    const API = "https://deco-shop.herokuapp.com/api/products"; //URL de la API

    const [product, setProduct] = useState([]); //Estado inicial de productos

    
    /**
     * Este Hook realiza el Fetch a la API, luego de que se cumple la
     * promesa, establece la respuesta como un array con la data del Fetch
     * y vuelve a renderizar el componente, listando las Sillas en el DOM.
     */
    useEffect(async ()=>{
        const getData = await fetch(API);
        const data = await getData.json();
        const filtered = data.data.filter(item => item.attributes.category === "Sillas") //Filtro del array con elementos "Sillas".
        setProduct(filtered);
        
    }, [])


    return(
        <div className="SillasProductsList-container">
            {product.map(item => (<ProductCard product={ item } key={item.id} />) )}
        </div>
    );
}

export default SillasProductsList;