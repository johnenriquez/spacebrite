import React from 'react';

const SpaceportHeader = ({ spaceport }) => (
    <header className="spaceport-header">
        <div className="container">
            <h1>{spaceport.identifier}</h1>
            <p>{spaceport.locality}, {spaceport.planet}</p>
        </div>
    </header>
);

export default SpaceportHeader;