/*
 * action types
 */
export const EXAMPLE_ACTION = 'EXAMPLE_ACTION'

export function exampleAction(change){
  return { type: EXAMPLE_ACTION, change }
}

export const UPDATE_MATCHED_SYMBOLS = 'UPDATE_MATCHED_SYMBOLS'

export function updateMatchedSymbols(symbols){
  return {type: UPDATE_MATCHED_SYMBOLS, symbols }
}



