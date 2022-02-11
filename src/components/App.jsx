import React from "react";
import "animate.css";
import NavBar from "./NavBar";
import Layout from "./Layout";
import ProductList from "./ProductList";
import AppContext from "../context/AppContext";
import useInitialState from "../hooks/useInitialState";

function App() {

  const initialState = useInitialState();

  return (
    <AppContext.Provider value = {initialState}>
      <Layout>
        <NavBar />
        <ProductList />
      </Layout>
    </AppContext.Provider>
  );
}

export default App;
