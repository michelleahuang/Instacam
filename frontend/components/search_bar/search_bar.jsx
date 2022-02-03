import React from 'react';
import { Link } from 'react-router-dom';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchParams: '',
            searchedUsersArray: []
        }

        this.handleFilter = this.handleFilter.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.updateSearchParams = this.updateSearchParams.bind(this);
        this.clearInput = this.clearInput.bind(this);
        this.showElement = this.showElement.bind(this);
    }

    showElement() {
        if (document.querySelector('.data-result-wrapper')) {
            document.querySelector('.data-result-wrapper').style.display = "flex";
        }
        document.querySelector('.data-result').style.display = "block";
    }


    handleFilter(e) {

        this.setState({searchParams: e.currentTarget.value})
        const searchWord = e.currentTarget.value;
        const newFilter = this.props.users.filter((user) => {
            return user.username.toLowerCase().includes(searchWord.toLowerCase());
        });

        console.log(newFilter);

        if (searchWord === "") {
            this.setState({ searchedUsersArray: []})
        } else {
            this.setState({ searchedUsersArray: newFilter } , () => {this.showElement()});
        }

    }

    updateSearchParams() {
        this.setState({ searchParams: e.currentTarget.value })
    }

    handleClick() {
        this.setState({ searchedUsersArray: [] });
        this.setState({ searchParams: '' });
        document.getElementById("search-bar-input").value= "";
        document.querySelector('.data-result').style.display = "none";
        document.querySelector('.data-result-wrapper').style.display = "none";
    }

    clearInput() {
        this.setState({ searchedUsersArray: [] });
        this.setState({ searchParams: '' });
        document.getElementById("search-bar-input").value= "";
        document.querySelector('.data-result').style.display = "none";
        document.querySelector('.data-result-wrapper').style.display = "none";
    }


    render() {
        let display;

        if (this.state.searchedUsersArray.length !== 0) {
            display = this.state.searchedUsersArray.slice(0,6).map(user => {
                return (
                    <Link onClick={this.handleClick} to={`/users/${user.id}`} className="link" key={user.id}>
                        <div key={user.id} className="data-item">
                            <img className="search-bar-image" src={user.photoUrl}></img>
                            <div className="search-bar-usernames-info">
                                <p className="search-bar-username">{user.username}</p>
                                <p className="search-bar-name">{user.name}</p>
                            </div>
                        </div>
                    </Link>
                )
            })
        } else if (this.state.searchedUsersArray.length === 0 || this.state.searchWOrd !== "") {
            let temporary = () => { return ( <p className="no-results-found">No results found.</p> )}
            display = temporary();
        }


        return (
            <div>
                <div id="search-bar-container">
                    {this.state.searchParams.length === 0 ?
                        <svg id="search-icon" aria-label="Search" className="_8-yf5 " color="#8e8e8e" fill="#8e8e8e" height="16" role="img" viewBox="0 0 24 24" width="16"><path d="M19 10.5A8.5 8.5 0 1110.5 2a8.5 8.5 0 018.5 8.5z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="16.511" x2="22" y1="16.511" y2="22"></line></svg>
                    :
                        <img id="search-close-icon" onClick={this.clearInput} src={searchCloseButton} alt="closeButton"></img>
                    }
                    <input id="search-bar-input" type="text" placeholder="Search" onChange={this.handleFilter}></input>
                    
                    <div className="data-result">
                        {this.state.searchParams.length !== 0 && (
                            <div className="data-result-wrapper">
                                {display}
                            </div>
                        )}
                    </div> 

                </div>
                {/* <div className="data-result">
                    {this.state.searchParams.length !== 0 && (
                        <div className="data-result-wrapper">
                            {display}
                        </div>
                    )}
                </div>  */}
            </div>
        )
    }
}

export default SearchBar;