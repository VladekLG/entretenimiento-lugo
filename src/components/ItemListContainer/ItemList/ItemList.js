import React from 'react'
import {Item} from './Item'
import './ItemList.css'
  // hacer un map aqui con componentes items
//  items--> contiene el arreglo 
// item--> es cada elemento del array a iterar
// Con map retorno un componente por cada elemento del array, en este caso serian 4

export const ItemList = ({items}) => {
  return (
    <div>
      <div className="divContainer">
        {items.map((item) => {
          return <Item item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
}

