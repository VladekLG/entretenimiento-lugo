import React from 'react'
import {Item} from './Item'

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

