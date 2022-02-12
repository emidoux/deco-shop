import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "animate.css";
import NavBar from "./NavBar";
import AppContext from "../context/AppContext";
import useInitialState from "../hooks/useInitialState";
import ProductsListPage from "../pages/ProductsListPage";
import CategoriesListPage from "../pages/CategoriesListPage";
import SillasProductsList from "../pages/SillasProductsList";
import FlorerosProductsList from "../pages/FlorerosProductsList";
import RepisasProductsList from "../pages/RepisasProductsList";

function App() {
  const initialState = useInitialState();

  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="*" element={ <ProductsListPage /> } />
          <Route path="categories" element={ <CategoriesListPage /> }/>
          <Route path="ProductsListPage" element={ <ProductsListPage /> } />
          <Route path="categories/SillasProductsList" element={ <SillasProductsList />} />
          <Route path="categories/FlorerosProductsList" element={ <FlorerosProductsList />} />
          <Route path="categories/RepisasProductsList" element={ <RepisasProductsList />} />
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
