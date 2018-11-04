import React from 'react';
import { ModelForm } from './modelForm';
import { shallow, mount } from 'enzyme';


const models = [
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
            tags: ['rally', 'livery'],
            photos: [
                'https://vignette.wikia.nocookie.net/hotwheels/images/a/a8/Z28_white.JPG/revision/latest?cb=20091207051315',
                'https://vignette.wikia.nocookie.net/hotwheels/images/a/a8/Z28_white.JPG/revision/latest?cb=20091207051315',
                'https://vignette.wikia.nocookie.net/hotwheels/images/a/a8/Z28_white.JPG/revision/latest?cb=20091207051315',
                'https://vignette.wikia.nocookie.net/hotwheels/images/a/a8/Z28_white.JPG/revision/latest?cb=20091207051315',
            ],
        }
    ]


it('Renders without crashing', () => {
    shallow(<ModelForm model={models}/>);
});