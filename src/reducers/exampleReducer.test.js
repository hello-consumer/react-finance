import exampleReducer from './exampleReducer';
import {exampleAction} from '../actions'

it('ignores unsubscribed actions', () => {
    let dispatchedAction = {type: "UNSUBSCRIBED_ACTION"};
    let initial = [];
    let expected = []
    let result = exampleReducer(initial, dispatchedAction);
    expect(result).toEqual(expected);
});

it('listens for example action', () => {
    let message = "This is a test";
    let dispatchedAction = exampleAction(message);
    let initial = [];
    let expected = [message];
    let result = exampleReducer(initial, dispatchedAction);
    expect(result).toEqual(expected);
});
