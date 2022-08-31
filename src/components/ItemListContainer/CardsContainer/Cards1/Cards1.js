import React from "react";
/*Estilos css  */
import 'bootstrap/dist/css/bootstrap.min.css';
import "./cards1.css"
/*Bootstrap Components */
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import {ItemCount} from "../../ItemCount"


const agregar =(contador,stock)=>{
  alert(`Añadiste ${contador} con stock de ${stock}`)
}

export const Cards1 = ({titulo,imagen,texto,stock,initial}) => {
  return (
    <Card className="cards1Style">
      <Card.Body >
        <Card.Title className="tituloCards1">{titulo}</Card.Title>
        <Card.Img variant="top" src={imagen} style={{height:'18rem'}} />
        <Card.Text className="textCard"> {texto} </Card.Text>
        <Button>Ver detalles</Button>
        {/* <ItemCount stock={stock} initial={initial} onAdd={agregar}></ItemCount> */}
      </Card.Body>
    </Card>
  );
};
