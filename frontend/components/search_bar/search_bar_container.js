import { connect } from 'react-redux';
import SearchBar from './search_bar';
import { fetchAllUsers, fetchUser } from '../../actions/user_actions';

const mapStateToProps = (state) => {
    return {
        users: Object.values(state.entities.users)
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchAllUsers: () => dispatch(fetchAllUsers()),
        fetchUser: (userId) => dispatch(fetchUser(userId))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);