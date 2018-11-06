import React from 'react';
import { ModelList } from './modelList';
import { shallow, mount } from 'enzyme';

const models = [
        {
            _id: 1,
            title: '1980 Camaro',
            modelMfg: 'Hot Wheels',
            scale: '1:64',
            photo1Url: 'testUrl',
        },
    ]

it('Renders without crashing', () => {
    shallow(<ModelList models={models}/>);
});