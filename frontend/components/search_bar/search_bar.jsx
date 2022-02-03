import React from 'react';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // searchUser: '',
            searchedUsersArray: []
        }

        this.handleFilter = this.handleFilter.bind(this);
    }

    handleFilter(e) {
        const searchWord = e.currentTarget.value;
        const newFilter = this.props.users.filter((user) => {
            return user.username.includes(searchWord);
        });

        this.setState({ searchedUsersArray: newFilter });
    }

    // componentDidUpdate(prevProps, prevState) {
    //     if (prevState.searchUser !== this.state.searchUser && this.state.searchUser !== "") {

    //     }
    // }

    render() {
        return (
            <div>
                <div id="search-bar-container">
                    <svg id="search-icon" aria-label="Search" className="_8-yf5 " color="#8e8e8e" fill="#8e8e8e" height="16" role="img" viewBox="0 0 24 24" width="16"><path d="M19 10.5A8.5 8.5 0 1110.5 2a8.5 8.5 0 018.5 8.5z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="16.511" x2="22" y1="16.511" y2="22"></line></svg>
                    <input id="search-bar-input" type="text" placeholder="Search" onChange={this.handleFilter}></input>
                </div>
                <div id="data-result">
                    {this.state.searchedUsersArray.length != 0 && (
                        <div id="data-result-wrapper">
                            {this.state.searchedUsersArray.map(user => {
                                return (
                                    <div key={user.id} id="data-item">
                                        <img id="search-bar-image" src={user.photoUrl}></img>
                                        <div id="search-bar-usernames-info">
                                            <p id="search-bar-username">{user.username}</p>
                                            <p id="search-bar-name">{user.name}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    )}
                </div> 
            </div>
        )
    }
}

export default SearchBar;