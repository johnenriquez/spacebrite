import React from 'react';
import { Link } from 'react-router-dom';
import AuthLinks from '../auth/auth_links_container';

const SiteHeader = () => (
    <header className="site-header">
        <div className="container">
            <div className="site-logo">
                <h1><Link to="/">spacebrite<i className="fas fa-space-shuttle"></i></Link></h1>
            </div>
            <nav className="auth-links">
                <AuthLinks />
            </nav>
        </div>
    </header>
);

export default SiteHeader;