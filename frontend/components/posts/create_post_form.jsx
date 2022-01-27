import React from 'react'
// import { Link } from 'react-router-dom';

class PostForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user_id: this.props.currentUser,
            caption: ''
        }
    }

    render() {
        return (
            <div>
                <p>Create new post</p>
                <div>
                    <form>
                    </form>
                </div>
            </div>
                
        )
    }
}

export default PostForm;