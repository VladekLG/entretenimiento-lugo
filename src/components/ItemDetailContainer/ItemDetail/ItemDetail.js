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
                              // usar estas props en mi lista de arrays creada
export const ItemDetail = ({item,stock,initial,precio}) => {
  const {developer,thumbnail,title,genre,release_date,short_description} = item

  return (
    <div>
      <Container style={{ border: "1px solid white" }} className="itemDetail">
        <Row>
          <Col>
            <Figure>
              <Figure.Image
                width={700}
                height={400}
                alt="171x180"
                src={thumbnail}
              />
              <Figure.Caption className="figureText">
                {short_description}
              </Figure.Caption>
            </Figure>
          </Col>

          <Col>
            <Row className="Row">
              <h1>{title}</h1>
              <h4>
                Género: {genre} | Desarollador: {developer}
              </h4>
              <h4>Fecha de lanzamiento:{release_date}</h4>
            </Row>
            <hr></hr>
            <Row>
              <h2 className="precio">${precio}</h2>
              <ItemCount
                stock={stock}
                initial={initial}
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
                <Form.Control type="email" placeholder="nombre@hotmail.com" />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Escribe tu consulta aqui</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
