/**
 * <Menu> Es un componente que renderiza la vista del menú de la aplicación.
 * Contiene los enlaces para las rutas de vistas de productos y categorias.
 */

import React from "react";
import { Link } from "react-router-dom";
import "/src/styles/Menu.css";

const Menu = ( {stateChanger, stateMenu}) => { // {stateChanger} alterna la vista del menú 
  //y {stateMenu} informa sobre el estado de la vista.
  return (
    <div className="Menu-container animate__animated animate__fadeInLeft">
      <div className="Menu-userInfo-container">
        <figure className="Menu-userInfo-image-container">
          <img
            src="/img/user.svg"
            alt="User image"
            className="Menu-userInfo-image"
          />
        </figure>
        <div className="Menu-userInfo-data-container">
          <p className="Menu-userInfo-name">Agustín Ramirez</p>
          <p className="Menu-userInfo-email">agustin.ramirez@gmail.com</p>
        </div>
      </div>
      <Link className="Menu-wrapperLink" to="productsListPage" onClick={() => stateChanger(!stateMenu)}>
      <div
        className="Menu-listElement-container"
        id="Menu-listElement-container-first"
      >
        <div className="Menu-listElement-subContainer">
          <figure className="Menu-listElement-icon-container">
            <img
              src="/img/orderIcon.svg"
              alt="Order icon"
              className="Menu-listElement-icon"
            />
          </figure>
          <p className="Menu-listElement-title">Inicio</p>
        </div>
        <figure className="Menu-listElement-arrow-container">
          <img
            src="/img/arrowIcon.svg"
            alt="Arrow icon"
            className="Menu-listElement-arrow"
          />
        </figure>
      </div>
      </Link>
      <Link className="Menu-wrapperLink" to="categories" onClick={() => stateChanger(!stateMenu)}>
      <div className="Menu-listElement-container">
        <div className="Menu-listElement-subContainer">
          <figure className="Menu-listElement-icon-container">
            <img
              src="/img/orderIcon.svg"
              alt="Order icon"
              className="Menu-listElement-icon"
            />
          <p className="Menu-listElement-title">Categorias</p>
          </figure>
        </div>
        <figure className="Menu-listElement-arrow-container">
          <img
            src="/img/arrowIcon.svg"
            alt="Arrow icon"
            className="Menu-listElement-arrow"
          />
        </figure>
      </div>
      </Link>
    </div>
  );
};

export default Menu;
