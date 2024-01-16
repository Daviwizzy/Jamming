// App.js
import React, { Component } from 'react';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import Playlist from './Playlist';

class App extends Component {
  state = {
    searchResults: [
      { id: '1', name: 'Song 1', artist: 'Artist 1', album: 'Album 1' },
      { id: '2', name: 'Song 2', artist: 'Artist 2', album: 'Album 2' },
      { id: '3', name: 'Song 3', artist: 'Artist 3', album: 'Album 3' },
      { id: '4', name: 'Song 4', artist: 'Artist 4', album: 'Album 4' },
      { id: '5', name: 'Song 5', artist: 'Artist 5', album: 'Album 5' },
      { id: '6', name: 'Song 6', artist: 'Artist 6', album: 'Album 6' },
    ],
  };
  render() {
    return (
      <div>
        <h1>Jammming</h1>
        <SearchBar />
        <SearchResults />
        <Playlist />
        <TrackList tracks={this.state.searchResults} />
      </div>
    );
  }
}

export default App;
