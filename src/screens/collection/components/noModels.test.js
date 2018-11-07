import React from 'react';
import { NoModels } from './noModels';
import { shallow, mount } from 'enzyme';


it('Renders without crashing', () => {
    shallow(<NoModels />);
});