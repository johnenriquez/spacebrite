import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            firstname: "",
            lastname: "",
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.loginDemoUser = this.loginDemoUser.bind(this);
    }

    componentWillUnmount() {
        this.props.clearSessionErrors();
    }

    update(field) {
        return e => this.setState({ [field]: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    sessionErrors() {
        const { errors } = this.props;
        return (
            <ul className="form-errors">
                { errors.map((error, i) => <li key={i} className="form-error">{ error }</li>) }
            </ul>
        );
    }

    formSwitchMessage(formType) {
        return (formType === "signup") ? (
            <Link to="/login">Log In</Link>
        ) : (
            <Link to="/signup">Sign Up</Link>
        );
    }

    loginDemoUser(e) {
        e.preventDefault();
        this.props.loginDemoUser();
    }

    nameInputs(isSignup) {
        if (isSignup) {
            return (
                <div className="name-inputs">
                    <div className="form-group">
                        <label htmlFor="firstname">First Name</label>
                        <input type="text" name="firstname" placeholder="First Name" value={this.state.firstname} onChange={this.update('firstname')} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastname">Last Name</label>
                        <input type="text" name="lastname" placeholder="Last Name" value={this.state.lastname} onChange={this.update('lastname')} />
                    </div>
                </div>
            );
        }
    }

    render() {
        const { formType } = this.props;
        const isSignup = (formType === "signup");
        let formClass = "session-form";
        formClass += (isSignup) ? " signup" : " login";

        return (
            <div className="session-form-container">
                <form className={formClass} onSubmit={this.handleSubmit}>
                    <header className="session-form-header">
                        <h1>{(isSignup) ? "Sign Up" : "Log In"}</h1>
                    </header>
                    {this.sessionErrors()}
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" placeholder="Email" value={this.state.email} onChange={this.update('email')} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.update('password')} />
                    </div>
                    {this.nameInputs(isSignup)}
                    <div className="form-group">
                        <button type="submit">{(isSignup) ? 'Sign Up' : 'Log In'}</button>
                    </div>
                    <footer className="session-form-footer">
                        <p className="form-switch-message">{this.formSwitchMessage(formType)} instead or try the <a href="#" onClick={this.loginDemoUser}>Demo User</a></p>
                    </footer>
                </form>
            </div>
        );
    }
}

export default SessionForm;