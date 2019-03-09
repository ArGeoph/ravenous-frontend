import React from 'react';
import './App.css';
import { BusinessList } from './components/BusinessList/BusinessList.js';
import { SearchBar } from './components/SearchBar/SearchBar.js';
import { Yelp } from './util/Yelp';
import { Spinner } from './util/Spinner';
import { Error } from './util/Error';
import SignInButton from './components/SignInComponents/SignInButton';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      businesses: [],
      loading: false,
      errorMessage: ""
    };

    this.searchYelp = this.searchYelp.bind(this);
    this.clearErrorMessageAndSearchResults = this.clearErrorMessageAndSearchResults.bind(this);
  } 

  searchYelp(term, location, sortBy) {
      // Set loading state to true, so spinner will be active until request to Yelp API is fulfilled
      this.setState({
        businesses: [],
        loading: true
      });

      // Send request to Yelp API
      Yelp.search(term, location, sortBy).then((businesses) => {
        if (businesses.length > 0) {
          this.setState({
            loading: false,
            businesses: businesses,
            errorMessage: ""
          });
        }
        else {
          this.setState({
            loading: false,
            businesses: [],
            errorMessage: "Your search hasn't returned any results. Please check your input or try later"
          })
        }
      }); 
  }

  // Function will be called from searchBar component to remove "Your search hasn't returned any results" error message
  clearErrorMessageAndSearchResults() {
    this.setState({
      businesses: [],
      errorMessage: ""
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Ravenous</h1>
        <SignInButton/>
        <SearchBar searchYelp = {this.searchYelp} clearErrorMessageAndSearchResults = {this.clearErrorMessageAndSearchResults} />
        <Spinner loading={this.state.loading} />
        <BusinessList businesses = {this.state.businesses} />
        <Error errorMessage = {this.state.errorMessage} />
      </div>
    );
  }
}

export default App;