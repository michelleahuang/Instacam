import React from 'react';
import { Link } from 'react-router-dom';
import SessionFormPhonePhoto from '../../../app/assets/images/session_form_phone.png'

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            errors: []
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user).fail(() => {this.setState({errors: this.props.errors})})
    }

    update(field) {
        return (e) => this.setState({ [field]: e.currentTarget.value });
    }

    otherLink() {
        if (this.props.formType == 'Sign Up') {
            return <p>Have an account? <Link className="other-form-link" to='/login'>Log In</Link></p>;
        } else {
            return <p>Don't have an account? <Link className="other-form-link" to='/signup'>Sign Up</Link></p>;
        }
    }

    renderErrors() {
        if (this.state.errors.length > 0) {
            return this.state.errors.map((error, index) => {
                return (<p className="errors" key={index}>{error}</p>)
            });
        }
        else {
            return null;
        }
    }

    render() {
        return (
            <div id="session-container">
                <section id="session-wrapper">
                    <div id="session-phone-container">
                        <img id="session-phone" src={SessionFormPhonePhoto} alt="phone"></img>
                    </div>
                    <div id="session-box">
                        <div className="panel-box" id="session-form-container">
                            <h1>Instacam</h1>
                            <form id="session-form" onSubmit={this.handleSubmit}>
                                <input className="input-box" type="text" value={this.state.username} placeholder="Username" onChange={this.update('username')}></input>
                                <input className="input-box" type="password" value={this.state.password} placeholder="Password" onChange={this.update('password')}></input>
                                <button id="form-button" type="submit">{this.props.formType}</button>
                                <div id="or-divider">
                                    <div className="or"></div>
                                    <p>OR</p>
                                    <div className="or"></div>
                                </div>
                                <div id="demo">Log in with Demo User</div>
                            </form>
                            {this.renderErrors()}
                        </div>
                        <div className="panel-box" id="other-form">
                            {this.otherLink()}
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