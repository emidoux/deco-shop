import React, { useEffect, useState } from "react";
import "../styles/ProductList.css";
import ProductCard from "./ProductCard";



const ProductList = () =>{
    const API = "https://deco-shop.herokuapp.com/api/products";

    const [product, setProduct] = useState([]);

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