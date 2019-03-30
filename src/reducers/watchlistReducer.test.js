import watchlistReducer from './watchlistReducer';
import {addToWatchlist, exampleAction} from '../actions'


it('ignores unsubscribed actions', () => {
    let dispatchedAction = exampleAction("This is a test");
    let initial = [];
    let expected = []
    let result = watchlistReducer(initial, dispatchedAction);
    expect(result).toEqual(expected);
});

it('adds a new item to the watchlist', () => {
    let expected = 1;
    let dispatchedAction = addToWatchlist(expected);
    let initial = [];
    let result = watchlistReducer(initial, dispatchedAction);
    expect(result.indexOf(expected)).not.toEqual(-1);
});

it('maintains existing symbols when new symbols are added', () => {
    let expected = 2;
    let dispatchedAction = addToWatchlist(expected);
    let initial = [1];
    let result = watchlistReducer(initial, dispatchedAction);
    expect(result.indexOf(1)).not.toEqual(-1);
    expect(result.indexOf(expected)).not.toEqual(-1);
});

it('removes a symbol if it already exists', () => {
    let expected = 1;
    let dispatchedAction = addToWatchlist(expected);
    let initial = [1, 2];
    let result = watchlistReducer(initial, dispatchedAction);
    expect(result.indexOf(expected)).toEqual(-1);
});