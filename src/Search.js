import React, { Component } from 'react';
import SymbolDetails from './SymbolDetails';

import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux'

class Search extends Component {
  render() {
    var searchValue = this.props.match.params.term;
    console.log(searchValue);
    var matchedSymbols = [];
    if(searchValue !== ''){
      console.log('filtering');
      matchedSymbols = this.props.allSymbols.filter(function (e) { return e.symbol.toLowerCase() === searchValue || e.name.toLowerCase().indexOf(searchValue) >= 0 }).slice(0, 10);
      console.log(matchedSymbols);
    }

    return (
       <div className="container-fluid">
       {matchedSymbols.length > 0 ?
            <div className="row">
            {matchedSymbols.map(function(e) { return <div className="col-4"  key={e.symbol}><SymbolDetails symbol={e} /></div> })}
            </div> : "No Results" 
        }
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
   allSymbols: state.allSymbolReducer 
  }
}


export default connect(mapStateToProps)(withRouter(Search));

