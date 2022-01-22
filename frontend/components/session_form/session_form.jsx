import React from 'react';
import { Link } from 'react-router-dom';
import SessionFormPhonePhoto from '../../../app/assets/images/session_form_phone.png'

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
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
            <div id="session-container">
                <div id="session-box">
                    <h1>Instacam</h1>
                    {/* <img id="phone" src={SessionFormPhonePhoto}></img> */}
                    <h3>{this.props.formType}</h3>
                    <Link to={this.otherLink()}>Other Link</Link>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" value={this.state.username} placeholder="Username" onChange={this.update('username')}></input>
                        <input type="password" value={this.state.password} placeholder="Password" onChange={this.update('password')}></input>
                        <button type="submit">{this.props.formType}</button>
                    </form>
                    {this.renderErrors()}
                </div>

            </div>
        );
    }
}

export default SessionForm;