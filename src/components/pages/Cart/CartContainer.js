import { addDoc, collection, getFirestore } from 'firebase/firestore'
import React from 'react'
import { useContext } from 'react'
import {Link } from 'react-router-dom'
import { CartContext } from '../../../context/CartContext'
import { Cart } from './Cart'

export const CartContainer = () => {
  const {productCartList,getTotalPrice,clearCart} = useContext(CartContext)
  console.log('product cardlist',productCartList)


  


  const sendOrder = (e)=>{
    e.preventDefault();
    const order = {
      buyer: {
        name: e.target[0].value,
        phone: e.target[1].value,
        email: e.target[2].value,
      },
      items: productCartList.map(product => ({id:product.id, title:product.nombre,imagen:product.imagen, price:product.precio, quantity:product.quantity})),
      total: getTotalPrice(),
    };

    const db = getFirestore();
    const ordersCollection = collection(db,'orders');
    addDoc(ordersCollection, order )
    .then(({id})=> console.log(id))
  }


  
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
                        
                        <form onSubmit={sendOrder}>
                          <input type="text" placeholder='nombre' />
                          <input type="text" placeholder='telefono' />
                          <input type="email" placeholder='email' />
                          <button type='submit'>Emitir Compra</button>
                          {/* <Link to="/checkout" className="btn btn-primary" > Emitir Compra </Link> */}
                        </form>
                        <button className="btn btn-primary mt-3"  onClick={clearCart}>Vaciar Carrito</button>
                    </div>
                </div>
        </div>
        


    </div>
  );
}
