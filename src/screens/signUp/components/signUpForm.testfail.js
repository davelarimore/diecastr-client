import React from 'react';
import { SignUpForm } from './signUpForm';
import { shallow, mount } from 'enzyme';

it('Renders without crashing', () => {
    shallow(<SignUpForm />);
});