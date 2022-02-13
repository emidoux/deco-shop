import React, { useEffect, useState } from "react";
import "../styles/RepisasProductsList.css";
import ProductCard from "../components/ProductCard";



const RepisasProductsList = () =>{

    const API = "https://deco-shop.herokuapp.com/api/products";

    const [product, setProduct] = useState([]);

    useEffect(async ()=>{
        const getData = await fetch(API);
        const data = await getData.json();
        const filtered = data.data.filter(item => item.attributes.category === "Repisas")
        setProduct(filtered);
        
    }, [])


    return(
        <div className="RepisasProductsList-container">
            {product.map(item => (<ProductCard product={ item } key={item.id} />) )}
        </div>
    );
}

export default RepisasProductsList;