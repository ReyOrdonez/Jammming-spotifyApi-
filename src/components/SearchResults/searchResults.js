import React from "react";
import "./searchResults.css";
import Track from "../Track/track";
import loadImage from "../../loading.png";

const SearchResults = ({ results, setPlayList, playList, isLoading }) => {
  return (
    <div className="searchResults">
      <h2>Results</h2>
      {isLoading && (
        <div className="image-container">
          <img src={loadImage} className="loading" alt="loadingImage" />
        </div>
      )}
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
