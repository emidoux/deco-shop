import React, { useEffect, useState } from "react";
import "../styles/CategoryList.css";
import CategoryCard from "./CategoryCard";



const CategoryList = () =>{
    const API = "https://deco-shop.herokuapp.com/api/categories";

    const [category, setCategory] = useState([]);

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