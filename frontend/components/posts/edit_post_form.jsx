import React from 'react';

class EditPostForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.post;
    }

    render() {
        console.log("In edit")
        return (
            <div>Edit works</div>
        )
    }
}

export default EditPostForm;