import React from 'react';
import { Footer } from './footer';
import { shallow, mount } from 'enzyme';

it('Renders without crashing', () => {
    shallow(<Footer />);
});