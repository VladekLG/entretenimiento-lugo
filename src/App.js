import React from "react";
/*My Components */
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { Mynavbar } from "./components/Mynavbar";
import { Footer } from "./components/Footer/Footer";
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import { Home } from "./components/pages/Home/Home";
import { PaginaError } from "./components/pages/PaginaError/PaginaError";
import { CartContainer } from "./components/pages/Cart/CartContainer";
import { CartProvider } from "./context/CartContext";
import './components/AllStyles.css'

function App() {
  return (
          <CartProvider>
            <BrowserRouter>
              <div >
                  <Mynavbar/>  
                  <Routes>  
                    <Route path='/' element={<Home/>}/>
                    <Route path ='/*' element ={<PaginaError/>}/>
                    <Route path='/category' element={<ItemListContainer/>}/>                             
                    <Route path ='/category/:categoryType' element ={<ItemListContainer/>}/>
                    <Route path ='/category/:categoryType/:genreType' element ={<ItemListContainer/>}/>
                    <Route path='/item/:id' element={<ItemDetailContainer/>}></Route>
                    <Route path ='/cart' element = {<CartContainer/>}/>
                  </Routes>
                  <Footer></Footer>
              </div>  
            </BrowserRouter>
          </CartProvider>
  );
}
export default App;
