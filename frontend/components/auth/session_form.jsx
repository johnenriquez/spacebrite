import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
        }
        this.handleSubmit = this.handleSubmit.bind(this);
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
            <p className="form-switch-message"><Link to="/login">Log In</Link> instead</p>
        ) : (
            <p className="form-switch-message"><Link to="/signup">Sign Up</Link> instead</p>
        );
    }

    render() {
        const { formType } = this.props;
        const isSignup = (formType === "signup");
        let formClass = "session-form";
        formClass += (isSignup) ? " signup" : " login";

        return (
            <div className="session-form-container">
                <header className="session-form-header">
                    <h1>{ (isSignup) ? "Sign Up" : "Log In" }</h1>
                </header>
                { this.sessionErrors() }
                <form className={formClass} onSubmit={ this.handleSubmit }>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" placeholder="Email" value={this.state.email} onChange={this.update('email')} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.update('password')} />
                    </div>
                    <div className="form-group">
                        <button type="submit">{(isSignup) ? 'Sign Up' : 'Log In'}</button>
                    </div>
                </form>
                <footer className="session-form-footer">
                    {this.formSwitchMessage(formType)}
                </footer>
            </div>
        );
    }
}

export default SessionForm;