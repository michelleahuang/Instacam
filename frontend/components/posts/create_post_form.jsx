import React from 'react'
import { withRouter } from 'react-router-dom';


class CreatePostForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user_id: this.props.currentUser.id,
            caption: '',
            photoFile: null,
            photoUrl: null
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleFile = this.handleFile.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(e) {
        e.preventDefault;
        this.setState({caption: e.currentTarget.value});
    }

    handleClick(e) {
        let postFormContainer = e.target.parentElement;
        postFormContainer.querySelector('#file-input-button').click();
    }

    handleFile(e) {
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({photoFile: file, photoUrl: fileReader.result});
        };

        if (file) {
            fileReader.readAsDataURL(file);
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('post[caption]', this.state.caption);
        if (this.state.photoFile) {
            formData.append('post[photo]', this.state.photoFile)
        };
        // debugger;
        // $.ajax({
        //     method: 'POST',
        //     url: `/api/posts`,
        //     data: formData,
        //     contentType: false,
        //     processData: false
        // }).then(() => this.props.location.reload())

        this.props.createPost(formData).then(() => this.props.history.push('/'));

            // () => this.props.history.push('/'))

        // this.setState({counter: this.state.counter + 1});
        // .then(this.props.fetchAllPosts());
        this.props.closeModal();
    }

    componentDidMount() {
        this.props.fetchAllPosts();
    }
    
    // componentDidUpdate(prevProps) {
    //     // debugger;
    //     if (this.props.posts.length !== prevProps.posts.length) {
    //         // this.props.fetchAllPosts()
    //         // this.setState(this.props.post)
    //         this.c
    //     };
    // }

    render() {
        let preview;

        if (this.state.photoUrl) {
            preview = (
                <div id="form-left-side">
                    <img id="preview-photo" src={this.state.photoUrl}></img> 
                </div>
            )
        } else {
            preview = (
                <div id="form-left-side">
                    <svg id="upload-image" aria-label="Icon to represent media such as images or videos" className="_8-yf5 " color="#262626" fill="#262626" height="77" role="img" viewBox="0 0 97.6 77.3" width="200"><path d="M16.3 24h.3c2.8-.2 4.9-2.6 4.8-5.4-.2-2.8-2.6-4.9-5.4-4.8s-4.9 2.6-4.8 5.4c.1 2.7 2.4 4.8 5.1 4.8zm-2.4-7.2c.5-.6 1.3-1 2.1-1h.2c1.7 0 3.1 1.4 3.1 3.1 0 1.7-1.4 3.1-3.1 3.1-1.7 0-3.1-1.4-3.1-3.1 0-.8.3-1.5.8-2.1z" fill="currentColor"></path><path d="M84.7 18.4L58 16.9l-.2-3c-.3-5.7-5.2-10.1-11-9.8L12.9 6c-5.7.3-10.1 5.3-9.8 11L5 51v.8c.7 5.2 5.1 9.1 10.3 9.1h.6l21.7-1.2v.6c-.3 5.7 4 10.7 9.8 11l34 2h.6c5.5 0 10.1-4.3 10.4-9.8l2-34c.4-5.8-4-10.7-9.7-11.1zM7.2 10.8C8.7 9.1 10.8 8.1 13 8l34-1.9c4.6-.3 8.6 3.3 8.9 7.9l.2 2.8-5.3-.3c-5.7-.3-10.7 4-11 9.8l-.6 9.5-9.5 10.7c-.2.3-.6.4-1 .5-.4 0-.7-.1-1-.4l-7.8-7c-1.4-1.3-3.5-1.1-4.8.3L7 49 5.2 17c-.2-2.3.6-4.5 2-6.2zm8.7 48c-4.3.2-8.1-2.8-8.8-7.1l9.4-10.5c.2-.3.6-.4 1-.5.4 0 .7.1 1 .4l7.8 7c.7.6 1.6.9 2.5.9.9 0 1.7-.5 2.3-1.1l7.8-8.8-1.1 18.6-21.9 1.1zm76.5-29.5l-2 34c-.3 4.6-4.3 8.2-8.9 7.9l-34-2c-4.6-.3-8.2-4.3-7.9-8.9l2-34c.3-4.4 3.9-7.9 8.4-7.9h.5l34 2c4.7.3 8.2 4.3 7.9 8.9z" fill="currentColor"></path><path d="M78.2 41.6L61.3 30.5c-2.1-1.4-4.9-.8-6.2 1.3-.4.7-.7 1.4-.7 2.2l-1.2 20.1c-.1 2.5 1.7 4.6 4.2 4.8h.3c.7 0 1.4-.2 2-.5l18-9c2.2-1.1 3.1-3.8 2-6-.4-.7-.9-1.3-1.5-1.8zm-1.4 6l-18 9c-.4.2-.8.3-1.3.3-.4 0-.9-.2-1.2-.4-.7-.5-1.2-1.3-1.1-2.2l1.2-20.1c.1-.9.6-1.7 1.4-2.1.8-.4 1.7-.3 2.5.1L77 43.3c1.2.8 1.5 2.3.7 3.4-.2.4-.5.7-.9.9z" fill="currentColor"></path></svg>
                    <p id="upload-image-text">Upload photo here</p>
                    <div id="select-from-computer" onClick={this.handleClick}>Select from computer</div>
                    <input id="file-input-button" onChange={this.handleFile} type="file" accept="image/png, image/jpeg, image/jpg"/>
                </div>
            )
        }
        
        return (
            <>
                <div id="form-close-button">
                    <svg onClick={this.props.closeModal} aria-label="Close" color="#ffffff" fill="#ffffff" height="24" role="img" viewBox="0 0 24 24" width="24"><polyline fill="none" points="20.643 3.357 12 12 3.353 20.647" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></polyline><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" x1="20.649" x2="3.354" y1="20.649" y2="3.354"></line></svg>
                </div>
                <div id="post-form-container">
                    <div id="post-form-wrapper">
                        <div id="post-form-header">
                            <p id="dummy-text">Share</p>
                            <p id="create-text">Create new post</p>
                            <button id="share-text" form="post-form">Share</button>
                        </div>
                        <form id="post-form" onSubmit={this.handleSubmit}>
                            {preview}
                            <div id="form-right-side">
                                <div id="form-right-side-header">
                                    <img id="form-user-avatar" src={this.props.currentUser.photoUrl}></img>
                                    <p>{this.props.currentUser.username}</p>
                                </div>
                                <div>
                                    <textarea id="caption-input" type="text" value={this.state.caption} placeholder="Write a caption..." onChange={this.handleInput}></textarea>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </>
        )
    }
}

export default withRouter(CreatePostForm);