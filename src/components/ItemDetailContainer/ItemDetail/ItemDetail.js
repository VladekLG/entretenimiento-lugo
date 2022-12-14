import React, { useContext, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Figure from 'react-bootstrap/Figure'
import Form from 'react-bootstrap/Form';
import { ItemCount } from '../../ItemListContainer/ItemCount';
import { Link } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
// Iconos
import { Icon } from '@iconify/react';
import { CartContext } from '../../../context/CartContext';
import Button from '@mui/material/Button'

// Modificar


export const ItemDetail = ({item}) => {

  const {addProduct} = useContext(CartContext)
  const [value,setValue] = useState(0)
  
  const onAdd = (contador) => {
    setValue(contador);
    addProduct(item,contador);
  };

    
  const {imagen,nombre,autor,precio,genero,categoria,text} = item
  
  return (
    <div>
       <Toaster
                position="top-left"
                reverseOrder={false}
                toastOptions={{
                  success: {
                    style: {
                      background: "#47074a",
                      border: "2px solid black",
                      color:"white"
                    },
                  }
                }}
              />
      <Container style={{ border: "1px solid white" }} className="itemDetail">
        <Row>
          <Col>
            <Figure>
              <Figure.Image
                className="figureImage"
                alt="171x180"
                src={imagen}
              />
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
              <hr></hr>

              {value > 0 ? (
                <div>
                  <Link as={Link} to="/cart">
                    <Button variant="outlined" color="secondary">
                      Ir al Carrito
                    </Button>
                  </Link>
                </div>
              ) : null}
            </Row>
            <hr></hr>
            <Row>
              <h2 className="precio">${precio}</h2>
              <ItemCount stock={10} initial={0} onAdd={onAdd}></ItemCount>
             
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
