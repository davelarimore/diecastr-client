import React from 'react';
import { UploadPhotoForm } from './uploadPhotoForm';
import { shallow, mount } from 'enzyme';

it('Renders without crashing', () => {
    const wrapper = shallow(<UploadPhotoForm photoKey='photoUrl1' />);
    expect(wrapper.hasClass('photoButtonContainer')).toEqual(true);
});