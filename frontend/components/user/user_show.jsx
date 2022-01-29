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

        // if (!this.props.user.posts) return null;

        if (!this.props.user) {
            usersShow = null;
        } else {
            let posts = this.props.user.posts;
            let followers = this.props.user.totalCount - 1
            let followings = this.props.user.totalCount - 1

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
                                <div id="post-photo-stats">
                                    {/* <div>
                                        <div>
                                            <svg aria-label="Like" className="_8-yf5 " color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"></path></svg>
                                            <p>#</p>
                                        </div>
                                        <div>
                                            <svg aria-label="Comment" className="_8-yf5 " color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M20.656 17.008a9.993 9.993 0 10-3.59 3.615L22 22z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                            <p>#</p>
                                        </div>
                                    </div> */}
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