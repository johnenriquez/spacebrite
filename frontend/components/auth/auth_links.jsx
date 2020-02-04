import React from 'react';
import { Link } from 'react-router-dom';

const userInitials = user => {
    if (user.firstname && user.lastname) {
        return user.firstname.split('')[0] + user.lastname.split('')[0];
    } else {
        return user.email.split('')[0];
    }
}

const AuthLinks = ({ currentUser, logout }) => (
        (currentUser) ? (
            <ul>
                <li className="user-initials">{userInitials(currentUser)}</li>
                <li><button onClick={ logout }>Log Out</button></li>
            </ul>
        ) : (
            <ul>
                <li><Link to="/signup">sign up</Link></li>
                <li><Link to="/login">log in</Link></li>
            </ul>
        )
);

export default AuthLinks;