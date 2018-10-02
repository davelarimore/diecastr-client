import React from 'react';
import { ModelList } from './modelList';
import { shallow, mount } from 'enzyme';

const models = [
        {
            title: '1980 Camaro',
            modelMfg: 'Hot Wheels',
            scale: '1:64',
            img1Url: 'https://vignette.wikia.nocookie.net/hotwheels/images/a/a8/Z28_white.JPG/revision/latest?cb=20091207051315',
        },
        {
            title: '1981 Camaro',
            modelMfg: 'Hot Wheels',
            scale: '1:64',
            img1Url: 'https://vignette.wikia.nocookie.net/hotwheels/images/a/a8/Z28_white.JPG/revision/latest?cb=20091207051315',
        },
        {
            title: '1982 Camaro',
            modelMfg: 'Hot Wheels',
            scale: '1:64',
            img1Url: 'https://vignette.wikia.nocookie.net/hotwheels/images/a/a8/Z28_white.JPG/revision/latest?cb=20091207051315',
        },
        {
            title: '1983 Camaro',
            modelMfg: 'Hot Wheels',
            scale: '1:64',
            img1Url: 'https://vignette.wikia.nocookie.net/hotwheels/images/a/a8/Z28_white.JPG/revision/latest?cb=20091207051315',
        },
        {
            title: '1984 Camaro',
            modelMfg: 'Hot Wheels',
            scale: '1:64',
            img1Url: 'https://vignette.wikia.nocookie.net/hotwheels/images/a/a8/Z28_white.JPG/revision/latest?cb=20091207051315',
        }
    ]

it('Renders without crashing', () => {
    shallow(<ModelList models={models}/>);
});