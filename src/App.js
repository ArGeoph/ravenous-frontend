import React from 'react';
import './App.css';
import { BusinessList } from './components/BusinessList/BusinessList.js';
import { SearchBar } from './components/SearchBar/SearchBar.js';
import { Yelp } from './utils/Yelp';
import { Spinner } from './components/Spinner/Spinner';
import { ErrorMessage } from './components/ErrorMessage/ErrorMessage';
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
      errorMessage: ''
    };
  } // End of Constructor

  /**
   *
   * @param term
   * @param location
   * @param sortBy
   */
  searchYelp = (term, location, sortBy) => {
      // Set loading state to true, so a spinner will be active until request to Yelp API is fulfilled
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
            errorMessage: ''
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
  };// End of SearchYelp method

  /** Clear error message and list of businesses
   *
   */
  clearErrorMessageAndSearchResults = () => {
    this.setState({
      businesses: [],
      errorMessage: ''
    });
  }; // End of clearErrorMessageAndSearchResults method

  /**
   * Main Render method
   * @returns {*}
   */
  render() {
    return (
        <div className="App">
            {/*Navigation Menu*/}
            <nav className="NavMenu">
                <div className="Logo">
                    <h1>Ravenous</h1>
                </div>
                <div className="LoginMenu">
                    <LoginMenu />
                </div>
            </nav>
            {/*Search Bar*/}
            <SearchBar
            searchYelp = { this.searchYelp }
            clearErrorMessageAndSearchResults = { this.clearErrorMessageAndSearchResults }
        />
            <Spinner loading={ this.state.loading } />
            {/*Search Results*/}
            <BusinessList businesses = { this.state.businesses } />
            <ErrorMessage errorMessage = { this.state.errorMessage } />
        </div>
    );
  } // End of Main Render method
} // End of App class

export default App;
// End of file
