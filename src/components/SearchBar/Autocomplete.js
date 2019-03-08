import React from 'react';
import './Autocomplete.css';

class Autocomplete extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            suggestionsEnabled: true,
            restaurantSuggestions: ['indian', 'chinese', 'russian', 'mexican', 'american', 'cuban'],
            filteredSuggestions: []
        }

        this.handleClick = this.handleClick.bind(this);
    }

    // Filter suggestions if user input changed
    componentWillReceiveProps() {
        let afilteredSuggestions;

        afilteredSuggestions = this.state.restaurantSuggestions.filter((suggestion) => {
            return suggestion !== this.props.userInput && suggestion.indexOf(this.props.userInput) !== -1 ;
        });

        this.setState({
            filteredSuggestions: afilteredSuggestions,
            suggestionsEnabled: true
        });
    }

    // Handle click
    handleClick(event) {
        console.log(event.target);
        this.props.setTermValue(event.target.innerHTML);

        this.setState({
            suggestionsEnabled: false
        });
    }

    render() {
        let output;

        // Check if there is any suggestions available
        if (this.props.userInput && this.state.suggestionsEnabled) {
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
        else {
            output = null;
        }

        return output;
    }
}

export default Autocomplete;