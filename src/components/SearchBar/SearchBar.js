import React, { Component } from 'react';
import Autocomplete from '../Autocomplete/Autocomplete';
import './SearchBar.css';
import { SORT_OPTIONS } from '../../utils/Constants';

/**
 * Renders Search BarBusinessList
 */
export class SearchBar extends Component {

    constructor(props) {
        super(props);

        // Initialize component's state
        this.state = {
            term : '',
            location: '',
            sortBy: SORT_OPTIONS[ 'Best Match' ],
            termError: false,
            locationError: false,
            termAutocompletionEnabled: false
        };
    }

//============================================================================
// Event handlers
    handleTermChange = (event) => {
        this.setState({
            term: event.target.value,
            termError: event.target.value.length > 0 && false,
            termAutocompletionEnabled: true
        });
        event.preventDefault();
    }

    handleLocationChange = (event) => {
        this.setState({
            location: event.target.value,
            locationError: event.target.value.length > 0 && false
        });
    }

    handleSortByChange(sortByOption) {
        this.setState({
            sortBy: sortByOption
        });

        if (this.state.term !== '' && this.state.location !== '') {
            this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
        }
    }

    /**
     *
     * @param event
     */
    handleSearch = (event) => {
        if (event.type === 'click' || event.keyCode === 13) {

            // Call clearErrorMessageAndSearchResults function located in App.js to clear possible error message and previous search results
            this.props.clearErrorMessageAndSearchResults();

            // Check if user entered search request and location
            if (this.state.location === '' && this.state.term === '') {
                this.setState({
                    termError: true,
                    locationError: true
                });
              }
            else if (this.state.term === '') {
                this.setState({
                    termError: true,
                    locationError: false
                });
            }
            else if (this.state.location === '') {
                this.setState({
                    termError: false,
                    locationError: true
                });
            }

            else {// if user has entered search request and location send GET request to the YELP API
                // if both field aren't empty clear error flags
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

    /**
     *
     * @param value
     */
    setTermValue = (value) => {
        this.setState({
            term: value
        });

        //Set focus on location field when user chose one of the options from autocomplete list
        this.refs.locationField.focus();
    }

    /**
     * Method disables restaurants autocompletion if location input field gained focus
     * @param event
     */
    focusOnLocationField = (event) => {
        this.setState({
            termAutocompletionEnabled: false
        });

        event.preventDefault();
    }

// Event handlers end
// =======================================================================
    // Will return li elements containing search options for users
    renderSortByOptions() {
        return Object.keys(SORT_OPTIONS).map( sortByOption => {
            const sortByOptionValue = SORT_OPTIONS[ sortByOption ];

            return (
                <li
                    className={ sortByOptionValue === this.state.sortBy ? 'active' : '' }
                    key={ sortByOptionValue }
                    onClick={ this.handleSortByChange.bind(this, sortByOptionValue) }
                >
                    {sortByOption}
                </li>);
        });
    }

    /**
     *  Main Render method
     * @returns {*}
     */
    render() {
        return (
            <div className='SearchBar'>
                <div className='SearchBar-sort-options'>
                    <ul>
                        { this.renderSortByOptions() }
                    </ul>
                </div>

                <div className='SearchBar-fields'>
                    <form method='#' onKeyDown={ this.handleSearch } autoComplete='on' >
                        <div>
                            <div className='inputFieldErrorMessage'>
                                { this.state.termError ? 'The field cannot be empty' : '' }
                            </div>
                            <input
                                onChange={ this.handleTermChange }
                                placeholder='Search'
                                value={ this.state.term }
                                className={ this.state.termError ? 'inputFieldError' : '' }
                                ref='restaurantField'
                                id='restaurantField'
                                autoComplete='off'
                                autoFocus
                            />
                            <Autocomplete
                                userInput={ this.state.term }
                                setTermValue={ this.setTermValue }
                                suggestionsEnabled={ this.state.termAutocompletionEnabled }
                                location={ this.state.location }
                            />
                        </div>

                        <div>
                            <div className='inputFieldErrorMessage'>
                                { this.state.locationError ? 'The field cannot be empty' : '' }
                            </div>
                            <input
                                onChange={ this.handleLocationChange }
                                onFocus={ this.focusOnLocationField }
                                placeholder='Where?'
                                className={ this.state.locationError ? 'inputFieldError' : '' }
                                ref='locationField'
                                id='locationField'
                                autoComplete='off'
                            />
                        </div>
                    </form>
                </div>

                <div className='SearchBar-submit'>
                    <button onClick={ this.handleSearch }>Search</button>
                </div>
            </div>
        );
    }
}// End of class
// End of file
