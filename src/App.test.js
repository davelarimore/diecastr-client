import React from 'react';
import { App } from './app';
import { shallow, mount } from 'enzyme';

it('Renders without crashing', () => {
  shallow(<App />);
});