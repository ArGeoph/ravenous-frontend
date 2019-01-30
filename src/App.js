import React from 'react';
import './App.css';
import { BusinessList } from './components/BusinessList/BusinessList.js';
import { SearchBar } from './components/SearchBar/SearchBar.js';
import { Yelp } from './util/Yelp';
import { Error } from './util/Error';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      businesses: [],
      errorMessage: "",
      termError: false,
      locationError: false
    };

    this.searchYelp = this.searchYelp.bind(this);
  } 

  searchYelp(term, location, sortBy) {

    if (location === "" && term === "") {
      this.setState({
          errorMessage: "Location and business fields cannot be empty! Please check your input",
          termError: true,
          locationError: true
      });
    }
    else if (term === "") {
        this.setState({
            errorMessage: "Bussiness field cannot be empty! Please check your input",
            termError: true,
            locationError: false
        });
    }
    else if (location === "") {
        this.setState({
            errorMessage: "Location field cannot be empty! Please check your input",
            termError: false,
            locationError: true
        });
    }

    else {
      Yelp.search(term, location, sortBy).then((businesses) => {
        this.setState({
          termError: false,
          locationError: false
        });
        
        if (businesses.length > 0) {
          this.setState({
            businesses: businesses,
            errorMessage: ""
          });
        }
        else {
          this.setState({
            businesses: [], 
            errorMessage: "Your search hasn't returned any results. Check your input, or try later"
          });
        }
      });
    }   
  }

  render() {

    return (
      <div className="App">
        <h1>Ravenous</h1>
        <SearchBar termError={this.state.termError} locationError={this.state.locationError} searchYelp = {this.searchYelp} />
        <BusinessList businesses = {this.state.businesses} />
        <Error errorMessage = {this.state.errorMessage} />
      </div>
    );
  }
}

export default App;