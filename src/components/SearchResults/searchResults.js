import React from "react";
import "./searchResults.css";
import Track from "../Track/track";

const SearchResults = ({ results, setPlayList, playList }) => {
  return (
    <div className="searchResults">
      <h2>Results</h2>
      {results &&
        results.map((song) => (
          <Track
            track={song}
            playList={playList}
            addToPlayList={(track) => setPlayList([...playList, track])}
            key={song.id}
          />
        ))}
    </div>
  );
};

export default SearchResults;
