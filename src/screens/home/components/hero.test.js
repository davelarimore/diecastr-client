import React from 'react';
import { Hero } from './hero';
import { shallow, mount } from 'enzyme';

it('Renders without crashing', () => {
    shallow(<Hero />);
});