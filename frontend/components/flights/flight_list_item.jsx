import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchSpaceports } from '../../actions/spaceport_actions';
import Icon from '../common/icon';
import FalseLink from '../common/false_link';

class FlightListItem extends React.Component {

    constructor(props) {
        super(props);
    }

    // maybe item shouldnt be pulling this in.
    // TODO: refactor
    componentDidMount() {
        // possible to optimize by only loading origin/destination
        // or fetch the flight itself! with spaceports included
        this.props.fetchSpaceports();
    }

    timeFrom(timeString) {
        // maybe doing this via moment.js might help
        let time = new Date(timeString);
        let hours = time.getHours();
        let mins = time.getMinutes();
            if (hours < 10)
                hours = '0' + hours;
            if (mins < 10)
                mins = '0' + mins;
        let formatted = `${hours}:${mins}`
        // note we're not displaying timezones
        return formatted;
    }

    dateFrom(dateString) {
        var monthNames = [
            "Jan", "Feb", "Mar",
            "Apr", "May", "Jun", "Jul",
            "Aug", "Sep", "Oct",
            "Nov", "Dec"
        ];
        var dayNames = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
        ]
        let date = new Date(dateString);
        // let day = date.getDay();
        let month = date.getMonth();
        let dateNum = date.getDate();
        // let year = date.getFullYear();
        let formatted = `${monthNames[month]} ${dateNum}`
        return formatted;
    }

    render() {
        const { spaceports, key, flight } = this.props;
        if (flight && spaceports[flight.origin_id] && spaceports[flight.destination_id]) {
            let departureTime = this.timeFrom(flight.departure_time);
            let departureDate = this.dateFrom(flight.departure_time);
            let arrivalTime = this.timeFrom(flight.arrival_time);
            let arrivalDate = this.dateFrom(flight.arrival_time);
            let originCode = spaceports[flight.origin_id].identifier;
            let destinationCode = spaceports[flight.destination_id].identifier;
            return (
                <li key={key} className="flight-list-item">
                    <div className="spacecraft-details">
                        <p className="number">{flight.number}</p>
                        <p className="craft">
                            {flight.spaceline}<br />
                            {flight.spacecraft}
                        </p>
                    </div>
                    <div className="flight-times">
                        <p className="flight-date departure">
                            <span className="date">{departureDate}</span>
                            <span className="time">{departureTime}</span>
                        </p>
                        <p><Icon className="fas fa-space-shuttle" /></p>
                        <p className="flight-date arrival">
                            <span className="date">{arrivalDate}</span>
                            <span className="time">{arrivalTime}</span>
                        </p>
                    </div>
                    <div className="rule"></div>
                    <div className="org-dest-line">
                        <p className="origin-code">{originCode}</p>
                        <small>Nonstop</small>
                        <p className="destination-code">{destinationCode}</p>
                    </div>
                    <div className="flight-misc">
                        <p><Link to={`/flights/${flight.id}`}>Details</Link></p>
                        <p><FalseLink>Seats</FalseLink></p>
                        <ul className="icons">
                            <li><Icon className="fas fa-wifi" /></li>
                            <li><Icon className="fas fa-plug" /></li>
                            <li><Icon className="fab fa-usb" /></li>
                            <li><Icon className="fas fa-film" /></li>
                        </ul>
                    </div>
                </li>
            )
        } else {
            return null;
        }
    }
}

const mapStateToProps = state => ({
    spaceports: state.entities.spaceports
});
const mapDispatchToProps = dispatch => ({
    fetchSpaceports: () => dispatch(fetchSpaceports()),
});

export default connect(mapStateToProps, mapDispatchToProps)(FlightListItem);