import React, { Component } from 'react';
import SearchBar from './SearchBar';
import Playlist from './Playlist';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Jammming</h1>
        <SearchBar />
        <Playlist />
      </div>
    );
  }
}

export default SearchResults;