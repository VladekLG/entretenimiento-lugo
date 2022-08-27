import React from 'react'
import Card from "react-bootstrap/Card"

export const Item = ({item}) => {
  return (
    <div>
        <Card className="cards2Style">
      <Card.Body >
        <Card.Title className="tituloCards1">{item.nombre}</Card.Title>
        <Card.Img variant="top" src={item.imagen} style={{height:'22rem'}} className='bordeImagen' />
        <Card.Text>
         {item.autor}
        </Card.Text>
        <Card.Text>
        Precio:  ${item.precio}
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  )
}
