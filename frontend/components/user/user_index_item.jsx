import React from 'react';
import { Link } from 'react-router-dom';

class UserIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <li id="user-index-container">
                    <div id="user-index-photo-name">
                        <Link className="link" to={`/users/${this.props.user.id}`}>
                            <img className="user-index-icon" src={this.props.user.photoUrl}></img>
                        </Link>
                        <div id="user-index-username-suggested">
                            <Link className="link" to={`/users/${this.props.user.id}`}>
                                <p id="user-index-username">{this.props.user.username}</p>
                            </Link>
                            <p id="suggested-for-you">Suggested for you</p>
                        </div>
                    </div>
                    <p id="following">Following</p>
                </li>
            </div>
        )
    }
}

export default UserIndexItem;