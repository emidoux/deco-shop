/**
 * <CategoryCard> es un componente que recrea la vista individual de cada tarjeta
 * de categorias listadas. Recive {category} como prop para mostrar los datos individuales
 * de las categorias obtenidas por Fetch a la API.
 */

import React from "react";
import "../styles/CategoryCard.css";
import { Link } from "react-router-dom";

const CategoryCard = ( {category} ) =>{
    return(
        <Link to={`${category.attributes.name}ProductsList`} className="CategoryCard-title-wrappper">
        <div className="CategoryCard-container">
            <figure className="CategoryCard-image-container">
                <img className="CategoryCard-image" src={category.attributes.image} alt={category.attributes.name} />
            </figure>
            <p className="CategoryCard-title">
                {category.attributes.name}
            </p>
        </div>
        </Link>
    );
}

export default CategoryCard;