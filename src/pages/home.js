import React, { useEffect, useState } from "react"
import '../styles/home.css'

const Home = () => {

  return (
    <div className="home-page">


      <div className="title-container">
        <h1 className="neon-text">Página de Inicio</h1>
        <p className="subtitle">¡Explora el mundo gaming neon!</p>
      </div>

      <div className="button-container">
        <button className="neon-button">Botón 1</button>
        <button className="neon-button">Botón 2</button>
        <button className="neon-button">Botón 3</button>
      </div>
      <div className="floor-container">
        <div className="floor-left">

        </div>
        <div className="floor-center">

        </div>
        <div className="floor-right">

        </div>
        <div className="grid-container">
          {/* Líneas horizontales */}
          <div className="grid-line"></div>
          <div className="grid-line"></div>
          <div className="grid-line"></div>
          {/* ... otras líneas horizontales ... */}

          {/* Líneas verticales */}
          <div className="grid-line vertical"></div>
          <div className="grid-line vertical"></div>
          <div className="grid-line vertical"></div>
          <div className="grid-line vertical"></div>
          <div className="grid-line vertical"></div>
          {/* ... otras líneas verticales ... */}
        </div>
      </div>
    </div>
  );
};

export default Home;