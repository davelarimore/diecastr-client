import React from 'react';
import { UploadAvatarForm } from './uploadAvatarForm';
import { shallow, mount } from 'enzyme';

it('Renders without crashing', () => {
    shallow(<UploadAvatarForm handleSubmit='' />);
});