import { UPDATE_MATCHED_SYMBOLS } from '../actions'

function matchedSymbolReducer(state = [], action){
    switch(action.type){
        case UPDATE_MATCHED_SYMBOLS:{
            return action.symbols;
        }
        default: {
            return state;
        }
    }
}

export default matchedSymbolReducer;