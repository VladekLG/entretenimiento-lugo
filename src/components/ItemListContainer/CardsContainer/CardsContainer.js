import React from "react";
import { Cards1 } from "./Cards1/Cards1";
/*Estilos css propios */
import "./CardsContainer.css"
/*Imagenes Cards 1 */
import berserk from '../../../assets/img/cards1/berserk.jpg';
import ventoaureo from '../../../assets/img/cards1/ventoaureo.jpg'
import deathnote from '../../../assets/img/cards1/deathnote.jpg'
import jujutsu from '../../../assets/img/cards1/Jujutsu.jpg'




// Pasar las props de stock y contador en las cards

export const CardsContainer = () => {
  return (
    <div >
      <h3>SECCION 1 DE CARDS</h3>
      <div className="divContainer">  
      <Cards1
        titulo="Berserk"
        imagen={berserk}
        texto="Some quick example text to build on the card title and make"
        boton="Añadir al carro"
        stock={10}
        initial={0}
      ></Cards1>
      <Cards1
        titulo="VentoAureo"
        imagen={ventoaureo}
        texto="Some quick example text to build on the card title and make"
        boton="Añadir al carro"
        stock={0}
        initial={0}
      ></Cards1>
      <Cards1
        titulo="DeathNote"
        imagen={deathnote}
        texto="Some quick example text to build on the card title and make"
        boton="Añadir al carro"
      ></Cards1>
      <Cards1
        titulo="Jujutsu"
        imagen={jujutsu}
        texto="Some quick example text to build on the card title and make"
        boton="Añadir al carro"
      ></Cards1>
      </div>
       {/* ...Seccion 2.. etc.. */}
    </div>
  );
};
