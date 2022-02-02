import React from 'react';
import UserStoriesItem from './user_stories_item';

class UserStories extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ul id="user-index-stories-container">
                {this.props.users.map((user, idx) => <UserStoriesItem key={idx} user={user} />)}
            </ul>
        )
    }
}

export default UserStories;