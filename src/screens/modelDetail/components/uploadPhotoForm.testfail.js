import React from 'react';
import { UploadPhotoForm } from './uploadPhotoForm';
import { shallow, mount } from 'enzyme';

it('Renders without crashing', () => {
    shallow(<UploadPhotoForm photoKey='photoUrl1' />);
});