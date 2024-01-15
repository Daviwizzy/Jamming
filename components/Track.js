// Track.js
import React, { Component } from 'react';

class Track extends Component {
  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>{this.props.track.name}</h3>
          <p>{this.props.track.artist} | {this.props.track.album}</p>
        </div>
        <button className="Track-action">{/* Add your button logic here */}</button>
      </div>
    );
  }
}

export default Track;
