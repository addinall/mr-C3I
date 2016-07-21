// CAPTAIN SLOG
// vim: set expandtab tabstop=4 shiftwidth=4 autoindent smartindent:
// File         : Add.js 
// System       : mr-C3I 
// Date         : July  2016
// Author       : Mark Addinall
// Synopsis     : This system is the clone of C3I using newer technology.
//                Although C3I is using VERY up to date tools and design
//                coding concepts, this takes R&D a step further by
//                basing the architecture of this version around
//                Angular2 and Bootstrap4.
//
//		  Code to Add to the MONGO database
//
// ---------------------------------------
import React, { PropTypes } from 'react';


//---------------------------------
class Add extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.input.focus();
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.input.value);
    this.input.value = '';
    this.input.focus();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" ref={(c) => (this.input = c)} />
        <input type="submit" value="Add" />
      </form>
    );
  }
}

Add.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Add;

//------------  EOF -------------------------------
