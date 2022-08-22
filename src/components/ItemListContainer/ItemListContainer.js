import React from "react";
import {CardsContainer} from "./CardsContainer/CardsContainer";
import { ItemCount } from "./ItemCount.js/ItemCount";



export const ItemListContainer = ({greeting}) => {

  const agregar =(contador,stock)=>{
    alert(`Añadiste ${contador} con stock de ${stock}`)
  }

  return (
    <div>
      <h2 style={{marginTop:'1rem'}}>{greeting}</h2>
    <CardsContainer></CardsContainer>
    {/* ItemCounts a modo de prueba!! */}
    <ItemCount stock={10} initial={0} onAdd={agregar}></ItemCount>
    <ItemCount stock={0} initial={0} onAdd={agregar}></ItemCount>
   </div>
  );
};
