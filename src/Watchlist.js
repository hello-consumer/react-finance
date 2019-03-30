import React, { Component } from 'react';
import { connect } from 'react-redux'

import { addToWatchlist } from './actions';

import {NavLink} from 'react-router-dom';
import AddToWatchlist from './AddToWatchlist';

class Watchlist extends Component {

  render() {
    return (
      this.props.watchlist.length > 0 ? <ul>{this.props.watchlist.map(function(e){
          return (<li key={e}><NavLink to={"/details/" + e}>{e}</NavLink><AddToWatchlist symbol={e} /></li>)
      })}</ul> : <div>There is nothing in your watchlist</div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
     watchlist: state.watchlistReducer
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addToWatchlist: (symbol) => {
           dispatch(addToWatchlist(symbol))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Watchlist);

