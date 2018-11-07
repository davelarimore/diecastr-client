import React from 'react';
import { Pagination } from './pagination';
import { shallow, mount } from 'enzyme';


it('Renders without crashing', () => {
    shallow(<Pagination />);
});