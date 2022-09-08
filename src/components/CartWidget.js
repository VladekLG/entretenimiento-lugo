import React from "react"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { UserContext } from "../context/UserContext"

export const Cartwidget = ()=>{
    const {rol} = useContext(UserContext)
    return(
        <div>
            <Link as={Link} to ="/cart"><ion-icon name="cart-outline"/></Link>
            {rol}
        </div>  
    )
}