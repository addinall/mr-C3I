import React, { PropTypes } from 'react';

function Item(props) {
  const {
    _id,
    text,
    onRemove,
  } = props;

  return (
    <li className="list-group-item">
      {text} - <input type="button" value="x" onClick={() => onRemove(_id)} />
    </li>
  );
}

Item.propTypes = {
  _id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default Item;
