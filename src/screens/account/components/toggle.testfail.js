import React from 'react';
import { Toggle } from './toggle';
import { shallow, mount } from 'enzyme';

it('Renders without crashing', () => {
    shallow(<Toggle />);
}); 