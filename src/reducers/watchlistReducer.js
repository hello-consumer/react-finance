import { ADD_TO_WATCHLIST } from '../actions'




function watchlistReducer(state = [], action){
    switch(action.type){
        case ADD_TO_WATCHLIST:{
            var newState = state.slice();
            var position = newState.indexOf(action.symbol);
            if(position < 0){
                newState.push(action.symbol);
            } else {
                newState.splice(position, 1);
            }
            return newState;
        }
        default: {
            return state;
        }
    }
    
}

export default watchlistReducer;