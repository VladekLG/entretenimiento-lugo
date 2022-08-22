import React from 'react'
/*BootStrap Components */
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Cartwidget } from './CartWidget';
/*Bootstrap Styles */
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Mynavbar.css"




export const Mynavbar=()=>{
    return(
      <div> 
        <header>
        <h1>
          ArmorGames&Comics/Mangas<span>ReactJS</span>
        </h1>
        <Navbar bg="light" expand="lg" >
        <Container fluid>
        <ion-icon name="game-controller-outline"></ion-icon>
         <h3 className='subtitle'>Ecommerce</h3>
          <Cartwidget></Cartwidget>  
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="m-auto my-2 my-lg-0"
              style={{ maxHeight: '100px'}}
              navbarScroll
            >
              <Nav.Link href="#action1" className='nav-underline'>Home</Nav.Link>
              <Nav.Link href="#action2" className='nav-underline'>Link</Nav.Link>
              <NavDropdown title="Link2" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4"> Another action</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success" className='btn' >Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar> 
      </header>
      </div>
    )
}

