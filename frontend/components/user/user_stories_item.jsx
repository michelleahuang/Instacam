import React from 'react';
import { Link } from 'react-router-dom';

class UserStoriesItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <li id="user-stories-item">
                    <div id="user-stories-border">
                        <div id="user-stories-padding">
                            <Link className="link" to={`/users/${this.props.user.id}`}>
                                <img id="user-stories-icon" src={this.props.user.photoUrl}></img>
                            </Link>
                        </div>
                    </div>
                    <Link className="link" to={`/users/${this.props.user.id}`}>
                        <p id="user-stories-username">{this.props.user.username}</p>
                    </Link>
                </li>
            </div>
        )
    }
}

export default UserStoriesItem;