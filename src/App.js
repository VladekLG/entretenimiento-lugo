import React from "react";
/*My Components */
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { Mynavbar } from "./components/Mynavbar";
import { Footer } from "./components/Footer/Footer";
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import { Otro } from "./components/pages/Otro/Otro";
import { PaginaError } from "./components/pages/PaginaError/PaginaError";
import { Cart } from "./components/pages/Cart/Cart";


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
          <Route path ='/cart' element = {<Cart/>}/>
        </Routes>
        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
