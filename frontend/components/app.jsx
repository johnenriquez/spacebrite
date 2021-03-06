import React from "react";
import {
    Route,
    Switch,
} from 'react-router-dom';

import LoginFormContainer from './auth/login_form_container';
import SignupFormContainer from './auth/signup_form_container';
import Announcement from './home/announcement';
import HomePage from './home/home_page';
import SiteHeader from './layout/site-header';
import SiteFooter from './layout/site-footer';
import { AuthRoute } from "../util/route_util";
import NotFound from './common/not_found';
import SpaceportShow from './spaceports/spaceport_show';
import FlightShow from './flights/flight_show';

const App = () => (
    <div className="site">
        <Announcement />
        <SiteHeader />

        <main className="site-body">
            <Switch>
                <AuthRoute path="/login" component={LoginFormContainer} />
                <AuthRoute path="/signup" component={SignupFormContainer} />
                <Route path="/spaceports/:spaceportId" component={SpaceportShow} />
                <Route path="/flights/:flightId" component={FlightShow} />
                <Route exact path="/" component={HomePage} />
                <Route component={NotFound} />
            </Switch>
        </main>

        <SiteFooter />
    </div>
);

export default App;