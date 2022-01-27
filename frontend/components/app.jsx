import React from 'react';
import {Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import NavBarContainer from './nav_bar/nav_bar_container';
import PostsIndexContainer from './posts/posts_index_container';
import PostShowContainer from './posts/post_show_container'
import CreatePostFormContainer from './posts/create_post_form_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import Modal from './modal/modal';

const App = () => {
    return (
        <div>
            <header>
                <Modal />
                <NavBarContainer />
            </header>

            <Switch>
                <AuthRoute exact path="/login" component={LoginFormContainer} />
                <AuthRoute exact path="/signup" component={SignupFormContainer} />

                <ProtectedRoute exact path="/users/:userId" /> {/* User Show/Profile Container */}
                <ProtectedRoute exact path="/posts/:postId" component={PostShowContainer}/> 
                <ProtectedRoute exact path="/posts/new" component={CreatePostFormContainer}/>  
                <ProtectedRoute exact path="/posts/:postId/edit" /> {/* Post Edit Form Container */}
                <ProtectedRoute exact path="/" component={PostsIndexContainer}/>  
                
                <Redirect to="/login" />
            </Switch>
        </div>
    )
}

export default App;