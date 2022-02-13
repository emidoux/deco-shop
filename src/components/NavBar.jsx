import React, { useState, useContext } from "react";
import Menu from "./Menu";
import Cart from "./Cart";
import AppContext from "../context/AppContext";
import "../styles/NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () =>{

    const { state } = useContext(AppContext);

    const [toggleMenu, setToggleMenu] = useState(false);

    const handleToggleMenu = () =>{
        setToggleMenu(!toggleMenu);
    }

    const [toggleCart, setToggleCart] = useState(false);

    const handleToggleCart = () =>{
        setToggleCart(!toggleCart);
    }

    return (
        <nav className="NavBar-container">
        {toggleMenu && <Menu stateChanger={ setToggleMenu } stateMenu= {toggleMenu} />}
        <figure className="NavBar-menu-container">
            <img className="NavBar-menu-image" src="/img/menuIcon.svg" alt="Menu image" onClick={ handleToggleMenu } />
        </figure>
        <Link to="ProductsListPage" className="NavBar-logo-wrapper">
        <div className="NavBar-logo-container">
            <img className="NavBar-logo-image" src="/img/logo.svg" alt="Logo image" />
            <p className="NavBar-logo-title">
                Deco Shop
            </p>
        </div>
        </Link>
        <figure className="NavBar-cart-container" onClick={ handleToggleCart }>
            <img className="NavBar-cart-image" src="/img/cart.svg" alt="Cart image" />
            {state.cart.length > 0 ? <span className="NavBar-cart-counter">{state.cart.length}</span> : null}
        </figure>
        {toggleCart && <Cart stateCart={ handleToggleCart }/>}
    </nav>
    );
}

export default NavBar;