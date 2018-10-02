import React from 'react';
import { CollectionHeader } from './collectionHeader';
import { shallow, mount } from 'enzyme';

it('Renders without crashing', () => {
    shallow(<CollectionHeader />);
});