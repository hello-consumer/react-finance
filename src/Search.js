import React, { Component } from 'react';
import SymbolDetails from './SymbolDetails';


import { connect } from 'react-redux'

class Search extends Component {
  render() {
    return (
       <div className="container-fluid">
       {this.props.data && this.props.data.length > 0 ?
            <div className="row">
            {this.props.data.map(function(e) { return <div className="col-4"  key={e.symbol}><SymbolDetails symbol={e} /></div> })}
            </div> : "No Results" 
        }
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
   data: state.matchedSymbolReducer 
  }
}


export default connect(mapStateToProps)(Search);

