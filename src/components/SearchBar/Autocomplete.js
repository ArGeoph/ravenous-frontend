import React from 'react';
import './Autocomplete.css';

class Autocomplete extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <ul className="suggestions">
                {this.props.restaurantSuggestions.map(suggestion => {
                    return <li className="suggestionItem">{suggestion}</li>
                })}
            </ul>
        );
    }
}

export default Autocomplete;