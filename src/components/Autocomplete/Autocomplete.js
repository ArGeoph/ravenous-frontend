import React, { Component } from 'react';
import getSuggestions from '../../utils/GetAutocompleteSuggestions';
import './Autocomplete.css';

class Autocomplete extends Component {
    constructor(props) {
        super(props);

        this.state = {
            filteredSuggestions: [],
            suggestions: [],
            suggestionsEnabled: this.props.suggestionsEnabled,
        }

        this.handleClick = this.handleClick.bind(this);
    }

    // Create suggestion list from response from Yelp API, before autocomplete component is rendered
    componentDidMount() {
        getSuggestions(this.props).then((suggestions) => {
            this.setState({
                suggestions: suggestions
            });
        });
    }

    // Filter suggestions if user input changed and prop is sent to the Autocomplete component
    componentWillReceiveProps(props) {
        let filteredSuggestions;

        // If autocompletion is disabled or user already typed the whole word from autocompletion list
        // or if the user input is blank
        if(!props.suggestionsEnabled || this.state.filteredSuggestions.includes(props.userInput) || !props.userInput) {
            this.setState({
                suggestionsEnabled: false
            });
            return null;
        }

        // If all abovementioned conditions aren't met, and everything is good create array with suggestions based on user input
        filteredSuggestions = this.state.suggestions.filter((suggestion) => {
            return suggestion.toLowerCase().startsWith(props.userInput.toLowerCase());
        });

        this.setState({
            filteredSuggestions: filteredSuggestions,
            suggestionsEnabled: true
        });
    }

    // Handle selection of one of the autocompletion options
    handleClick(event) {
        this.props.setTermValue(event.currentTarget.innerHTML);

        // Close all autocomplete suggestions if user selected one
        this.setState({
            suggestionsEnabled: false
        });
    }

    render() {
        // Check if there is any suggestions available
        if (this.state.suggestionsEnabled) {
            return (
                <ul className='suggestions'>
                    {this.state.filteredSuggestions.map(autocompleteItem => {
                        return (<li
                                    className='suggestionItem'
                                    key={ autocompleteItem }
                                    onClick={ this.handleClick }
                                    value={ autocompleteItem }
                                >
                            {autocompleteItem}
                        </li>);
                    })}
                </ul>
            );
        }
        return null;
    }
}

export default Autocomplete;
