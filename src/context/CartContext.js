import { createContext, useState } from "react";
import { arrayItems } from "../data/arrayItems";

// 1. Importamos CreatContext y lo igualamos a createContext()
// 2. Creamos un componente llamado CartProvider y dentro de sus parametros le pasamos un children


export const CartContext = createContext();

export const CartProvider = ({children}) =>{
    // const productCartList = arrayItems
    const [productCartList, setProductCartList] = useState([])




    const addProduct = (product) => {
      if (productCartList.some((el) => el.id === product.id)) {
        let index = productCartList.findIndex((el) => el.id === product.id);
        let newProduct = productCartList[index];
        newProduct.quantity = newProduct.quantity + product.quantity;

        const newCartList = [...productCartList];
        newCartList.splice(index, 1, newProduct);

        setProductCartList([...newCartList]);
        console.log(productCartList);
      } else {
        const newList = [...productCartList, product];
        setProductCartList(newList);
      }
    };

    const deleteProduct = (idProduct)=>{
        const copyArray = [...productCartList];
        const newArray = copyArray.filter(el=>el.id !== idProduct )
        setProductCartList(newArray)
    }
    
    const deleteAllProducts = () =>{
        setProductCartList([])
    }

    return(                                 
        <CartContext.Provider value={{productCartList, addProduct, deleteProduct,deleteAllProducts}}>
            {/* ..Components */}
            {children}
        </CartContext.Provider>
    )
}