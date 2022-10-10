import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel';


export const News = ({item}) => {
  
  const {nombre,imagen,autor,precio,id} = item
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
  <div >

    {/* <h3>{nombre}</h3>
    <div>{autor}</div>
    <Link as={Link} to={`/item/${id}`}><img src={imagen} alt="Imagen" /></Link>
    <h4>Precio: ${precio}</h4>
     */}

<Carousel activeIndex={index} onSelect={handleSelect}>
<Carousel.Item>
        <img
          className="d-block w-100"
          src={imagen}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={imagen}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=20232a"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      </Carousel>
  </div>
  )
}


