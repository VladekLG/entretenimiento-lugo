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
// Router dom
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";



export const Mynavbar=()=>{
    return(
      <div> 
        <header>
       <NavLink as={Link} to ="/">
         <h1>
           ArmorGames&Comics/Mangas<span>ReactJS</span>
         </h1>
       </NavLink>
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
              <NavLink   as={Link} to="/category" className={({isActive})=>isActive? "claseActive" : "claseInactive"}>Categorias</NavLink>
              <NavLink   as={Link} to="/category/mangas" className={({isActive})=>isActive? "claseActive" : "claseInactive"}>Mangas</NavLink>
              <NavLink   as={Link} to="/category/gaming" className={({isActive})=>isActive? "claseActive" : "claseInactive"}>Gaming</NavLink>
              <NavLink   as={Link} to="/category/Accion" className={({isActive})=>isActive? "claseActive" : "claseInactive"}>Accion</NavLink>
              <NavLink   as={Link} to="/otro" className={({isActive})=>isActive? "claseActive" : "claseInactive"}>Otro</NavLink>
              
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

