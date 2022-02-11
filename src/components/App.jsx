import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "animate.css";
import NavBar from "./NavBar";
import Layout from "./Layout";
import ProductList from "./ProductList";
import AppContext from "../context/AppContext";
import useInitialState from "../hooks/useInitialState";
import CategoryList from "./CategoryList";
import ProductsListPage from "../pages/ProductsListPage";
import CategoriesListPage from "../pages/CategoriesListPage";
import NotFound from "../pages/NotFound";

function App() {
  const initialState = useInitialState();

  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ProductsListPage />} />
          <Route path="categories" element={ <CategoriesListPage /> }/>
          <Route path="*" element={ <NotFound /> } />
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
