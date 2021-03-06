// CAPTAIN SLOG
// vim: set expandtab tabstop=4 shiftwidth=4 autoindent smartindent:
// File         : item.js 
// System       : mr-C3I 
// Date         : July  2016
// Author       : Mark Addinall
// Synopsis     : This system is the clone of C3I using newer technology.
//                Although C3I is using VERY up to date tools and design
//                coding concepts, this takes R&D a step further by
//                basing the architecture of this version around
//                METEOR/React and Bootstrap.
//
//
// -------------------------------
import React, { PropTypes } from 'react';

function Item(props) {
  const {
    _id,
    text,
    onRemove,
  } = props;

  return (
    <li className="list-group-item">
        <input type="button" value="x" onClick={() => onRemove(_id)} />  - {text}
    </li>
  );
}

Item.propTypes = {
  _id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default Item;

//--------------  EOF  ------------------------
//
