import React, { Component } from 'react';

import Navbar from './Navbar';
import Home from './Home';
import SymbolDetails from './SymbolDetails';

class App extends Component {
  constructor(){
    super();
    this.state = {
      matchedSymbols: []
    }
  }

  render() {
    return (
      <div className="App">
        <Navbar matchedSymbols={this.state.matchedSymbols} setMatchedSymbols={this.setMatchedSymbols} />
        <Home />
<div>
  {this.state.matchedSymbols.map(function(e) { return <SymbolDetails key={e.symbol} symbol={e} /> })}
</div>
      </div>
    );
  }

  
  setMatchedSymbols = (symbols) => {
    this.setState({matchedSymbols: symbols});
  }

}

export default App;
