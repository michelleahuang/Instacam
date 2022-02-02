import { connect } from 'react-redux';
import { fetchAllUsers } from '../../actions/user_actions';
import UserStories from './user_stories';

const mapStateToProps = (state) => {
    return {
        currentUser: state.entities.users[state.session.id],
        users: Object.values(state.entities.users)
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchAllUsers: () => dispatch(fetchAllUsers()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserStories);