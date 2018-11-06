import React from 'react';
import { Loading } from './loading';
import { shallow, mount } from 'enzyme';

const message = 'test';

it('Renders without crashing', () => {
    shallow(<Loading />);});

it('Renders renders message', () => {
    const wrapper = shallow(<Loading message={message} />);
    expect(wrapper.text()).toEqual(message);
});