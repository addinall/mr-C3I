// CAPTAIN SLOG
// vim: set expandtab tabstop=4 shiftwidth=4 autoindent smartindent:
// File         : assets.js 
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
import Add from './Add';
import List from './List';

function Assets(props) {
  const {
    loading,
    items,
    onSubmit,
    onRemove,
  } = props;

  return (
    <div>
      <Add onSubmit={onSubmit} />
      <List
        loading={loading}
        items={items}
        onRemove={onRemove}
      />
    </div>
  );
}

Assets.propTypes = {
  loading: PropTypes.bool.isRequired,
  items: PropTypes.array.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default Assets;

//-----   EOF ----------------------------
//
