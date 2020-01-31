import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

const Auth = ({ path, exact, loggedIn, component: Component }) => (
    <Route
        path={path}
        exact={exact}
        render={props =>
            (loggedIn) ? <Redirect to="/" /> : <Component {...props} />
        }
    />
);

// one day: make this dry-er
const Protected = ({ path, exact, loggedIn, component: Component }) => (
    <Route
        path={path}
        exact={exact}
        render={props =>
            (loggedIn) ? <Component {...props} /> : <Redirect to="/" />
        }
    />
);

const mapStateToProps = ({ session }) => ({
    loggedIn: Boolean(session.id)
});


export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));