import React from 'react';
import { connect } from 'react-redux';
import { fetchSpaceport } from '../../actions/spaceport_actions';

const SpaceportHeader = ({ spaceport}) => (
    <header className="spaceport-header">
        <h1>{spaceport.identifier}</h1>
        <p>{spaceport.locality}, {spaceport.planet}</p>
    </header>
);

const FlightList = ({ title, spaceport }) => (
    <div className="flight-list">
        <header>
            <h2>{title}</h2>
        </header>
    </div>
);

class SpaceportShow extends React.Component {

    constructor(props) {
        super(props);
    }

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
                        <FlightList title="Inbound Flights" spaceport={spaceport} />
                        <FlightList title="Outbound Flights" spaceport={spaceport} />
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