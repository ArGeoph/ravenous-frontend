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
      errorMessage: ""
    };

    this.searchYelp = this.searchYelp.bind(this);
  }

  searchYelp(term, location, sortBy) {

    Yelp.search(term, location, sortBy).then((businesses) => {
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

  render() {

    return (
      <div className="App">
        <h1>Ravenous</h1>
        <SearchBar searchYelp = {this.searchYelp} />
        <BusinessList businesses = {this.state.businesses} />
        <Error errorMessage = {this.state.errorMessage} />
      </div>
    );
  }
}

export default App;