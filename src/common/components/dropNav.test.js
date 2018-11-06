import React from 'react';
import DropNav from './dropNav';
import { shallow, mount } from 'enzyme';

it('Renders without crashing', () => {
    shallow(<DropNav />);
});