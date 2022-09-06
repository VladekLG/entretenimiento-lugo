import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Figure from 'react-bootstrap/Figure'
import Form from 'react-bootstrap/Form';
import { ItemCount } from '../../ItemListContainer/ItemCount';
import "./ItemDetail.css"
// Iconos
import { Icon } from '@iconify/react';


const agregar =(contador,stock)=>{
  alert(`Añadiste ${contador} con stock de ${stock}`)
}
export const ItemDetail = ({item}) => {
  const {imagen,nombre,autor,precio,unidades,unidadInicial,genero,categoria,text} = item

  return (
    <div>
      <Container style={{ border: "1px solid white" }} className="itemDetail">
        <Row>
          <Col>
            <Figure>
              <Figure.Image width={450} alt="171x180" src={imagen} />
              <Figure.Caption className="figureText">{text}</Figure.Caption>
            </Figure>
          </Col>

          <Col>
            <Row className="Row">
              <h1>{nombre}</h1>
              <hr style={{ color: "black" }}></hr>
              <h4>
                Género: {genero} | Categoria: {categoria}
              </h4>
              <h4>Autor: {autor}</h4>
            </Row>
            <hr></hr>
            <Row>
              <h2 className="precio">${precio}</h2>
              <ItemCount
                stock={unidades}
                initial={unidadInicial}
                onAdd={agregar}
              ></ItemCount>
            </Row>
            <div className="iconos">
              <h4 style={{ marginRight: "2rem" }}>
                Comparte en las redes sociales:
              </h4>
              <Icon icon="ion:logo-facebook" className="logo" />
              <Icon icon="bytesize:twitter" className="logo" />
              <Icon icon="akar-icons:instagram-fill" className="logo" />
            </div>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Ingresa tu Email</Form.Label>
                <Form.Control type="email" placeholder="nombre@hotmail.com"/>
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Escribe tu consulta aqui</Form.Label>
                <Form.Control as="textarea" rows={3}/>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
