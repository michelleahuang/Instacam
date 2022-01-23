import React from 'react';
import { Link } from 'react-router-dom';
import SessionFormPhonePhoto from '../../../app/assets/images/session_form_phone.png'

class SignupSessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            name: '',
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
            // <div id="session-container">
            //     <section id="session-wrapper">
            //         <div id="session-phone-container">
            //             <img id="session-phone" src={SessionFormPhonePhoto} alt="phone"></img>
            //         </div>
            //         <div id="session-box">
            //             <div className="panel-box" id="session-form-container">
            //                 <h1>Instacam</h1>
            //                 <form id="session-form" onSubmit={this.handleSubmit}>
            //                     <input className="input-box" type="text" value={this.state.email} placeholder="Email" onChange={this.update('email')}></input>
            //                     <input className="input-box" type="text" value={this.state.name} placeholder="Full Name" onChange={this.update('name')}></input>
            //                     <input className="input-box" type="text" value={this.state.username} placeholder="Username" onChange={this.update('username')}></input>
            //                     <input className="input-box" type="password" value={this.state.password} placeholder="Password" onChange={this.update('password')}></input>
            //                     <button id="form-button" type="submit">{this.props.formType}</button>
            //                     <div id="or-divider">
            //                         <div className="or"></div>
            //                         <p>OR</p>
            //                         <div className="or"></div>
            //                     </div>
            //                     <div id="demo">Log in with Demo User</div>
            //                 </form>
            //                 {this.renderErrors()}
            //             </div>
            //             <div className="panel-box" id="other-form">
            //                 <p>Have an account? <Link className="other-form-link" to='/login'>Log In</Link></p>                     
            //             </div>
            //         </div>
            //     </section>
            //     <footer>
            //         <ul>
            //             <li id="github">
            //                 <a href="https://github.com/michelleahuang" target="_blank">GitHub</a>
            //             </li>
            //             <li id="linkedin">
            //                 <a href="https://www.linkedin.com/in/michelleahuang/" target="_blank">LinkedIn</a>
            //             </li>
            //             <li id="angelist">
            //                 <a href="#" target="_blank">AngelList</a>
            //             </li>
            //         </ul>
            //         <p>© 2022 Instacam by Michelle Huang</p>
            //     </footer>
            // </div>


            <div id="signup-session-container">
                    <div id="signup-session-box">
                        <div className="panel-box" id="signup-session-form-container">
                            <h1>Instacam</h1>
                            <form id="signup-session-form" onSubmit={this.handleSubmit}>
                                <input className="input-box" type="text" value={this.state.email} placeholder="Email" onChange={this.update('email')}></input>
                                <input className="input-box" type="text" value={this.state.name} placeholder="Full Name" onChange={this.update('name')}></input>
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
                            <p>Have an account? <Link className="other-form-link" to='/login'>Log In</Link></p>                     
                        </div>
                    </div>
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

export default SignupSessionForm;