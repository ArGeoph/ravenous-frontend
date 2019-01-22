import React from 'react';
import './App.css';
import { BusinessList } from './components/BusinessList/BusinessList.js';
import { SearchBar } from './components/SearchBar/SearchBar.js';
import { Yelp } from './util/Yelp';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      businesses: []
    };

    this.searchYelp = this.searchYelp.bind(this);
  }

  searchYelp(term, location, sortBy) {
    
    Yelp.search(term, location, sortBy).then((businesses) => {
      if (businesses.length > 0) {
        this.setState({
          businesses: businesses
        });
      }
      else {

      }
    });
  }

  render() {

    return (
      <div className="App">
        <h1>Ravenous</h1>
        <SearchBar searchYelp = {this.searchYelp} />
        <BusinessList businesses = {this.state.businesses} />
      </div>
    );
  }
}

export default App;