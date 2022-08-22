import React from "react";
import { useState } from "react";
import "./ItemCounts.css"

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
      <p>Item Count</p>
      <p>Contador: {contador}</p>    
      <button onClick={decrementar} disabled ={stock===0}>-</button> 
      <button onClick={()=>(onAdd(contador,stock))} style={{background: contador===stock && stock>0 ? 'red' : 'rgb(131, 70, 229)'}} disabled={stock===0 || contador === 0} >Añadir al carrito</button>
      <button onClick={incrementar} disabled ={stock===0}>+</button>
      {contador === stock && stock>0 ?<p>ALCANZASTE EL MAXIMO STOCK!</p>
                            :<p>Stock:{stock}</p>
      }
    </div>
  );
};
