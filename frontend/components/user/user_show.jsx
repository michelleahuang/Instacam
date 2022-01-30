import React from 'react';

class UserShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        window.scrollTo(0,0);
        this.props.fetchUser(this.props.match.params.userId)
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.componentDidMount()
        }
    }

    render() {
        let usersShow;

        if (!this.props.user) {
            usersShow = null;
        } else {
            let posts = this.props.user.posts;

            let followers = this.props.user.totalCount ? this.props.user.totalCount - 1 : 0;
            let followings = this.props.user.totalCount ?  this.props.user.totalCount - 1 : 0;

            usersShow = 
            <div id="user-show-page">
                <div id="user-show-header">
                    <div id="user-avatar-container">
                        <img id="user-show-avatar" src={this.props.user.photoUrl}></img>
                    </div>
                    <div id="user-header-right">
                        <p id="header-username">{this.props.user.username}</p>
                        <div id="user-header-stats">
                            <p><span>{posts.length}</span> posts</p>
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
                <div id="posts-grid-container">
                        {posts.slice(0).reverse().map((post, index) => 
                            <div id="individual-post-item" key={index}>
                                <img id="post-photo" src={post.photoUrl}></img>
                                <div id="post-photo-overlay">
                                    <div id="post-photo-stats">
                                        <div id="post-photo-likes-container" className="post-photo-stats-numbers">
                                            <svg className="post-svg" aria-label="Unlike" color="#FFFFFF" fill="#FFFFFF" height="24" role="img" viewBox="0 0 48 48" width="24"><path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path></svg>                                            
                                            <p>#</p>
                                        </div>
                                        <div className="post-photo-stats-numbers">
                                            <svg className="post-svg" aria-label="Comment" color="#FFFFFF" fill="#FFFFFF" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M20.656 17.008a9.993 9.993 0 10-3.59 3.615L22 22z" fill="#FFFFFF" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                            <p>#</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                </div>
            </div>
        }
        

        return (
            usersShow
        )
    }

}

export default UserShow;