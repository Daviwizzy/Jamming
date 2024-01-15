// SearchBar.js
import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: ''
    };
  }

  handleInputChange = (event) => {
    this.setState({ searchTerm: event.target.value });
  };

  handleSearch = () => {
    // Implement your search logic here, using this.state.searchTerm
    console.log('Search term:', this.state.searchTerm);
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
