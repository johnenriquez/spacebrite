import React from 'react';
import FalseLink from '../common/false_link';

const SplashBanner = () => (
    <div className="splash-banner">
        <div className="splash-banner-content">
            <div className="container">
                <h1>Explore our lowest fares to Mars</h1>
                <p>Nonstop flights to Valles Marineris and Olympus Mons</p>
                <FalseLink className="btn">Book Now</FalseLink>
            </div>
        </div>
    </div>
);

export default SplashBanner;