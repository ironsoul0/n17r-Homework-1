import React from 'react';
import ListItem from '../ListItem/ListItem';

const ItemsList = (props) => {
  const itemsArray = props.items.map((item, index) => {
    return (
      <ListItem 
        key={index}
        content={item}
        deleteItem={props.deleteItem}
        index={index}
        doneItems={props.doneItems}
        doneItem={props.doneItem}
      />
    );
  });

  return (
    <div>
      {itemsArray}    
    </div>
  );
}

export default ItemsList;