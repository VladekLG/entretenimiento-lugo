import React from 'react'
import { useContext } from 'react'
import {Link } from 'react-router-dom'
import { CartContext } from '../../../context/CartContext'
import { Cart } from './Cart'

export const CartContainer = () => {
  const {productCartList,getTotalPrice,clearCart} = useContext(CartContext)
  console.log('product cardlist',productCartList)
  return (
    <div >
    <div>
            <div className="py-3 bg-black">
                <div className="container text-center text-white">
                    <h5>Carrito de Compras | CartContainer</h5>
                </div>
            </div>

        </div>


      {productCartList.length > 0 
      ? (productCartList.map((item) => <Cart key={item.id} item={item}/>)) 
      
      : (<div>
          <div className='card card-body py-5 text-center shadow-sm'>
            <h4>Tu carrito de Compras esta vacio..</h4>
            <Link as={Link} to='/category'>Regresar a la tienda</Link>
          </div>
        </div>)}

        <div className="row">
                <div className="col-md-8"></div>
                <div className="col-md-4">
                    <div className="card card-body mt-3">
                        <h4>Sub Total: ARS${getTotalPrice()}
                            <span className="float-end"></span>
                        </h4>
                        <h4>Total: ARS${getTotalPrice()}
                            <span className="float-end"></span>
                        </h4>
                        <hr/>
                        <Link to="/checkout" className="btn btn-primary"> Finalizar Compra </Link>
                        <button className="btn btn-primary mt-3"  onClick={clearCart}>Vaciar Carrito</button>
                    </div>
                </div>
        </div>
    </div>
  );
}
