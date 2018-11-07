import React from 'react';
import Modal from 'react-modal';
import DeleteModelDialog from './deleteModelDialog';
import { shallow, mount } from 'enzyme';

it('Renders without crashing', () => {
    const wrapper = shallow(<DeleteModelDialog />);
    expect(wrapper.find(Modal).length).toEqual(1);
});

it('opens modal when button is clicked', () => {
    const wrapper = shallow(<DeleteModelDialog />);
    wrapper.find('.deleteButton').simulate('click');
    expect(wrapper.find('Modal').prop('isOpen')).toEqual(true);
});