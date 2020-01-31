import React from 'react';
import { Link } from 'react-router-dom';

const AuthLinks = ({ currentUser, logout }) => (
        (currentUser) ? (
            <ul>
                <li>{currentUser.email}</li>
                <li><button onClick={ logout }>logout</button></li>
            </ul>
        ) : (
            <ul>
                <li><Link to="/signup">sign up</Link></li>
                <li><Link to="/login">log in</Link></li>
            </ul>
        )
);

export default AuthLinks;