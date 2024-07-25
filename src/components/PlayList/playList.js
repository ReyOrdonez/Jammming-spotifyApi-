import React, { useState } from "react";
import "./playList.css";
import Track from "../Track/track";

const PlayList = ({ playList, setPlayList, postPlayList }) => {
  const [playListName, setPlayListName] = useState();

  function handleOnClick(e) {
    e.preventDefault();
    postPlayList(playListName, playList).then(() => {
      setPlayList([]);
      setPlayListName("");
    });
  }

  return (
    <div className="playList">
      <h2>Play List</h2>
      <input
        type="text"
        className="playListName"
        placeholder="Playlist Name"
        onChange={(e) => setPlayListName(e.target.value)}
        value={playListName}
      />
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
      <br />
      <div style={{ textAlign: "center" }}>
        <button className="save-button" type="button" onClick={handleOnClick}>
          Save to Spotify
        </button>
      </div>
    </div>
  );
};

export default PlayList;
