import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';
import NavBar from './nav_bar';

const mapStateToProps = (state) => {
    return {
        currentUser: state.entities.users[state.session.id]
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(logout()),
        openModal: modal => dispatch(openModal(modal))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);