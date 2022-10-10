import React from 'react'
import { useContext } from 'react'
import {Link } from 'react-router-dom'
import { CartContext } from '../../../context/CartContext'
import { Cart } from './Cart'
import Button from '@mui/material/Button'
import { Formulario } from '../Form/Formulario'
export const CartContainer = () => {

  const {productCartList,getTotalPrice,clearCart} = useContext(CartContext)
  console.log('product cardlist',productCartList)

  return (
    <div>
          <div className='cart-title'>
            <h5>Carrito de Compras | CartContainer</h5>
          </div>
      {productCartList.length > 0 ? (
        productCartList.map((item) => <Cart key={item.id} item={item} />)
      ):(
          <div className="card card-body py-5 text-center shadow-sm">
            <h4>Tu carrito de Compras esta vacio..</h4>
            <Link as={Link} to="/category">
              Regresar a la tienda
            </Link>
          </div>       
      )}
      <div className="col">
        <div className="col-md-8"></div>
        <div className="col-md-4">
          {productCartList.length > 0 ? (
            <div className="mt-3 text-white total-style my-5">
              <div className='subtotal'>
              <h4>
                Sub Total: ARS${getTotalPrice()}
                <span className="float-end"></span>
              </h4>
              <h4>
                Total: ARS${getTotalPrice()}
                <span className="float-end"></span>
              </h4>
              <Button variant="contained" color="secondary" onClick={clearCart}>
                VACIAR CARRITO
              </Button>
              </div>
              <div className='contenedor'>
                <Formulario/>
              </div>
            </div>
          ):null}
        </div>
      </div>
    </div>
  );
}
