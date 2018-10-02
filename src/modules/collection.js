// constants
const LOAD = 'my-app/widgets/LOAD';
const CREATE = 'my-app/widgets/CREATE';
const UPDATE = 'my-app/widgets/UPDATE';
const REMOVE = 'my-app/widgets/REMOVE';

// default state
const defaultState = {
    visibilityFilter: '',
    users: ['carguy1980', 'fastdude', 'tinytin', 'zoomer'],
    models: [
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
    ],
    tags: ['Rally', 'Livery']
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