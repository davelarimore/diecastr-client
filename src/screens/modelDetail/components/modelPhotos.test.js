import React from 'react';
import { ModelPhotos } from './modelPhotos';
import { shallow, mount } from 'enzyme';

const model = {
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
            tags: ['rally', 'livery'],
            photo1Url: 'test',
            photo2Url: 'test',
            photo3Url: 'test',
            photo4Url: 'test',
        }

it('Renders without crashing', () => {
    const wrapper = shallow(<ModelPhotos model={model}/>);
    expect(wrapper.childAt(0).hasClass('modelTitle')).toEqual(true);
});