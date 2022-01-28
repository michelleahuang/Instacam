import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions'
import UserShow from './user_show';

const mapStateToProps = (state, ownProps) => {
    return {
        users: Object.values(state.entities.users),
        user: state.entities.users[ownProps.match.params.userId]
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUser: (userId) => dispatch(fetchUser(userId))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserShow);