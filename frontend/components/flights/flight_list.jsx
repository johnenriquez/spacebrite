import React from 'react';
import FlightListItem from './flight_list_item';

const renderFlightItems = flights => {
    return (flights) ? 
            flights.map((flight, i) => <FlightListItem key={i} flight={flight} />)
            : (<li>No flights to show</li>);
}

const FlightList = ({ title, flights }) => {
    return (
        <div className="flight-list">
            <div className="container">
                <header>
                    <h2>{title}</h2>
                </header>
                <ul>
                    {renderFlightItems(flights)}
                </ul>
            </div>
        </div>
    );
}

export default FlightList;