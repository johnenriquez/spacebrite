import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchSpaceports } from '../../actions/spaceport_actions';


const mapStateToProps = state => ({
    spaceports: Object.values(state.entities.spaceports),
});

const mapDispatchToProps = dispatch => ({
    fetchSpaceports: () => dispatch(fetchSpaceports()),
});

const SpaceportThumb = ({key, spaceport}) => (
    <li className="spaceport-thumb" key={key}>
        <Link to={ `/spaceports/${spaceport.id}` }>
            <h3><span>{spaceport.identifier}</span></h3>
            <p>{spaceport.locality}, {spaceport.planet}</p>
        </Link>
    </li>
);

class SpaceportThumbs extends React.Component {

    componentDidMount() {
        this.props.fetchSpaceports();
    }

    render() {
        return (
            <div className="spaceport-thumbs">
                <ul>
                    { this.props.spaceports.map((spaceport, i) => <SpaceportThumb key={i} spaceport={spaceport} />) }
                </ul>
            </div>
        );
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SpaceportThumbs);