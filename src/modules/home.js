// constants
const LOAD = 'my-app/widgets/LOAD';
const CREATE = 'my-app/widgets/CREATE';
const UPDATE = 'my-app/widgets/UPDATE';
const REMOVE = 'my-app/widgets/REMOVE';

// default state
const defaultState = {
    users: [{
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