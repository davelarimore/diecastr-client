import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './modules';
import { refreshAuthToken, decodeToken } from './modules/auth';

const middleware = applyMiddleware(thunk);

export const store = createStore(
    reducers,
    compose(middleware, window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f)
)

// Hydrate the authToken from localStorage if it exist
const token = store.getState().auth.authToken;

if (token) {
    store.dispatch(decodeToken(token));
    store.dispatch(refreshAuthToken());
}