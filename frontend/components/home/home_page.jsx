import React from 'react';
import SplashBanner from './splash_banner';
import SpaceportThumbs from '../spaceports/spaceport_thumbs';

const HomePage = () => (
    <section className="homepage">
        <SplashBanner />
        <div id="recommended-destinations" className="recommended-destinations">
            <h2>
                <span className="tagline">Get Away</span>
                Recommended Destinations
            </h2>
            <SpaceportThumbs />
        </div>
    </section>
);

export default HomePage;