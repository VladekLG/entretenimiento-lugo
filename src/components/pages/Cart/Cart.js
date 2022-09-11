import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../../context/CartContext'

export const Cart = () => {
  const {productCartList,deleteProduct,deleteAllProducts} = useContext(CartContext)
  console.log('productCartList', productCartList)
  return (
    <div>
      <p>Cart</p>
      {
        productCartList.map ( item => (
          <div>
            <p key={item.autor}>{item.autor}</p>
            <img src={item.imagen} alt="imagen" style={{width:'10rem'}} />
            <p>Cantidad:{item.quantity}</p>
            <button key={item.id} onClick={()=>deleteProduct(item.id)}>Eliminar producto</button>
            <button  onClick={()=>deleteAllProducts(item)}>Eliminar todos los productos</button>
          </div>          
        ))
      }
    </div>
  )
}
