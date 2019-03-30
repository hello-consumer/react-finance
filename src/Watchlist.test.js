import React from 'react';
import Watchlist from './Watchlist';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
    shallow(<Watchlist />);
});
