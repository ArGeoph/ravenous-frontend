import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { BusinessList } from './components/BusinessList/BusinessList.js';
import { SearchBar } from './components/SearchBar/SearchBar.js';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <h1>Ravenous</h1>
        <SearchBar />
        <BusinessList />
      </div>
    );
  }
}

export default App;