import React from 'react';
import { connect } from 'react-redux';
// import fetchFlight from flight_actions.js

class FlightShow extends React.Component {

    componentDidMount() {
        window.scrollTo(0, 0);
        this.props.fetchFlight();
    }

    render() {
        const { flight } = this.props;
        if (flight) {
            return (
                <div className="flight-show">
                    Turn this into modal {flight.number}
                </div>
            );
        } else {
            return (
                <div>Loading...</div>
            );
        }
    }
}

const mapStateToProps = (state, ownProps) => {
    let flightId = ownProps.match.params.flightId;
    let flight = state.entities.flights[flightId];
    return { flight }
};
const mapDispatchToProps = (dispatch, ownProps) => ({
    fetchFlight: () => dispatch(fetchFlight(ownProps.match.params.flightId)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FlightShow);