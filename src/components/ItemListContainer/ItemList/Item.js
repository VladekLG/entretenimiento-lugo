import React from 'react'
import Card from "react-bootstrap/Card"
import './Item.css' 
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


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
      {/* Aqui asigno una ruta para tenerla de referencia cuando entro al link del boton  */}
      {/* Uso template string para hacer referencia al id de la card */}
        <Link as={Link} to={`/item/${id}`} id='detailStyle'><button>Ver detalles</button></Link>
      </Card.Body>
    </Card>

  )
}
