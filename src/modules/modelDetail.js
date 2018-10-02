// constants
const LOAD = 'my-app/widgets/LOAD';
const CREATE = 'my-app/widgets/CREATE';
const UPDATE = 'my-app/widgets/UPDATE';
const REMOVE = 'my-app/widgets/REMOVE';

// default state
const defaultState = {
    users: ['carguy1980', 'fastdude', 'tinytin', 'zoomer'],
    models: [
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
    ]
}


// reducer
export default function reducer(state = defaultState, action = {}) {
    switch (action.type) {
        // do reducer stuff
        default: return state;
    }
}

// actions
export function loadWidgets() {
    return { type: LOAD };
}

export function createWidget(widget) {
    return { type: CREATE, widget };
}

export function updateWidget(widget) {
    return { type: UPDATE, widget };
}

export function removeWidget(widget) {
    return { type: REMOVE, widget };
}