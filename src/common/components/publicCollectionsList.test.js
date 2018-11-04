import React from 'react';
import { PublicCollectionsList } from './publicCollectionsList';
import { shallow, mount } from 'enzyme';

const collections = [
    {
        _id: '1234',
        userId: {
            userName: 'test',
            avatarUrl: 'test',
        },
    },
    {
        _id: '5678',
        userId: {
            userName: 'test2',
            avatarUrl: 'test2',
        },
    },
  
    ]

it('Renders without crashing', () => {
    shallow(<PublicCollectionsList collections={collections}/>);
});