import React from 'react'
import { Carousel3D } from '../../Carousel3D'
import { GirdHome } from './GirdHome';
import './Home.css' 
import 'animate.css';
import { TbTruckDelivery, TbCreditCard,TbDiscount } from "react-icons/tb";
// Carousel Images..
import SpidermanBG from '../../../assets/img/ImagesCarousel/SpiderMan.jpg'
import Vagabond from '../../../assets/img/ImagesCarousel/Vagabond.jpg'
import SpyBg from '../../../assets/img/ImagesCarousel/SpyBg.jpg'

export const Home = () => {
  return (
    <div>
      <div class='divtitle'>
      <h2  class="titleIndex animate__animated animate__fadeInLeft">Bienvenido a nuestro catalogo de venta de Videojuegos, Mangas, accesorios  y enterate de todas las novedades de nuestra tienda | Noticias/News | Galeria de Arte span</h2>  
      </div>
      <Carousel3D>
      <span><img src="http://cdn.shopify.com/s/files/1/0634/3616/1281/products/modoberserk.jpg?v=1660395362" alt="Innocent"/></span>
      <span><img src="http://d3ugyf2ht6aenh.cloudfront.net/stores/001/455/161/products/jojos-bizarre-adventure-part-v-5-cinco-vento-aureo-vol-04-ivrea-manga-japones-viducomics-comic-hirohiko-araki1-706be21d2a2769644e16473724563408-640-0.jpg" alt=""/></span>
      <span><img src="https://tap-multimedia-1172.nyc3.digitaloceanspaces.com/productimage/45146/9786075285740.jpg" alt=""/></span>
      <span><img src="https://tap-multimedia-1172.nyc3.digitaloceanspaces.com/productimage/45154/9789878190266.jpg?size=4&h=610" alt=""/></span>
      <span><img src="https://cdn.normacomics.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/i/n/innocent-1.jpg" alt=""/></span>
      <span><img src={SpyBg} alt=""/></span>
      <span><img src={SpidermanBG} alt=""/></span>
      <span><img src={Vagabond} alt=""/></span>
      </Carousel3D>
      <h2 className='h2Subtitle animate__animated animate__pulseanimate__animated animate__pulse'>Acerca de nuestro servicio..</h2>
      <div className='div1'>
      <div>
        <TbTruckDelivery size="1.5em" color='darkblue' className='i'/><h3>ENVÍO GRATIS A TODO EL PAÍS</h3>
        <p>En compras superiores a $4000</p>
      </div>
      <div id='verticle-line'></div>
      <div>
        <TbCreditCard size="1.5em" color='purple' className='i'/><h3>TU COMPRA EN SIMPLES PASOS</h3>
        <p>Pagando con tarjetas, efectivo o transferencia</p>
      </div>
      <div id='verticle-line'></div>
      <div>
        <TbDiscount size="1.5em" color='darkblue' className='i'/><h3>10% DE DESCUENTO</h3>
        <p>En compras superiores a $10000</p>
      </div>
      </div>
      <GirdHome></GirdHome>
    </div>
         
     
  )
}
