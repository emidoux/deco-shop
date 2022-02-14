/**
 * <CategoryList> es un componente que contiene al listado de categorias obtenidos
 * por medio del Fetch a la API. Este componente realiza el Fetch y
 * proporciona la informacion para cada componente individual.
 */


import React, { useEffect, useState } from "react";
import "../styles/CategoryList.css";
import CategoryCard from "./CategoryCard";



const CategoryList = () =>{
    const API = "https://deco-shop.herokuapp.com/api/categories"; // API contiene la URL de la API a consumir.

    const [category, setCategory] = useState([]); // Estado inicial para la lista de categorias.

    
    /**
     * Este Hook realiza el Fetch a la API, luego de que se cumple la
     * promesa, establece el estado de {category} como un array con la data del Fetch
     * y vuelve a renderizar el componente, listando los productos en el DOM.
     */
    useEffect(async () =>{
        const getData = await fetch(API);
        const data = await getData.json();
        setCategory(data.data)
    },[])

    return(
        <div className="CategoryList-container">
            {category.map(item => (<CategoryCard category={item} key={item.id}/>) )}
        </div>
    );
};

export default CategoryList;