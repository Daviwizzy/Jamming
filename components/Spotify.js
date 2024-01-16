// Spotify.js
import axios from 'axios';

const clientId = '7425c527017642a6b5dddde41197ce97';
const clientSecret = '1fc95d51bb8d49d58a28c97922a2f568';
const redirectUri = 'http://localhost:3000';  // Update with your redirect URI
let accessToken;

const Spotify = {
    getAccessToken() {
      if (accessToken) {
        return accessToken;
      }
  
      // Check for access token in URL
      const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
      const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);
  
      if (accessTokenMatch && expiresInMatch) {
        accessToken = accessTokenMatch[1];
        const expiresIn = Number(expiresInMatch[1]);
  
        // Clear the parameters from the URL
        window.setTimeout(() => accessToken = '', expiresIn * 1000);
        window.history.pushState('Access Token', null, '/');
  
        return accessToken;
      } else {
        // Redirect user to Spotify authorization
        const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
        window.location = accessUrl;
      }
    },

  search(term) {
    const accessToken = this.getToken();
    const apiUrl = `https://api.spotify.com/v1/search?type=track&q=${term}`;

    return axios.get(apiUrl, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    .then(response => response.data.tracks.items)
    .catch(error => console.error('Error searching tracks:', error));
  },
  
  savePlaylist(name, trackURIs) {
    if (!name || !trackURIs.length) {
      return;
    }

    const accessToken = this.getAccessToken();
    const headers = {
      Authorization: `Bearer ${accessToken}`
    };

    let userId;

    // Get the user's ID
    return fetch('https://api.spotify.com/v1/me', { headers: headers })
      .then(response => response.json())
      .then(data => {
        userId = data.id;

        // Create a new playlist
        return fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
          method: 'POST',
          headers: headers,
          body: JSON.stringify({ name: name })
        })
        .then(response => response.json())
        .then(playlist => {
          const playlistId = playlist.id;

          // Add tracks to the playlist
          return fetch(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify({ uris: trackURIs })
          });
        });
      });
  }
};

export default Spotify;
