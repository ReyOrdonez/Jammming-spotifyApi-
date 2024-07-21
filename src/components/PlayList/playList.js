import React from "react";
import "./playList.css";
import Track from "../Track/track";

const PlayList = ({ playList, setPlayList }) => {
  return (
    <div className="playList">
      <h2>Play List</h2>
      <input type="text" className="playListName" placeholder="Playlist Name" />
      <div className="search-bar-line"></div>

      {playList.map((track) => (
        <Track
          track={track}
          key={track.id}
          removeFromPlayList={(trackToRemove) =>
            setPlayList(playList.filter((track) => track !== trackToRemove))
          }
        />
      ))}
    </div>
  );
};

export default PlayList;
