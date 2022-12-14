import React from 'react'
import Card from "react-bootstrap/Card"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Button from '@mui/material/Button'


export const Item = ({item}) => {
  const {nombre,imagen,autor,precio,id} = item
  return (
  
    <Card className="cardStyle">
      <Card.Body>
        <Card.Title className="cardTitle">{nombre}</Card.Title>
        <Link as={Link} to={`/item/${id}`}><Card.Img variant="top" src={imagen} className='imageCardStyle'/></Link>
        <Card.Text style={{color:'white'}}>
         {autor}
        </Card.Text>
        <Card.Text className='priceStyle'>
          Precio: <span>${precio}</span> 
        </Card.Text>
        <Link as={Link} to={`/item/${id}`} id='detailStyle'><Button variant="contained" color="secondary">Ver detalles</Button></Link>
      </Card.Body>
    </Card>

  )
}
