import { createContext, useState } from "react";
import Swal from 'sweetalert2'

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
       
          Swal.fire({
            title:'Advertencia',
            text: '¿Esta seguro que desea eliminar todos los productos que tiene agregado en el carrito?',
            icon: 'warning',
            showDenyButton:true,
            denyButtonText: "No",
            confirmButtonText: "Si",
            confirmButtonColor: "#000000"

          }).then(response=>{
            if(response.isConfirmed){
              Swal.fire('¡Exito!','se vacio el carrito de compras','success')
              setProductCartList([])
            }else if(response.isDenied){
              Swal.fire('Informacion', 'No paso nada')
            }else{

            }
          })
     }

     const clearCartAfterBuy = ()=>{
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

    return(                                 
        <CartContext.Provider value={{productCartList, addProduct,deleteProduct,clearCart,getTotalProducts,getTotalPrice,clearCartAfterBuy}}>
            {/* ..Components */}
            {children}
        </CartContext.Provider>
    )
}