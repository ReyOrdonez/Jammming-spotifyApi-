import React from "react";
import "./playList.css";
import Track from "../Track/track";

const PlayList = ({ playList }) => {
  return (
    <div className="playList">
      <h2>Play List</h2>
      {playList.map((track) => (
        <Track track={track} key={track.id} />
      ))}
    </div>
  );
};

export default PlayList;
