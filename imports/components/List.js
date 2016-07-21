// CAPTAIN SLOG
// vim: set expandtab tabstop=4 shiftwidth=4 autoindent smartindent:
// File         : list.js 
// System       : mr-C3I 
// Date         : July  2016
// Author       : Mark Addinall
// Synopsis     : This system is the clone of C3I using newer technology.
//                Although C3I is using VERY up to date tools and design
//                coding concepts, this takes R&D a step further by
//                basing the architecture of this version around
//                METEOR/React and Bootstrap4.
//
//
// -------------------------------
import React, { PropTypes } from 'react';
import Item from './Item';

function List(props) {
  const {
    loading,
    items,
    onRemove,
  } = props;

  if (loading) {
    return (
      <p>Loading...</p>
    );
  }

  if (items.length === 0) {
    return (
      <p>No Items</p>
    );
  }

  return (
    <ul className="list-group">
      {items.map(({ _id, text, isChecked }) => (
        <Item
          _id={_id}
          key={_id}
          text={text}
          onRemove={onRemove}
        />
      ))}
    </ul>
  );
}

List.propTypes = {
  loading: PropTypes.bool.isRequired,
  items: PropTypes.array.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default List;

//---------------------  EOF  --------------------

