import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import * as serviceWorker from './serviceWorker';

document.addEventListener('DOMContentLoaded', () => {
    window.getState = store.getState;

    const root = document.getElementById('root')
    const app = (

        <Provider store={store}>
            <HashRouter>
                <App />
            </HashRouter>
        </Provider>
    )

    ReactDOM.render(app, root);

    // If you want your app to work offline and load faster, you can change
    // unregister() to register() below. Note this comes with some pitfalls.
    // Learn more about service workers: https://bit.ly/CRA-PWA
    serviceWorker.unregister();

});
