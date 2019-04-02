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
    
    let response = await instance.loadData("https://gist.githubusercontent.com/hello-consumer/34435a175fee212d7a2af6d0217e50e0/raw/c3c7c2503c4d1087b26ebc164b2dea3b700aa5ef/aapl.json");
    expect(response.companyName).toBe("Apple Inc.");
});
