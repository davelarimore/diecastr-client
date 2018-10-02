import React from 'react';
import { DefaultLayout } from './defaultLayout';
import { shallow, mount } from 'enzyme';

it('Renders without crashing', () => {
    shallow(<DefaultLayout />);
});