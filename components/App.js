// App.js
import React, { Component } from 'react';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import Playlist from './Playlist';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Jammming</h1>
        <SearchBar />
        <SearchResults />
        <Playlist />
      </div>
    );
  }
}

export default App;
