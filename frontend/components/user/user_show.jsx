import React from 'react';

class UserShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchUser(this.props.match.params.userId)
    }

    render() {
        let posts;
        let followers = this.props.users.length - 1
        let followings = this.props.users.length - 1
        // posts = this.props.user.posts.length;

        console.log(this.props.users)

        return (
            <div id="user-show-page">
                <div id="user-show-header">
                    <div id="user-avatar-container">
                        <img id="user-show-avatar" src={this.props.user.photoUrl}></img>
                    </div>
                    <div id="user-header-right">
                        <p id="header-username">{this.props.user.username}</p>
                        <div id="user-header-stats">
                            <p><span>#</span> posts</p>
                            <p><span>{followers}</span> followers</p>
                            <p><span>{followings}</span> following</p>
                        </div>
                        <p id="header-full-name">{this.props.user.name}</p>
                    </div>
                </div>
                <div id="posts-divider">
                    <svg id="posts-divider-icon" aria-label="" className="_8-yf5 " color="#262626" fill="#262626" height="12" role="img" viewBox="0 0 24 24" width="12"><rect fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width="18" x="3" y="3"></rect><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="9.015" x2="9.015" y1="3" y2="21"></line><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="14.985" x2="14.985" y1="3" y2="21"></line><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="21" x2="3" y1="9.015" y2="9.015"></line><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="21" x2="3" y1="14.985" y2="14.985"></line></svg>
                    <p id="posts-divider-text">POSTS</p>
                </div>
            </div>
        )
    }
}

export default UserShow;