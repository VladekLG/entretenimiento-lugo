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
import { ThemeContext } from "./context/ThemeContext";
import { UserContext } from "./context/UserContext";


function App() {
  return (
        <ThemeContext.Provider value={{themeColor:'black'}}>
            <BrowserRouter>
              <div >
                <UserContext.Provider value={{rol:"Administrador"}}>
                  <Mynavbar/>  
                </UserContext.Provider>
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
        </ThemeContext.Provider>
  );
}

export default App;
