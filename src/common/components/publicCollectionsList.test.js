import React from 'react';
import { PublicCollectionsList } from './publicCollectionsList';
import { shallow, mount } from 'enzyme';

const users = [
    {
        name: 'carguy1980',
        image: 'https://vignette.wikia.nocookie.net/hotwheels/images/a/a8/Z28_white.JPG/revision/latest?cb=20091207051315',
    },
    {
        name: 'fastdude',
        image: 'https://vignette.wikia.nocookie.net/hotwheels/images/a/a8/Z28_white.JPG/revision/latest?cb=20091207051315',
    },
    {
        name: 'tinytin',
        image: 'https://vignette.wikia.nocookie.net/hotwheels/images/a/a8/Z28_white.JPG/revision/latest?cb=20091207051315',
    },
    {
        name: 'zoomer',
        image: 'https://vignette.wikia.nocookie.net/hotwheels/images/a/a8/Z28_white.JPG/revision/latest?cb=20091207051315',
    }
    ]

it('Renders without crashing', () => {
    shallow(<PublicCollectionsList users={users}/>);
});