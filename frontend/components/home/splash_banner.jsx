import React from 'react';
import FalseLink from '../common/false_link';
import Icon from '../common/icon';

const SplashBanner = () => (
    <div className="splash-banner-container">
        <div className="splash-banner">
            <div className="splash-banner-content">
                <div className="container">
                    <h1>Explore our lowest fares to Mars</h1>
                    <p>Nonstop flights to Valles Marineris and Olympus Mons</p>
                    <FalseLink className="btn">Book Now</FalseLink>
                </div>
            </div>
        </div>
        <div className="banner-cta">
            <ul>
                <li><FalseLink>Baggage fee changes <Icon className="fas fa-angle-right" /></FalseLink></li>
                <li><FalseLink>Optional service fees <Icon className="fas fa-angle-right" /></FalseLink></li>
            </ul>
        </div>
    </div>
);

export default SplashBanner;