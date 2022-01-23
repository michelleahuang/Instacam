import React from 'react'
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let display = null;

        if (this.props.currentUser) {
            display = 
                <div>
                    <h1>Instacam</h1>
                    <p>Welcome, {this.props.currentUser.username}</p>
                    <button onClick={this.props.logout}>Logout</button>
                </div>
        }
        
        
        return (
            display
        )
    }
}

export default NavBar;