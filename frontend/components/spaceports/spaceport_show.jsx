import React from 'react';
import { connect } from 'react-redux';
import { fetchSpaceport } from '../../actions/spaceport_actions';
import FlightList from '../flights/flight_list';
import SpaceportHeader from './spaceport_header';


class SpaceportShow extends React.Component {

    constructor(props) {
        super(props);
    }

    // TODO: properly update component on url/id switch
    // componentDidUpdate(prevProps) {
    //     if (this.props.spaceport && prevProps.spaceport && this.props.spaceport.id !== prevProps.spaceport.id) {
    //         this.props.fetchSpaceport();
    //     }
    // }

    componentDidMount() {
        this.props.fetchSpaceport();
    }

    render() {
        const { spaceport } = this.props;
        if (spaceport) {
            return (
                <div className="spaceport-show">
                    <SpaceportHeader spaceport={spaceport} />
                    <main>
                        <FlightList title="Inbound Flights" flights={spaceport.inbound_flights} />
                        <FlightList title="Outbound Flights" flights={spaceport.outbound_flights} />
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

const mapStateToProps = (state, ownProps) => ({
    spaceport: state.entities.spaceports[ownProps.match.params.spaceportId],
});
const mapDispatchToProps = (dispatch, ownProps) => ({
    fetchSpaceport: () => dispatch(fetchSpaceport(ownProps.match.params.spaceportId)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SpaceportShow);