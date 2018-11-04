import React from 'react';
import { HomeLayout } from './homeLayout';
import { shallow, mount } from 'enzyme';

it('Renders without crashing', () => {
    shallow(<HomeLayout />);
});