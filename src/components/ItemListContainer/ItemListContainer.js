import React from "react";
import {CardsContainer} from "./CardsContainer/CardsContainer";


export const ItemListContainer = ({greeting}) => {
  return (
    <div>
      <h2>{greeting}</h2>
    {/* Crear un componente container para las cards */}
    <CardsContainer></CardsContainer>
   </div>
  );
};
