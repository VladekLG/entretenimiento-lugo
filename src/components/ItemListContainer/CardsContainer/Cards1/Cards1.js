import React from "react";
/*Estilos css propios */
import "./cards1.css"
/*Bootstrap Components */
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export const Cards1 = ({titulo,imagen,texto,boton}) => {
  return (
    <Card className="cards1Style">
      <Card.Body>
        <Card.Title className="tituloCards1">{titulo}</Card.Title>
        <Card.Img variant="top" src={imagen} style={{height:'22rem'}} />
        <Card.Text className="textCard">
          {texto}
        </Card.Text>
        <Button variant="primary">{boton}</Button>
      </Card.Body>
    </Card>
  );
};
