import React from "react";
import AuthLinks from "./auth/auth_links_container";
import { Link } from 'react-router-dom';
import { AuthRoute } from "../util/route_util";
import LoginFormContainer from './auth/login_form_container';
import SignupFormContainer from './auth/signup_form_container';

const App = () => (
    <div className="site">
        <header className="site-header">
            <h1><Link to="/">Spacebrite</Link></h1>
            <AuthLinks />
        </header>

        <main className="site-body">
            <AuthRoute path="/login" component={LoginFormContainer} />
            <AuthRoute path="/signup" component={SignupFormContainer} />
        </main>

        <footer className="site-footer">
            <a href="https://github.com/johnenriquez/spacebrite">github</a>
        </footer>
    </div>
);

export default App;