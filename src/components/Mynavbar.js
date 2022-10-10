import React from 'react'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Cartwidget } from './CartWidget';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from '@mui/material/Button';
import {
  BrowserRouter as Link,NavLink
} from "react-router-dom";

export const Mynavbar=()=>{
    return(
      <div> 
        <header>
       <NavLink as={Link} to ="/">
         <h1>
           
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
              navbarScroll>
              <NavLink   as={Link} to="/" className={({isActive})=>isActive? "claseActive" : "claseInactive"}>Inicio</NavLink>  
              <NavLink   as={Link} to="/category/mangas" className={({isActive})=>isActive? "claseActive" : "claseInactive"}>Mangas</NavLink>
              <NavLink   as={Link} to="/category/gaming" className={({isActive})=>isActive? "claseActive" : "claseInactive"}>Gaming</NavLink>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
            <Button color="secondary" variant='contained'>
              Search
            </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      
      </Navbar> 
      </header>
      </div>
    )
}

