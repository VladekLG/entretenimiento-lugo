import React from "react";
/*My Components */
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { Mynavbar } from "./components/Mynavbar";

function App() {
  return (
    <div>
      <Mynavbar msg="Hola soy un componente"/>
      <ItemListContainer greeting="Catalogo Provisional"/>
      <ItemDetailContainer/>
    </div>
  );
}

export default App;
