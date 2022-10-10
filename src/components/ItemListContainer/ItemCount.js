import React from "react";
import { useState } from "react";


export const ItemCount = ({stock,initial,onAdd}) => {
   
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
        <button id="buttonCounter">{contador}</button>
        <button onClick={incrementar} disabled ={stock===0} id='button2'>+</button>
      </div>
      {contador === stock && stock>0 ?<p>ALCANZASTE EL MAXIMO STOCK!</p>
                                     :<p> Unidades disponibles : {stock}</p>}        

    
      <button id='button3' onClick={()=>(onAdd(contador))} style={{background: contador===stock && stock>0 ? 'red' : 'gray'}} disabled=
      {stock===0 || contador === 0} >Añadir al carrito</button>
      {/* Para pasar valores al componente padre se usa un call back en el onclick, ()=>(onAdd(aqui van los parametros que quiero pasarle (en este caso le pase contador y stock)  )) */}
    </div>
  );
};
