import React from 'react';
import './SearchBar.css';

//One of the object keys will be used to pass corresponding value to Yelp API to return results in accordance with user's choice
const sortByOptions = {
    'Best Match' : "best_match",
    'Highest Rated' : "rating",
    'Most Reviewed' : "review_count"
};

//React component Seach bar class
export class SearchBar extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            term : '',
            location: '',
            sortBy: 'best_match'
        };   
        
        this.handleTermChange = this.handleTermChange.bind(this);
        this.handleLocationChange = this.handleLocationChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    //Function checking if the current search option is selected and returnig css class name active if it's the case
    getSortByClass (sortByOption) {
        if (sortByOption === this.state.sortBy) {
            return 'active';
        }
        else {
            return '';
        }
    }

//============================================================================    
//Event handlers
    handleTermChange(event) {
        this.setState({
            term: event.target.value
        });
    }

    handleLocationChange(event) {
        this.setState({
            location: event.target.value
        });
    }


    handleSortByChange(sortByOption) {
        this.setState({
            sortBy: sortByOption
        });

        this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
    }

    handleSearch(event) {
        if (event.type === "click" || event.keyCode === 13) {
            this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
            event.preventDefault();
        }
    }
    
//============================================================================

    //Will return li elements containing search options for users
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
                        <input onChange={this.handleTermChange}
                                placeholder="Search Businesses" />
                        <input onChange={this.handleLocationChange}
                                placeholder="Where?" />
                    </form>
                </div> 

                <div className="SearchBar-submit">
                    <a onClick={this.handleSearch}>Let's Go</a>
                </div>
            </div>
        );
    }
}