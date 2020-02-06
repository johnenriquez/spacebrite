import React from 'react';
import SplashBanner from './splash_banner';
import SpaceportThumbs from '../spaceports/spaceport_thumbs';

const HomePage = () => (
    <section className="homepage">
        <SplashBanner />
        <div className="recommended-destinations">
            <h2>Recommended Destinations</h2>
            <SpaceportThumbs />
        </div>
    </section>
);

export default HomePage;