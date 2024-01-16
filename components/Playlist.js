import React, { Component } from 'react';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import App from './App';

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

  savePlaylist() {
    const trackURIs = this.props.playlistTracks.map(track => track.uri);
    const playlistName = 'My Jammming Playlist';  // You can customize the playlist name

    Spotify.savePlaylist(playlistName, trackURIs)
      .then(() => {
        // Reset the playlist in your app
        this.props.onResetPlaylist();
      })
      .catch(error => console.error('Error saving playlist:', error));
  }

  render() {
    return (
      <div>
        {/* ... (other Playlist rendering logic) */}
        <button onClick={() => this.savePlaylist()}>Save to Spotify</button>
      </div>
    );
  }
}

export default App;