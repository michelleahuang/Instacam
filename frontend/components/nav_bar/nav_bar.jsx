import React from 'react'
import { Link, Redirect } from 'react-router-dom';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {show: false};
        this.showDropdown = this.showDropdown.bind(this);
    }

    showDropdown(e) {
        e.preventDefault();
        this.setState({show: !this.state.show})
    }


    render() {
        let display = null;

        if (this.props.currentUser) {
            display = 
            <div id="nav-bar-container">
                <div id="nav-bar">
                    <Link to="/" id="nav-bar-h1">Instacam</Link>
                    <div id="nav-bar-icons">
                        <Link to="/"><svg className="home-nav-icon nav-bar-icon" aria-label="Home" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M22 23h-6.001a1 1 0 01-1-1v-5.455a2.997 2.997 0 10-5.993 0V22a1 1 0 01-1 1H2a1 1 0 01-1-1V11.543a1.002 1.002 0 01.31-.724l10-9.543a1.001 1.001 0 011.38 0l10 9.543a1.002 1.002 0 01.31.724V22a1 1 0 01-1 1z"></path></svg>
                        </Link>
                        <svg className="post-nav-icon nav-bar-icon" aria-label="New Post" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M2 12v3.45c0 2.849.698 4.005 1.606 4.944.94.909 2.098 1.608 4.946 1.608h6.896c2.848 0 4.006-.7 4.946-1.608C21.302 19.455 22 18.3 22 15.45V8.552c0-2.849-.698-4.006-1.606-4.945C19.454 2.7 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.547 2 5.703 2 8.552z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="6.545" x2="17.455" y1="12.001" y2="12.001"></line><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="12.003" x2="12.003" y1="6.545" y2="17.455"></line></svg>
                        <img className="profile-nav-icon nav-bar-icon" onClick={this.showDropdown} id={this.state.show ? "profile-nav-icon-active" : ""} src={this.props.currentUser.photoUrl} alt="profile photo"></img>
                            <div className="profile-dropdown" id={this.state.show ? "show" : ""}>
                                <div className="dropdown-icon-div">
                                    <svg className="dropdown-profile dropdown-icon" aria-label="Profile" color="#262626" fill="#262626" height="16" role="img" viewBox="0 0 24 24" width="16"><circle cx="12.004" cy="12.004" fill="none" r="10.5" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2"></circle><path d="M18.793 20.014a6.08 6.08 0 00-1.778-2.447 3.991 3.991 0 00-2.386-.791H9.38a3.994 3.994 0 00-2.386.791 6.09 6.09 0 00-1.779 2.447" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2"></path><circle cx="12.006" cy="9.718" fill="none" r="4.109" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2"></circle></svg>
                                    <p>Profile</p>
                                </div>
                                <div className="dropdown-icon-div">
                                    <svg onClick={this.props.logout} className="dropdown-switch dropdown-icon" aria-label="Switch Accounts" color="#262626" fill="#262626" height="16" role="img" viewBox="0 0 24 24" width="16"><path d="M8 8.363a1 1 0 00-1-1H4.31a8.977 8.977 0 0114.054-1.727 1 1 0 101.414-1.414A11.003 11.003 0 003 5.672V3.363a1 1 0 10-2 0v5a1 1 0 001 1h5a1 1 0 001-1zm14 6.274h-5a1 1 0 000 2h2.69a8.977 8.977 0 01-14.054 1.727 1 1 0 00-1.414 1.414A11.004 11.004 0 0021 18.33v2.307a1 1 0 002 0v-5a1 1 0 00-1-1z"></path></svg>
                                    <p onClick={this.props.logout}>Switch Accounts</p>
                                </div>
                                <div className="dropdown-icon-div" id="dropdown-logout" onClick={this.props.logout}>
                                    <p>Log Out</p>
                                </div>
                            </div>
                        </div>
                        {/* <p id="nav-bar-username">{this.props.currentUser.username}</p> */}
                </div>
            </div>
        }
        
        return (
            display
        )
    }
}

export default NavBar;