import React from 'react';
import { UserNav } from './userNav';
import { shallow, mount } from 'enzyme';

it('Renders without crashing', () => {
    const wrapper = shallow(<UserNav />);
    expect(wrapper.hasClass('userNav')).toEqual(true);
});

it('Should open menu when clicked', () => {
    const wrapper = shallow(<UserNav />);
    wrapper.childAt(0).simulate('click');
    expect(wrapper.state().showMenu).toEqual(true);
});