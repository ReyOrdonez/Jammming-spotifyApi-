import React, { useState } from "react";
import "./playList.css";
import Track from "../Track/track";

const PlayList = ({ playList, setPlayList, postPlayList }) => {
  const [playListName, setPlayListName] = useState();

  function handleSubmitPlaylist(e) {
    e.preventDefault();
    postPlayList(playListName, playList).then(() => {
      setPlayList([]);
      setPlayListName("");
    });
  }

  return (
    <form className="playList" onSubmit={handleSubmitPlaylist}>
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
        <button className="save-button" type="submit">
          Save to Spotify
        </button>
      </div>
    </form>
  );
};

export default PlayList;
