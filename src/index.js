import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import App from './app';
import registerServiceWorker from './utils/registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import './common/rootStyles.scss';

ReactDOM.render(
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    ,document.getElementById('root'));

registerServiceWorker();