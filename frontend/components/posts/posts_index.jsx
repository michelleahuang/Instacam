import React from 'react';
import NavBarContainer from '../nav_bar/nav_bar_container'
import PostIndexItem from './post_index_item'

class PostsIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchAllPosts();
    }

    render() {
        return (
            <div>
                <div id="main-posts-body-container">
                    <div id="main-posts-container">
                        <div id="left-side">
                            <div id="stories-container"> 
                            </div>
                            <ul id="posts-body-container">
                                {this.props.posts.map(post => <PostIndexItem key={post.id} post={post} /> )}
                            </ul>
                        </div>
                        <div id="right-side">

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PostsIndex;