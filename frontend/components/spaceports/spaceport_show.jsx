import React from 'react';
import { connect } from 'react-redux';
import { fetchSpaceport } from '../../actions/spaceport_actions';
import FlightList from '../flights/flight_list';
import SpaceportHeader from './spaceport_header';


class SpaceportShow extends React.Component {

    // TODO: properly update component on url/id switch
    // componentDidUpdate(prevProps) {
    //     if (this.props.spaceport && prevProps.spaceport && this.props.spaceport.id !== prevProps.spaceport.id) {
    //         this.props.fetchSpaceport();
    //     }
    // }

    componentDidMount() {
        window.scrollTo(0,0);
        this.props.fetchSpaceport();
    }

    render() {
        const { spaceport } = this.props;
        if (spaceport) {
            return (
                <div className="spaceport-show">
                    <SpaceportHeader spaceport={spaceport} />
                    <main>
                        <FlightList title="Inbound Flights" flights={spaceport.inboundFlights} />
                        <FlightList title="Outbound Flights" flights={spaceport.outboundFlights} />
                    </main>
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
    let spaceportId = ownProps.match.params.spaceportId;
    let spaceport = state.entities.spaceports[spaceportId];
    let flights = state.entities.flights;
    if (spaceport && spaceport.inbound_flight_ids && spaceport.outbound_flight_ids) {
        spaceport = Object.assign(
            {},
            spaceport,
            {
                outboundFlights: spaceport.outbound_flight_ids.map(id => flights[id]),
                inboundFlights: spaceport.inbound_flight_ids.map(id => flights[id]),
            }
        );
    }
    return { spaceport }
};
const mapDispatchToProps = (dispatch, ownProps) => ({
    fetchSpaceport: () => dispatch(fetchSpaceport(ownProps.match.params.spaceportId)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SpaceportShow);