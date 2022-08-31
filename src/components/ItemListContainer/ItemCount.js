import React from "react";
import { useState } from "react";
import "./ItemCount.css"

export const ItemCount = ({stock,initial,onAdd}) => {
  /*Variable,Funcion que cambiara el valor de la variable, usestate recibe un parametro (recibe el valor inicial de la variable) */
  /*El setContador lo puedo usar en un boton para cambiar el estado */
  const [contador, setContador] = useState(initial);
  


  const incrementar = () => {
    if(contador < stock & stock>0){
        setContador(contador +1)
    }
  };

  const decrementar = () => {
   if (contador>0) {
    setContador(contador -1);
   }
  };

  return (
    <div className="itemCountStyle"> 

      <div className="buttonGroup">
        <button onClick={decrementar} disabled ={stock===0} id='button1'>-</button> 
        <button>{contador}</button>
        <button onClick={incrementar} disabled ={stock===0} id='button2'>+</button>
      </div>
      {contador === stock && stock>0 ?<p>ALCANZASTE EL MAXIMO STOCK!</p>
                            :<p> Unidades disponibles : {stock}</p>
      }
      <button id='button3' onClick={()=>(onAdd(contador,stock))} style={{background: contador===stock && stock>0 ? 'red' : 'white'}} disabled=
      {stock===0 || contador === 0} >Añadir al carrito</button>
      
    </div>
  );
};
