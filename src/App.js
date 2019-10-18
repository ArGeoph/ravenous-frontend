import React from 'react';
import './App.css';
import { BusinessList } from './components/BusinessList/BusinessList.js';
import { SearchBar } from './components/SearchBar/SearchBar.js';
import { Yelp } from './util/Yelp';
import { Spinner } from './util/Spinner';
import { Error } from './util/Error';
import { LoginMenu } from './components/LoginMenu/LoginMenu';

/**
 * Main App Class
 */
class App extends React.Component {
  constructor(props) {
    super(props);

    // Initialize state
    this.state = {
      businesses: [],
      loading: false,
      errorMessage: ""
    };

    this.searchYelp = this.searchYelp.bind(this);
    this.clearErrorMessageAndSearchResults = this.clearErrorMessageAndSearchResults.bind(this);
  } // End of Constructor

  /**
   *
   * @param term
   * @param location
   * @param sortBy
   */
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
            errorMessage: "Your search hasn't returned any results. Please check your input or Internet connection"
          })
        }
      });
  } // End of SearchYelp

  /** Clear error message and list of businesses
   *
   */
  clearErrorMessageAndSearchResults() {
    this.setState({
      businesses: [],
      errorMessage: ""
    });
  }

  /**
   * Main Render method
   * @returns {*}
   */
  render() {
    return (
      <div className="App">
        <nav className="NavMenu">
          <div className="Logo">
            <h1>Ravenous</h1>
          </div>
          <div className="LoginMenu">
            <LoginMenu />
          </div>
        </nav>
        <SearchBar
            searchYelp = {this.searchYelp}
            clearErrorMessageAndSearchResults = {this.clearErrorMessageAndSearchResults}
        />
        <Spinner loading={this.state.loading} />
        <BusinessList businesses = {this.state.businesses} />
        <Error errorMessage = {this.state.errorMessage} />
      </div>
    );
  } // End of Main Render method
} // End of App class

export default App;
// End of file
