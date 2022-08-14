import React from "react";
import Mynavbar from "./components/Mynavbar/Mynavbar";
/*Estilos propios */
import "./components/Mynavbar/Mynavbar.css";

function App() {
  return (
    <div>
      <header>
      <Mynavbar></Mynavbar>
      <h1>ArmorGamesVL<span>ReactJS</span></h1>
      </header>
    </div>
  );
}

export default App;
