import React from 'react';
import { Loading } from './loading';
import { shallow, mount } from 'enzyme';

it('Renders without crashing', () => {
    shallow(<Loading message='test' />);
});