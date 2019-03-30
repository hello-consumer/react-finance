import React from 'react';
import News from './News';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
    shallow(<News />);
});
