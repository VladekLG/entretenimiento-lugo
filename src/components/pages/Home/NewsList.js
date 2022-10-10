import React,{ useState } from 'react'
import './NewsList.css'
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';

export const NewsList = ({newsItems}) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };


  return (
    <div>
      <Carousel activeIndex={index} onSelect={handleSelect} className='Carousel2'>
        {newsItems.map((item) => (
          <Carousel.Item>
            <img className=' ' src={item.imagen} alt={item.autor} style={{height: 600}}/>
         
            <Carousel.Caption>
            </Carousel.Caption>
            
            <h3>{item.nombre}</h3>
            <Link as={Link} to={`/item/${item.id}`}><h4>VER DETALLES</h4></Link>
            <p>{item.text}</p>
            
           
          </Carousel.Item>
        ))}
      </Carousel>
      ;
    </div>
  );
}
