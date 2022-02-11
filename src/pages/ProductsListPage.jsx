import React from "react";
import "../styles/ProducsListPage.css";
import ProductList from "../components/ProductList";

const ProductsListPage = () =>{
    return(
        <div className="productsListPage-container">
            <ProductList />
        </div>
    );
}

export default ProductsListPage;