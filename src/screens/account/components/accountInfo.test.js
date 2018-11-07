import React from 'react';
import { AccountInfo } from './accountInfo';
import { shallow, mount } from 'enzyme';

const user = {
    userName: 'carguy98',
    email: 'fake@diecastr.com',
    avatarUrl: 'test',
}

it('Renders without crashing', () => {
    shallow(<AccountInfo user={user} />);
});