// Tracklist.js
import React, { Component } from 'react';
import Track from './Track';

class Tracklist extends Component {
  render() {
    return (
      <div>
        <h2>Tracklist</h2>
        <ul>
          {/* Assuming you have a list of tracks as a prop */}
          {this.props.tracks.map((track, index) => (
            <Track key={index} track={track} />
          ))}
        </ul>
      </div>
    );
  }
}

export default Tracklist;
