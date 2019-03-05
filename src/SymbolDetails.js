import React, { Component } from 'react';

class SymbolDetails extends Component {
  render() {
    return (
      <div>{this.props.symbol.name}</div>
    );
  }
}

export default SymbolDetails;