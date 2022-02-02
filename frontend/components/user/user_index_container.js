import { connect } from 'react-redux';
import { fetchAllUsers } from '../../actions/user_actions'
import UserIndex from './user_index';

const mapStateToProps = (state) => {
    return {
        currentUser: state.entities.users[state.session.id],
        users: Object.values(state.entities.users)
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchAllUsers: () => dispatch(fetchAllUsers())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserIndex);