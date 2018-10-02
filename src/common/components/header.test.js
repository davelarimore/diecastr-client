import React from 'react';
import { Header } from './header';
import { shallow, mount } from 'enzyme';

it('Renders without crashing', () => {
    shallow(<Header />);
});