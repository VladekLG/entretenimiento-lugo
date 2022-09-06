import React from "react";
/*My Components */
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { Mynavbar } from "./components/Mynavbar";
import { Footer } from "./components/Footer/Footer";
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import { Otro } from "./components/pages/Otro/Otro";
import { PaginaError } from "./components/pages/PaginaError/PaginaError";


// Primer paso, envolver la app con el componente BrowserRouter
// Lo que este fuera de "Routes" queda estático (Navbar,Footer).
// Route recibe dos params el primer es path='/' element= el componente a renderizar.
// Cuando no conduce a ninguna ruta se coloca '/*/' para indicar un error 404 por ejemplo.
// A el elemento de la ruta erronea, le pasamos o bien una pagina de error custom o que nos redirija al inicio y le pasamos el elemento  enbebido
// Router link, a cada link que tenga en un componente le tengo que poner set as={Link} to='Aqui pongo una ruta como ref'
// Despues en app dentro de routes, creo una ruta que me renderize el componente a mostrar con la misma ruta asignada previamente
//  {/* :id / :categoryType es una variable que almacena que encuentra mangas y gaming esto se lo pasamos como UseParams */}


function App() {
  return (
    <BrowserRouter>
      <div >
        <Mynavbar/>  
        <Routes>  
          <Route path='/' element={<ItemListContainer />}/>
          <Route path='/category' element={<ItemListContainer />}/>                             
          <Route path ='/category/:categoryType' element ={<ItemListContainer/>}/>
          <Route path='/item/:id' element={<ItemDetailContainer/>}></Route>
          <Route path ='/otro' element ={<Otro/>}/>
          <Route path ='/*' element ={<PaginaError/>}/>
          <Route></Route>
        </Routes>
        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
