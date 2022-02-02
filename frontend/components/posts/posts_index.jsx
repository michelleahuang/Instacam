import React from 'react';
import NavBarContainer from '../nav_bar/nav_bar_container'
import UserIndexContainer from '../user/user_index_container';
import PostIndexItem from './post_index_item'

class PostsIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchAllPosts();
        this.props.fetchAllLikes();
        this.props.fetchAllComments();
    }

    render() {
        if (!this.props.posts) return null;
        
        return (
                <div id="main-posts-body-container">
                    <div id="main-posts-container">
                        <div id="left-side">
                            <div id="stories-container"> 
                            </div>
                            <div id="posts-body-container">
                                <ul id="entire-post">
                                    {this.props.posts.slice(0).reverse().map(post => <PostIndexItem key={post.id} post={post} openModal={this.props.openModal} /> )}
                                </ul>
                            </div>
                        </div>
                        <div id="right-side">
                            <UserIndexContainer />
                        </div>
                    </div>
                </div>
        )
    }
}

export default PostsIndex;