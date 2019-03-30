import React from 'react';
import { shallow } from 'enzyme';

import AddToWatchlist from './AddToWatchlist';

describe('AddToWatchlist', () => {

    it('renders without crashing', () => {
        shallow(<AddToWatchlist />);
    });
})