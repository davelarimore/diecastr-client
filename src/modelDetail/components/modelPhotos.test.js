import React from 'react';
import { ModelPhotos } from './modelPhotos';
import { shallow, mount } from 'enzyme';


// default state
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
            quantity: '1',
            status: 'Not for sale',
            notes: 'Lorem ipsum dolor sit amet',
            tags: ['rally', 'livery'],
            photos: [
                'https://vignette.wikia.nocookie.net/hotwheels/images/a/a8/Z28_white.JPG/revision/latest?cb=20091207051315',
                'https://vignette.wikia.nocookie.net/hotwheels/images/a/a8/Z28_white.JPG/revision/latest?cb=20091207051315',
                'https://vignette.wikia.nocookie.net/hotwheels/images/a/a8/Z28_white.JPG/revision/latest?cb=20091207051315',
                'https://vignette.wikia.nocookie.net/hotwheels/images/a/a8/Z28_white.JPG/revision/latest?cb=20091207051315',
            ],
        }

it('Renders without crashing', () => {
    shallow(<ModelPhotos model={model}/>);
});