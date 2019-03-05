import React, { Component } from 'react';

import Navbar from './Navbar';
import Home from './Home';

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
        <ul>
          {this.state.matchedSymbols.map(function(e) { return <li>{e.symbol}</li> })}
        </ul>
      </div>
    );
  }

  
  setMatchedSymbols = (symbols) => {
    this.setState({matchedSymbols: symbols});
  }

}

export default App;
