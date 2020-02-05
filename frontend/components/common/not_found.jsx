import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
    <div className="not-found">
        <div className="container">
            <h1>
                <span className="tagline">404 - Page Not Found</span>
                That Page Isn't On Our Radar
            </h1>
            <p>You might be trying to visit a place that doesn't exist. Not to worry, we'll get you where you need to go.</p>
            <p>See if any links at the bottom of the page are helpful, or simply start again from our <Link to="/">home page</Link>.</p>
        </div>
    </div>
);

export default NotFound;