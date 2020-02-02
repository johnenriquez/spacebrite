import React from 'react';
import { Link } from 'react-router-dom';
import AuthLinks from '../auth/auth_links_container';
import Icon from '../common/icon';

const SiteHeader = () => (
    <header className="site-header">
        <div className="container">
            <div className="site-logo">
                <h1><Link to="/">spacebrite<Icon className="fas fa-space-shuttle" /></Link></h1>
            </div>
            <nav className="auth-links">
                <AuthLinks />
            </nav>
        </div>
    </header>
);

export default SiteHeader;