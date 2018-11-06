import React from 'react';
import { Toggle } from './toggle';
import { shallow, mount } from 'enzyme';

const isPublic = true;

it('Renders without crashing', () => {
    const wrapper = shallow(<Toggle isPublic={isPublic} />);
    console.log(wrapper.debug());
}); 

// it('Renders without crashing', () => {
//     const wrapper = shallow(<Toggle />);
//     expect(wrapper.hasClass('publicNav')).toEqual(true);
// });

// it('Should toggle when clicked', () => {
//     const wrapper = shallow(<Toggle />);
//     wrapper.childAt(0).simulate('click');
//     expect(wrapper.state().showMenu).toEqual(true);
// });


// it('Should fire the callback when clicked', () => {
//     const callback = jest.fn();
//     const wrapper = mount(<Toggle setPublic={callback} />);
//     wrapper.update();
//     wrapper.simulate('submit');
//     expect(callback).toHaveBeenCalled();
// });