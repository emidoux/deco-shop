import React from "react";
import "../styles/CategoryCard.css";

const CategoryCard = ( {category} ) =>{
    return(
        <div className="CategoryCard-container">
            <figure className="CategoryCard-image-container">
                <img className="CategoryCard-image" src={category.attributes.image} alt={category.attributes.name} />
            </figure>
        <p className="CategoryCard-title">
            {category.attributes.name}
        </p>
    </div>
    );
}

export default CategoryCard;