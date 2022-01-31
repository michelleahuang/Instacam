import React from 'react';
import CommentsIndexItem from './comments_index_item';

class CommentsIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user_id: '',
            post_id: '',
            body: ''
        }
    }

    componentDidMount() {
        this.setState({
            user_id: this.props.currentUser.id,
            post_id: this.props.postId,
        })
    }

    

    render() {
        if (!this.props.post) return null;

        return (
            <div>
                <ul>
                    {this.props.comments.map(comment => <CommentsIndexItem key={comment.id} comment={comment} />)}
                </ul>
                <form>
                    
                </form>
            </div>
        )
    }
}

export default CommentsIndex;