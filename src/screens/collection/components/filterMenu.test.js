import React from 'react';
import { FilterMenu } from './filterMenu';
import { shallow, mount } from 'enzyme';

it('Renders without crashing', () => {
    shallow(<FilterMenu />);
});