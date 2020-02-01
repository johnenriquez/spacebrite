import React from "react";
import { Route } from 'react-router-dom';
import { AuthRoute } from "../util/route_util";
import LoginFormContainer from './auth/login_form_container';
import SignupFormContainer from './auth/signup_form_container';
import HomePage from './home/home_page';
import SiteHeader from './layout/site-header';
import SiteFooter from './layout/site-footer';

const App = () => (
    <div className="site">
       <SiteHeader />

        <main className="site-body">
            <AuthRoute path="/login" component={LoginFormContainer} />
            <AuthRoute path="/signup" component={SignupFormContainer} />
            <Route exact path="/" component={HomePage} />
        </main>

        <SiteFooter />
    </div>
);

export default App;