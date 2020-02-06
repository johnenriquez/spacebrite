import React from 'react';

const SpaceportHeader = ({ spaceport }) => (
    <header className="spaceport-header">
        <h1>{spaceport.identifier}</h1>
        <p>{spaceport.locality}, {spaceport.planet}</p>
    </header>
);

export default SpaceportHeader;