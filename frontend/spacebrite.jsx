import React from 'react';
import ReactDOM from 'react-dom';
import { login, logout, signup } from './actions/session_actions';
import configureStore from './store/store';

const store = configureStore();

window.dispatch = store.dispatch;
window.login = login;
window.logout = logout;
window.signup = signup;


document.addEventListener("DOMContentLoaded", () => {
    ReactDOM.render(
        <h1>Spacebrite has launched! 🚀</h1>,
        document.getElementById('root')
    );
});