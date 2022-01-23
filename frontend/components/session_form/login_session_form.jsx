import React from 'react';
import { Link } from 'react-router-dom';
import SessionFormPhonePhoto from '../../../app/assets/images/session_form_phone.png'

class LoginSessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            errors: []
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.loginDemoUser = this.loginDemoUser.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user).fail(() => {this.setState({errors: this.props.errors})})
    }

    update(field) {
        return (e) => this.setState({ [field]: e.currentTarget.value });
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

    loginDemoUser(e) {
        e.preventDefault();
        const demoUser = {username: "demo_user", password: "demouser"};
        this.props.processForm(demoUser);
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
                                <div id="demo" onClick={this.loginDemoUser}>Log in with Demo User</div>
                            </form>
                            {this.renderErrors()}
                        </div>
                        <div className="panel-box" id="other-form">
                            <p>Don't have an account? <Link className="other-form-link" to='/signup'>Sign Up</Link></p>
                        </div>
                    </div>
                </section>
                <footer>
                    <ul>
                        <li id="github">
                            <a href="https://github.com/michelleahuang" target="_blank">GitHub</a>
                        </li>
                        <li id="linkedin">
                            <a href="https://www.linkedin.com/in/michelleahuang/" target="_blank">LinkedIn</a>
                        </li>
                        <li id="angelist">
                            <a href="#" target="_blank">AngelList</a>
                        </li>
                    </ul>
                    <p>© 2022 Instacam by Michelle Huang</p>
                </footer>
            </div>
        );
    }
}

export default LoginSessionForm;