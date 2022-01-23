import { connect } from 'react-redux';
import { signup, login } from '../../actions/session_actions';
import SignupSessionForm from './signup_session_form';

const mapStateToProps = (state) => {
    return {
        errors: state.errors.session,
        formType: 'Sign Up'
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        processForm: (user) => dispatch(signup(user)),
        loginUser: (user) => dispatch(login(user))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupSessionForm);