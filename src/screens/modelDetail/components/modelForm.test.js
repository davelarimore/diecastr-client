import React from 'react';
import { ModelFormComponent } from './modelForm';
import { shallow, mount } from 'enzyme';

const model = [
        {
            title: '1980 Camaro',
            modelMfg: 'Hot Wheels',
            scale: '1:64',
            color: 'White',
            condition: 'Mint',
            packaging: 'Mint Card',
            mfgYear: '2012',
            purchaseYear: '2013',
            purchasePrice: '14.99',
            estValue: '30.00',
            askingPrice: '30.00',
            status: 'Not for sale',
            notes: 'Lorem ipsum dolor sit amet',
            tags: ['test'],
        }
    ]

it('Renders without crashing', () => {
    shallow(<ModelFormComponent model={model} handleSubmit={() => { }} />);
});