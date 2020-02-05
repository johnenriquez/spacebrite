import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login, signup, clearSessionErrors, demoUser } from '../../actions/session_actions';

const mapStateToProps = ({ errors: { session } }) => ({
    errors: session,
    formType: 'signup',
});
const mapDispatchToProps = dispatch => ({
    processForm: user => dispatch(signup(user)),
    clearSessionErrors: () => dispatch(clearSessionErrors()),
    loginDemoUser: () => dispatch(login(demoUser)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SessionForm);
