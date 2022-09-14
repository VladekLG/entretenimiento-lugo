import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../context/CartContext"

export const Cartwidget = ()=>{
    const {productCartList,getTotalProducts} = useContext(CartContext)
    return(
        <div>
            {productCartList.length>0 ?
            <div>  
            <Link as={Link} to ="/cart"><ion-icon name="cart-outline"/></Link>
            <span>{getTotalProducts()}</span>
            </div>
            : null} 
        </div>  
    )
}