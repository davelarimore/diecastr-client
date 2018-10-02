import React from 'react';
import { StatusFilters } from './statusFilters';
import { shallow, mount } from 'enzyme';

it('Renders without crashing', () => {
    shallow(<StatusFilters />);
});