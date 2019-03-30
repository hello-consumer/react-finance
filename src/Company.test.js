import React from 'react';
import Company from './Company';
import { shallow } from 'enzyme';

it('renders without crashing', () => {

    let mockCompany = {
        companyName: "Widgets Inc",
        symbol: "W",
        industry: "Manufacturing",
        sector: "Beef",
        CEO: "Beef Widget",
        exchange: "NYSE"
    }

    shallow(<Company data={mockCompany} />);
});

