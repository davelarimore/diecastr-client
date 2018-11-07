import React from 'react';
import { PublicNav } from './publicNav';
import { shallow, mount } from 'enzyme';

it('Renders without crashing', () => {
    const wrapper = shallow(<PublicNav />);
    expect(wrapper.hasClass('publicNav')).toEqual(true);
});

it('Should open menu when clicked', () => {
    const wrapper = shallow(<PublicNav />);
    wrapper.childAt(0).simulate('click');
    expect(wrapper.state().showMenu).toEqual(true);
});