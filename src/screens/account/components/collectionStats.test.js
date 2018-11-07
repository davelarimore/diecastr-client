import React from 'react';
import { CollectionStats } from './collectionStats';
import { shallow, mount } from 'enzyme';

const models = [
        {
            title: '1980 Camaro',
            modelMfg: 'Hot Wheels',
            scale: '1:64',
            purchasePrice: 14.99,
            estValue: 30.00,
        },
        {
            title: '1981 Camaro',
            modelMfg: 'Hot Wheels',
            scale: '1:64',
            purchasePrice: 14.99,
            estValue: 30.00,
        },
    ]

it('Renders without crashing', () => {
    shallow(<CollectionStats models={models} />);
});