import React from 'react';
import Template from './Template';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
    shallow(<Template />);
});
