import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addToWatchlist } from './actions';

class AddToWatchlist extends Component {

  handleClick = (e) =>{
      this.props.addToWatchlist(this.props.symbol);
      this.setState({changed: true})
  }  

  render() {
      var notInWatchList = this.props.watchlist.indexOf(this.props.symbol) < 0;
    return (
        <i onClick={e => this.handleClick(e)} className={notInWatchList ? "far fa-star text-danger" : "fas fa-star text-danger"}></i>
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

export default connect(mapStateToProps, mapDispatchToProps)(AddToWatchlist);

