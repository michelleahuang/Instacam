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
                <section id="session-box">
                    <div id="session-phone-container">
                        <img id="session-phone" src={SessionFormPhonePhoto} alt="phone"></img>
                    </div>
                    <div id="session-form">
                        <h1>Instacam</h1>
                        <form onSubmit={this.handleSubmit}>
                            <input className="input box" type="text" value={this.state.username} placeholder="Username" onChange={this.update('username')}></input>
                            <input className="input box" type="password" value={this.state.password} placeholder="Password" onChange={this.update('password')}></input>
                            <button type="submit">{this.props.formType}</button>
                            <div id="OR-divider">
                                <div class="OR-line"></div>
                                <p>OR</p>
                                <div class="OR-line"></div>
                            </div>
                            <div id="demo">Log in with Demo User</div>
                        </form>
                        {this.renderErrors()}
                        <div id="other-form">
                            <Link to={this.otherLink()}>Other Link</Link>
                        </div>
                    </div>
                </section>
                <footer>
                    <p>Temporary footer content</p>
                </footer>
            </div>
        );
    }
}

export default SessionForm;