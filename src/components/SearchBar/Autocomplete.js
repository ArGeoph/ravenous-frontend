import React from 'react';
import getSuggestions from '../../util/GetAutocompleteSuggestions';
import './Autocomplete.css';

class Autocomplete extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            suggestionsEnabled: this.props.suggestionsEnabled,
            suggestions: [],
            filteredSuggestions: []
        }

        this.handleClick = this.handleClick.bind(this);
    }
    
    // Create suggestion list from response from Yelp API, before autocomplete component is rendered
    componentWillMount() {
        
        getSuggestions(this.props).then((suggestions) => {
            this.setState({
                suggestions: suggestions
            });

        });
    }

    // Filter suggestions if user input changed and prop is sent to the Autocomplete component
    componentWillReceiveProps(props) {
        let filteredSuggestions;

        // If autocompletion disabled or user already typed the whole word from autosuggestion list or the user input is blank
        if(props.suggestionsEnabled === false || this.state.filteredSuggestions.includes(props.userInput) || props.userInput === "") {
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

    // Handle click
    handleClick(event) {
        this.props.setTermValue(event.currentTarget.innerHTML);
        
        //Close all suggestions if user selected one
        this.setState({
            suggestionsEnabled: false
        });
    }

    render() {
        let output;

        // Check if there is any suggestions available
        if (this.state.suggestionsEnabled) {
            output = (
                <ul className="suggestions">
                    {this.state.filteredSuggestions.map(element => {
                        return <li className="suggestionItem"
                                    key={element}
                                    onClick={this.handleClick}
                                    value={element}>
                                        {element}
                                </li>
                    })}
                </ul>
            );
        }
        else { //If there's no any suggestions, we will return nothing, i.e. null
            output = null;
        }

        return output;
    }
}

export default Autocomplete;