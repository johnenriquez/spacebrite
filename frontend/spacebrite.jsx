import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store';

const store = configureStore();

window.getState = store.getState;
window.dispatch = store.dispatch;

document.addEventListener("DOMContentLoaded", () => {
    ReactDOM.render(
        <h1>Spacebrite has launched! 🚀</h1>,
        document.getElementById('root')
    );
});