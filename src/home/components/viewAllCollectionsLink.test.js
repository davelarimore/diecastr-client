import React from 'react';
import { ViewAllCollectionsLink } from './viewAllCollectionsLink';
import { shallow, mount } from 'enzyme';

it('Renders without crashing', () => {
    shallow(<ViewAllCollectionsLink />);
});