import React from 'react';
import './searchResults.css';
import Track from '../Track/track';

const searchResults = (props) => {
  return (
    <div className='searchResults'>
        <h2>Results</h2>
        {
          props.results ? props.results.map((song) => <Track track={song}/>) : null
        }
    </div>
  )
}

export default searchResults