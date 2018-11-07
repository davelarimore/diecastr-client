import React from 'react';
import { Toggle } from './toggle';
import { shallow, mount } from 'enzyme';

const isPublic = true;

it('Renders without crashing', () => {
    shallow(<Toggle isPublic={isPublic} />);
}); 

it('Should fire the callback when clicked', () => {
    const callback = jest.fn();
    const wrapper = mount(<Toggle setPublic={callback} />);
    wrapper.update();
    wrapper.simulate('click');
    expect(callback).toHaveBeenCalled();
});