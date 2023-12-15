import React, { useEffect, useState } from "react"
import '../styles/home.css'

const Home = () => {
    const [numLines, setNumLines] = useState(0);

    useEffect(() => {
      const calculateNumLines = () => {
        // Obtén el ancho de la pantalla
        const screenWidth = window.innerWidth;
  
        // Calcula el número de líneas que caben en la pantalla
        const linesFitInScreen = Math.floor(screenWidth / 150); // 30 es el ancho estimado de una línea
  
        setNumLines(linesFitInScreen);
      };
  
      // Llama a la función para calcular el número de líneas al montar el componente y cuando cambia el tamaño de la pantalla
      calculateNumLines();
      window.addEventListener('resize', calculateNumLines);
  
      // Limpia el event listener al desmontar el componente
      return () => {
        window.removeEventListener('resize', calculateNumLines);
      };
    }, []);
  
    const generateLines = () => {
      const lines = [];
      for (let i = 0; i < numLines; i++) {
        lines.push(<div key={i} className="vertical-line"></div>);
      }
      return lines;
    };
  
    return (
      <div className="home-page">
        <h1>Bienvenido a nuestra página de inicio</h1>
        <div className="vertical-lines">{generateLines()}</div>
      </div>
    );
  };

export default Home;