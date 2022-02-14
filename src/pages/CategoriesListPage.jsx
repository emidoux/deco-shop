/**
 * Layout que renderiza una lista de categorias con <CategoryList>
 */
import React from "react";
import "../styles/CategoriesListPage.css";
import CategoryList from "../components/CategoryList";

const CategoriesListPage = () =>{
    return(
        <div className="CategoriesListPage-container">
            <CategoryList />
        </div>
    );
}

export default CategoriesListPage;