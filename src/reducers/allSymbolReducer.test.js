import allSymbolReducer from './allSymbolReducer';
import {loadAllSymbols, exampleAction} from '../actions'


it('ignores unsubscribed actions', () => {
    let dispatchedAction = exampleAction("This is a test");
    let initial = [];
    let expected = []
    let result = allSymbolReducer(initial, dispatchedAction);
    expect(result).toEqual(expected);
});

it('returns all symbols when loaded', () => {
    let expected = [1, 2, 3];
    let dispatchedAction = loadAllSymbols(expected);
    let initial = [];
    let result = allSymbolReducer(initial, dispatchedAction);
    expect(result).toEqual(expected);
});

it('replaces old symbols', () => {
    let expected = [2];
    let initial = [1];
    let dispatchedAction = loadAllSymbols(expected);
    let result = allSymbolReducer(initial, dispatchedAction);
    expect(result).toEqual(expected);
});
  