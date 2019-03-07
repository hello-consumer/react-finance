import React, { Component } from 'react';

import Navbar from './Navbar';
import Home from './Home';
import SymbolDetails from './SymbolDetails';
import Search from './Search';

import {Switch, Route, Redirect} from 'react-router-dom'

import { connect } from 'react-redux'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact render={() => this.props.matchedSymbols.length > 0 ? <Redirect to='/search' /> : <Home /> } />
          <Route path="/search" render={() => this.props.matchedSymbols.length === 0 ? <Redirect to='/' /> : <Search />} />
          <Route path="/details/:symbol/" render={(routeData) => <SymbolDetails symbol={{symbol: routeData.match.params.symbol}} showFullDetail={true} />} />
          <Route path="*" render={() => <h1>Page Not Found</h1>} />
        </Switch>
        </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    matchedSymbols: state.matchedSymbolReducer 
  }
}


export default connect(mapStateToProps)(App);
