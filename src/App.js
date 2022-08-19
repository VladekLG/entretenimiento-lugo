import React from "react";
/*My Components */
import Mynavbar from "./components/Mynavbar/Mynavbar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
/*My Own Styles*/
import "./components/Mynavbar/Mynavbar.css";



function App() {
  return (
    <div>
      <header>
         {/* Modificar H1 con MediaQuerys*/}
        <h1>
          ArmorGames&Comics/Mangas<span>ReactJS</span>
        </h1>
        <Mynavbar msg="Hola soy un componente"></Mynavbar>
      </header>
        <ItemListContainer greeting='Catalogo Provisional'/>
    </div>
  );
}

export default App;
