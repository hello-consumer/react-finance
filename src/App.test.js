import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom'

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import store from './store'

const createdStore = createStore(store);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><Provider store={createdStore}><App /></Provider></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
