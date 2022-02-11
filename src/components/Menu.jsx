import React from "react";
import "/src/styles/Menu.css";

const Menu = () => {
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
      <div className="Menu-listElement-container">
        <div className="Menu-listElement-subContainer">
          <figure className="Menu-listElement-icon-container">
            <img
              src="/img/orderIcon.svg"
              alt="Order icon"
              className="Menu-listElement-icon"
            />
          </figure>
          <p className="Menu-listElement-title">Categorias</p>
        </div>
        <figure className="Menu-listElement-arrow-container">
          <img
            src="/img/arrowIcon.svg"
            alt="Arrow icon"
            className="Menu-listElement-arrow"
          />
        </figure>
      </div>
      <div className="Menu-listElement-container">
        <div className="Menu-listElement-subContainer">
          <figure className="Menu-listElement-icon-container">
            <img
              src="/img/orderIcon.svg"
              alt="Order icon"
              className="Menu-listElement-icon"
            />
          </figure>
          <p className="Menu-listElement-title">Productos</p>
        </div>
        <figure className="Menu-listElement-arrow-container">
          <img
            src="/img/arrowIcon.svg"
            alt="Arrow icon"
            className="Menu-listElement-arrow"
          />
        </figure>
      </div>
    </div>
  );
};

export default Menu;
