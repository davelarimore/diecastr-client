import React from 'react';
import { LoginForm } from './loginForm';
import { shallow, mount } from 'enzyme';

it('Renders without crashing', () => {
    shallow(<LoginForm handleSubmit={() => {}} />);
});