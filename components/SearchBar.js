// SearchBar.js
import React, { Component } from 'react';
import Spotify from './Spotify';  // Update with the correct path to your Spotify.js file

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
    };
  }

  handleInputChange = (event) => {
    this.setState({ searchTerm: event.target.value });
  };

  handleSearch = () => {
    const { searchTerm } = this.state;

    if (searchTerm) {
      Spotify.search(searchTerm)
        .then(results => {
          // Handle the results, e.g., update state in a parent component
          console.log('Search results:', results);
        })
        .catch(error => console.error('Error searching:', error));
    }
  };

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Search..."
          value={this.state.searchTerm}
          onChange={this.handleInputChange}
        />
        <button onClick={this.handleSearch}>Search</button>
      </div>
    );
  }
}

export default SearchBar;
