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

    //Will return li elements containing search options for users
    renderSortByOptions() {
        return Object.keys(sortByOptions).map( sortByOption => {
            let sortByOptionValue = sortByOptions[sortByOption];

            return <li key={sortByOptionValue}>{sortByOption}</li>
        })
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
        )
    }
}

//export default SearchBar;