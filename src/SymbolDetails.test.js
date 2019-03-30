import React from 'react';
import SymbolDetails from './SymbolDetails';
import { shallow } from 'enzyme';

it('renders without crashing in full detail', () => {
    let mockSymbol = {
        symbol: 'AAPL'
    };

    shallow(<SymbolDetails showFullDetail symbol={mockSymbol} />);
});

it('renders without crashing in abbreviated detail', () => {
    let mockSymbol = {
        symbol: 'AAPL'
    };

    shallow(<SymbolDetails symbol={mockSymbol} />);
});

it('loads data', async () => {
    let mockSymbol = {
        symbol: 'AAPL'
    };

    let wrapper = shallow(<SymbolDetails symbol={mockSymbol} />);
    let instance = wrapper.instance();
    
    let response = await instance.loadData('AAPL', false);
    expect(response.companyName).toBe("Apple Inc.");
});
