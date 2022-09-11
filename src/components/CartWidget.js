import React from "react"
import { Link } from "react-router-dom"

export const Cartwidget = ()=>{
    return(
        <div>
            <Link as={Link} to ="/cart"><ion-icon name="cart-outline"/></Link>
        </div>  
    )
}