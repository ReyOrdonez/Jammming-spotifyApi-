import React from 'react'
import './track.css';

const Track = (props) => {
  return (
    <div className='track'>
        <p>{props.track.name}</p>
        <p>{props.track.artist} | {props.track.album}</p>
        <div className='line'></div>
    </div>
  )
}

export default Track;