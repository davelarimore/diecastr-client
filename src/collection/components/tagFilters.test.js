import React from 'react';
import { TagFilters } from './tagFilters';
import { shallow, mount } from 'enzyme';

const tags = ['Rally', 'Livery'];

it('Renders without crashing', () => {
    shallow(<TagFilters tags={tags}/>);
});