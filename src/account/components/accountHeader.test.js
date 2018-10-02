import React from 'react';
import { AccountHeader } from './accountHeader';
import { shallow, mount } from 'enzyme';

it('Renders without crashing', () => {
    shallow(<AccountHeader />);
});