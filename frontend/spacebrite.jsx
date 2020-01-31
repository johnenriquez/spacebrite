import React from 'react';
import ReactDOM from 'react-dom';
import { login, logout, signup } from './actions/session_actions';
import configureStore from './store/store';
import Root from './components/root';

const store = configureStore();

document.addEventListener("DOMContentLoaded", () => {
    ReactDOM.render(
        <Root store={store} />,
        document.getElementById('root')
    );
});