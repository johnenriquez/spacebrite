import React from 'react';

import FalseLink from '../common/false_link';
import Icon from '../common/icon';

class Announcement extends React.Component {

    constructor(props) {
        super(props);
        this.state = { closed: false }
        this.closeAnnouncement = this.closeAnnouncement.bind(this);
    }

    closeAnnouncement(e) {
        e.preventDefault();
        this.setState({ closed: true });
    }

    render() {
        const { closed } = this.state;
        const className = "announcement" + ((closed) ? " closed" : "");
        return (
            <div className={ className }>
                <div className="inner">
                    <FalseLink onClick={this.closeAnnouncement}><Icon className="fas fa-times" /></FalseLink>
                    <p>
                        <Icon className="fas fa-exclamation-circle" />
                        Important information if you're flying to Europa
                        <Icon className="fas fa-arrow-right" />
                    </p>
                </div>
            </div>
        );
    }
}

export default Announcement;