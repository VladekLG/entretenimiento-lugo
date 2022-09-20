import { createContext, useState } from "react";

// 1. Importamos CreatContext y lo igualamos a createContext()
// 2. Creamos un componente llamado CartProvider y dentro de sus parametros le pasamos un children

export const CartContext = createContext();

export const CartProvider = ({children}) =>{
    // const productCartList = arrayItems
    const [productCartList, setProductCartList] = useState([])


    const isInCart = (id)=>{
      const elementExists = productCartList.some((elemento)=>elemento.id === id);
      return elementExists;
    }

    
    const addProduct = (product,qty)=>{

      const newList = [...productCartList]
      if (isInCart(product.id)) {
        const productIndex = productCartList.findIndex(element=>element.id === product.id)
        newList[productIndex].quantity = newList[productIndex].quantity + qty;
        newList[productIndex].totalPrice = newList[productIndex].quantity * newList[productIndex].precio;
        setProductCartList(newList)
      } else {
        
        const newProduct = {...product,quantity:qty,totalPrice:qty*product.precio}
        const newList = [...productCartList];
        newList.push(newProduct);
        setProductCartList(newList)
      }

    }


    const deleteProduct = (idProduct)=>{
          const copyArray = [...productCartList];
          const newArray = copyArray.filter(el=>el.id !== idProduct )
          setProductCartList(newArray)
      }

    const clearCart = () =>{
          setProductCartList([])
     }


    const getTotalProducts = ()=>{
      const totalProducts = productCartList.reduce((acc,item)=>acc+item.quantity,0)
      return totalProducts;
    }

    const getTotalPrice = ()=>{
      const totalPriceProducts = productCartList.reduce((acc,item)=>acc+item.totalPrice,0)
      return totalPriceProducts;
    }


    // const addProduct = (product) => {
    //   if (productCartList.some((el) => el.id === product.id)) {
    //     let index = productCartList.findIndex((el) => el.id === product.id);
    //     let newProduct = productCartList[index];
    //     newProduct.quantity = newProduct.quantity + product.quantity;

    //     const newCartList = [...productCartList];
    //     newCartList.splice(index, 1, newProduct);

    //     setProductCartList([...newCartList]);
    //     console.log(productCartList);
    //   } else {
    //     const newList = [...productCartList, product];
    //     setProductCartList(newList);
      
    //   }
    // };

    // const deleteProduct = (idProduct)=>{
    //     const copyArray = [...productCartList];
    //     const newArray = copyArray.filter(el=>el.id !== idProduct )
    //     setProductCartList(newArray)
    // }
    
    // const clearCart = () =>{
    //     setProductCartList([])
    // }
    



    return(                                 
        <CartContext.Provider value={{productCartList, addProduct,deleteProduct,clearCart,getTotalProducts,getTotalPrice}}>
            {/* ..Components */}
            {children}
        </CartContext.Provider>
    )
}