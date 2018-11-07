import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import { StyleRoot, Style } from 'radium';
import App from './app';
import registerServiceWorker from './utils/registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import rootStyles from './common/rootStyles';

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