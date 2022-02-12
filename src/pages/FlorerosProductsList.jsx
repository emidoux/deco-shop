import React, { useEffect, useState } from "react";
import "../styles/FlorerosProductsList.css";
import ProductCard from "../components/ProductCard";



const FlorerosProductsList = () =>{

    const API = "https://deco-shop.herokuapp.com/api/products";

    const [product, setProduct] = useState([]);

    useEffect(async ()=>{
        const getData = await fetch(API);
        const data = await getData.json();
        const filtered = data.data.filter(item => item.attributes.category === "Floreros")
        console.log(filtered);
        setProduct(filtered);
        
    }, [])


    return(
        <div className="FlorerosProductsList-container">
            {product.map(item => (<ProductCard product={ item } key={product.id} />) )}
        </div>
    );
}

export default FlorerosProductsList;