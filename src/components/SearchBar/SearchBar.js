import React from 'react';
import './SearchBar.css';

// One of the object keys will be used to pass corresponding value to Yelp API to return results in accordance with user's choice
const sortByOptions = {
    'Best Match' : "best_match",
    'Highest Rated' : "rating",
    'Most Reviewed' : "review_count"
};

// React component Seach bar class
export class SearchBar extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            term : '',
            location: '',
            sortBy: 'best_match',
            termError: false,
            locationError: false       
        };   
        
        this.handleTermChange = this.handleTermChange.bind(this);
        this.handleLocationChange = this.handleLocationChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    // Function checking if the current search option is selected and returnig css class name active if it's the case
    getSortByClass (sortByOption) {
        if (sortByOption === this.state.sortBy) {
            return 'active';
        }
        else {
            return '';
        }
    }

//============================================================================    
// Event handlers
    handleTermChange(event) {

        this.setState({
            term: event.target.value,
            termError: event.target.value.length > 0 && false
        });
    }

    handleLocationChange(event) {
        
        this.setState({
            location: event.target.value,
            locationError: event.target.value.length > 0 && false
        });
    }

    handleSortByChange(sortByOption) {

        this.setState({
            sortBy: sortByOption
        });

        if (this.state.term !== "" && this.state.location !== "") {
            this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
        }
    }

    handleSearch(event) {

        if (event.type === "click" || event.keyCode === 13) {
            // Call clearErrorMessageAndSearchResults function located in App.js to clear possible error message and previous search results
            this.props.clearErrorMessageAndSearchResults();

            // Check if user entered search request and location
            if (this.state.location === "" && this.state.term === "") {
                this.setState({
                    termError: true,
                    locationError: true
                });
              }
            else if (this.state.term === "") {
                this.setState({
                    termError: true,
                    locationError: false
                });
            }
            else if (this.state.location === "") {
                this.setState({
                    termError: false,
                    locationError: true
                });
            }
        
            else {//if user has entered search request and location send GET request to the YELP API
                //if both field aren't empty clear error flags
                this.setState({
                    termError: false,
                    locationError: false,
                    loading: true
                });

                this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
            }

            event.preventDefault(); 
        }
    }    
//============================================================================

    // Will return li elements containing search options for users
    renderSortByOptions() {
        return Object.keys(sortByOptions).map( sortByOption => {
            let sortByOptionValue = sortByOptions[sortByOption];

            return <li className={this.getSortByClass(sortByOptionValue)} 
                        key={sortByOptionValue}
                        onClick={this.handleSortByChange.bind(this, sortByOptionValue)}>
                            {sortByOption}
                    </li>
        });
    }

    render() {
        return (

            <div className="SearchBar">
                <div className="SearchBar-sort-options">
                    <ul>
                        {this.renderSortByOptions()}
                    </ul>
                </div>

                <div className="SearchBar-fields">
                    <form method="#" onKeyDown={this.handleSearch} autoComplete="on" >
                        <div>
                            <div className="inputFieldErrorMessage">{this.state.termError && "The field cannot be empty"}</div>
                            <input onChange={this.handleTermChange}
                                    placeholder="Search Businesses"
                                    className={this.state.termError && "inputFieldError"} 
                                    />
                        </div>

                        <div>
                            <div className="inputFieldErrorMessage">{this.state.locationError && "The field cannot be empty"}</div>               
                            <input onChange={this.handleLocationChange}
                                    placeholder="Where?" 
                                    className={this.state.locationError && "inputFieldError"} />    
                        </div>                            
                    </form>
                </div> 

                <div className="SearchBar-submit">
                    <a onClick={this.handleSearch}>Let's Go</a>
                </div>
            </div>
        );
    }
}