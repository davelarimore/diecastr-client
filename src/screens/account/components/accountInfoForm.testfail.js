import React from 'react';
import { AccountInfoFormComponent } from './accountInfoForm';
import { shallow, mount } from 'enzyme';

it('Renders without crashing', () => {
    shallow(<AccountInfoFormComponent handleSubmit='' />);
});