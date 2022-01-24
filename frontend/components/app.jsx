import React from 'react';
import {Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import NavBarContainer from './nav_bar/nav_bar_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';

const App = () => {
    return (
        <div>
            <header>
            </header>

            <Switch>
                <AuthRoute exact path="/login" component={LoginFormContainer} />
                <AuthRoute exact path="/signup" component={SignupFormContainer} />
                <ProtectedRoute exact path="/users/:userId" /> {/* User Show/Profile Container */}
                <ProtectedRoute exact path="/posts/:postId" /> {/* Post Show Container */}
                <ProtectedRoute exact path="/posts/new" />  {/* Post Create Form Container */}
                <ProtectedRoute exact path="/posts/:postId/edit" /> {/* Post Edit Form Container */}

                <ProtectedRoute exact path="/" component={NavBarContainer}/>  {/* Post Index Container */}
                <Redirect to="/login" />
            </Switch>
        </div>
    )
}

export default App;