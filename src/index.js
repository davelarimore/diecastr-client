import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { StyleRoot, Style } from 'radium';
import App from './app';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import reducers from './modules';
import rootStyles from './common/rootStyles'

const store = createStore(reducers)

ReactDOM.render(
    <StyleRoot>
    <Style rules={rootStyles} />
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
    </StyleRoot>, document.getElementById('root'));


registerServiceWorker();

// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import { characterReducer } from './reducers';

// export default createStore(
//     characterReducer,
//     applyMiddleware(thunk)
// );