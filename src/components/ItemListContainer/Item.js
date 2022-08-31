import React from 'react'
import Card from "react-bootstrap/Card"
import { ItemCount } from './ItemCount'


const agregar =(contador,stock)=>{
  alert(`Añadiste ${contador} con stock de ${stock}`)
}


export const Item = ({item}) => {
  const {nombre,imagen,autor,precio,stock,initial} = item
  return (
    <div>
        <Card className="cards2Style">
      <Card.Body  >
        <Card.Title className="tituloCards1">{nombre}</Card.Title>
        <Card.Img variant="top" src={imagen} style={{height:'19rem'}} className='bordeImagen'  />
        <Card.Text style={{color:'white'}}>
         {autor}
        </Card.Text>
        <Card.Text style={{color:'white'}}>
        Precio:  ${precio}
        </Card.Text>
        <ItemCount stock={stock} initial={initial} onAdd={agregar}></ItemCount>
      </Card.Body>
    </Card>
    </div>
  )
}
