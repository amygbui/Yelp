import React from 'react';
import { connect } from 'react-redux';

import Search from './search.jsx';

const mapStateToProps = state => {
  console.log(state)
  return {
    // businesses: this.state.businesses
  }
};

const mapDispatchToProps = dispatch => {
  return {

  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
