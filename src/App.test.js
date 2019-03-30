import React from 'react';
import App from './App';
import { MemoryRouter } from 'react-router-dom';

import { createStore } from 'redux'
import store from './store'

import { shallow } from 'enzyme';


it('renders without crashing', () => {
  shallow(<MemoryRouter initialEntries={['/']} initialIndex={0}>
    <App/>
  </MemoryRouter>);
});


it('renders the about page', () => {
  shallow(<MemoryRouter initialEntries={['/about']} initialIndex={0}>
    <App/>
  </MemoryRouter>);
});

it('renders the watchlist', () => {
  shallow(<MemoryRouter initialEntries={['/watchlist']} initialIndex={0}>
    <App/>
  </MemoryRouter>);
});

it('renders page not found', () => {
  shallow(<MemoryRouter initialEntries={['/notapage']} initialIndex={0}>
    <App/>
  </MemoryRouter>);
});

it('renders search page', () => {
  shallow(<MemoryRouter initialEntries={['/search/cat']} initialIndex={0}>
    <App/>
  </MemoryRouter>);
});

it('renders details page', () => {
  shallow(<MemoryRouter initialEntries={['/details/aapl']} initialIndex={0}>
    <App/>
  </MemoryRouter>);
});
