import React from 'react';

const ListItem = (props) => {
  return (
    <div className="ListItem">
      <p onClick={props.doneItem.bind(this, props.index)}>
        {props.content}
        {props.doneItems[props.index] ? <i className="icon fa fa-check" /> : null}
      </p>
      <button onClick={props.deleteItem.bind(this, props.index)}>
        Delete item
      </button>
    </div>
  );
}

export default ListItem;