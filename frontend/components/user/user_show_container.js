import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions'
import { fetchAllPosts } from '../../actions/post_actions'
import { openModal } from '../../actions/modal_actions';
import UserShow from './user_show';

const mapStateToProps = (state, ownProps) => {
    return {
        users: Object.values(state.entities.users),
        user: state.entities.users[ownProps.match.params.userId],
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUser: (userId) => dispatch(fetchUser(userId)),
        openModal: modal => dispatch(openModal(modal))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserShow);