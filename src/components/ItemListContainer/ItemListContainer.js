import React, { useEffect, useState } from "react";
import {CardsContainer} from "./CardsContainer/CardsContainer";
// import { ItemCount } from "./ItemCount.js/ItemCount";
import { ItemList } from "./ItemList";
import { arrayItems } from "../../data/arrayItems";

// 1)Importar ArrayItems 
// 2) Dentro de ItemList creo Los list (cardsList), dentro crear una coleccion de objetos(cards)
// 3) Cuando trabajemos con procesos asincronos o llamados a APIS debemos utilizar USE EFFECT.
// 4)Aqui va la promesa, obtenemos los parametros, la guardamos en variable, y esa variable la pasamos como propiedad al componente itemlist



export const ItemListContainer = ({greeting}) => {
  const [items,setItems]  = useState([])

  // // const agregar =(contador,stock)=>{
  // //   alert(`Añadiste ${contador} con stock de ${stock}`)
  // // }

  // Creacion de Promesa para simular API
  const obtenerItems = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(arrayItems);
      }, 2000);
    });
  };

// UseEffect Para el renderizado (Aqui va la funcion asincrona)

useEffect(()=>{

  const funcionAsync = async ()=>{
    try {   /*VARIABLE QUE VOY A USAR */
      const listadoItems = await obtenerItems(); /*Guardo la promesa en una variable */
      setItems(listadoItems) /*Promesa resuelta seteada */
      console.log('listadoItems' ,listadoItems)
    } catch (error) {
      console.log('Hubo un error')
    }
  }
  funcionAsync() /*Ejecuto la funcion async */
},[])
/* */
  return (
    <div>
      <h2 style={{marginTop:'1rem', color:'violet'}}>{greeting}</h2>
    <CardsContainer></CardsContainer>
    {/* ItemCounts a modo de prueba!! */}
    {/* <ItemCount stock={10} initial={0} onAdd={agregar}></ItemCount>
    <ItemCount stock={0} initial={0} onAdd={agregar}></ItemCount> */}
    {/* Desafio 6 */}
    <ItemList items={items}></ItemList>
   </div>
  );
};
