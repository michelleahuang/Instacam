import { connect } from 'react-redux';
import { login, signup } from '../../actions/session_actions';
import LoginSessionForm from './login_session_form';

const mapStateToProps = (state) => {
    return {
        errors: state.errors.session,
        formType: 'Log In'
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        processForm: (user) => dispatch(login(user)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginSessionForm);