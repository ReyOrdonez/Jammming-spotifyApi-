import React from "react";
import "./track.css";

const Track = ({ track, addToPlayList }) => {
  return (
    <div className="track">
      <div className="flex-container">
        <div>
          <p>{track.name}</p>
          <p>
            {track.artist} | {track.album}
          </p>
        </div>
        {addToPlayList && (
          <button type="submit" onClick={() => addToPlayList(track)}></button>
        )}
      </div>
      <div className="line"></div>
    </div>
  );
};

export default Track;