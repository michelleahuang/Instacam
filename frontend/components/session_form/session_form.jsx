import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.renderErrors = this.renderErrors.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    update(field) {
        return (e) => this.setState({ [field]: e.currentTarget.value });
    }

    otherLink() {
        if (this.props.formType == 'Sign Up') {
            return '/login';
        } else {
            return '/signup';
        }
    }

    renderErrors() {
        if (this.props.errors.length > 0) {
            return this.props.errors.map((error, index) => {
                return (<p key={index}>{error}</p>)
            });
        }
        else {
            return null;
        }
    }

    render() {
        return (
            <div>
                <h1>Instacam</h1>
                <h3>{this.props.formType}</h3>
                <Link to={this.otherLink()}>Other Link</Link>
                <form onSubmit={this.handleSubmit}>
                    <label>Username: 
                        <input type="text" value={this.state.username} onChange={this.update('username')}></input>
                    </label>
                    <label>Password: 
                        <input type="password" value={this.state.password} onChange={this.update('password')}></input>
                    </label>
                    <button type="submit">{this.props.formType}</button>
                </form>
                {this.renderErrors()}

            </div>
        );
    }
}

export default SessionForm;