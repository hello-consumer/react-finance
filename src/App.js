import React, { Component } from 'react';

import Navbar from './Navbar';
import Home from './Home';
import SymbolDetails from './SymbolDetails';
import Search from './Search';

import {Switch, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/search/:term" component={Search} />
          <Route path="/details/:symbol/" render={(routeData) => <SymbolDetails symbol={{symbol: routeData.match.params.symbol}} showFullDetail={true} />} />
          <Route path="/about" render={() => <p>We're building this to demonstrate React and Redux!</p>} />
          <Route path="*" render={() => <h1>Page Not Found</h1>} />
        </Switch>
        </div>
    );
  }

}


export default App;
