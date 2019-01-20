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
    
    handleSortByChange(sortByOption) {
        this.setState({sortBy: sortByOption});
    }

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
                    <input placeholder="Search Businesses" />
                    <input placeholder="Where?" />
                </div> 

                <div className="SearchBar-submit">
                    <a>Let's Go</a>
                </div>
            </div>
        );
    }
}