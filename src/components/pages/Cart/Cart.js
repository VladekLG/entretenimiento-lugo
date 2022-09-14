import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../../context/CartContext'
import Table from 'react-bootstrap/Table';

import './Cart.css'


export const Cart = ({item}) => {
    const {deleteProduct} = useContext(CartContext)
  return (
    <div style={{textAlign:'center',justifyContent:'center'}}>
      <Table striped bordered hover>
        <thead className='thead'>
          <tr style={{border:'2px solid purple'}}>
            <th>Imagen</th>
            <th style={{width:'20%'}}>Producto</th>
            <th style={{width:'5%'}}>Cantidad</th>
            <th style={{width:'10%'}}>Precio por Unidad</th>
            <th style={{width:'10%'}}>Precio Total</th>
            <th>Remover Producto</th>
          </tr>
        </thead>
        <tbody className='tbody' style={{border:'2px solid purple'}}>
          <tr>
            <td className='tdImagen'><img src={item.imagen} alt="imagen"/></td>
            <td>{item.nombre}</td>
            <td>{item.quantity}</td>
            <td>${item.precio}</td>
            <td>${item.precio*item.quantity}</td>
            <button key={item.id} onClick={()=>deleteProduct(item.id)} className='btnTd'>Eliminar producto</button>
          </tr>
        </tbody>
      </Table>
    </div>

  );
}
