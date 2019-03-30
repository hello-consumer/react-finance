import React from 'react';
import Quote from './Quote';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
    let mockQuote = {
        latestPrice: 0,
        latestTime: new Date(),
        open: 0,
        high: 0,
        low: 0,
        week52High: 0,
        week52Low: 0
    }

    shallow(<Quote data={mockQuote} />);
});
