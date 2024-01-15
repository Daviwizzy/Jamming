// SearchResults.js
import React, { Component } from 'react';
import Tracklist from './Tracklist';

class SearchResults extends Component {
  render() {
    return (
      <div className="search-results">
        <h2>Search Results</h2>
        <Tracklist />
        {/* You can add additional components or logic here */}
      </div>
    );
  }
}

export default SearchResults;
