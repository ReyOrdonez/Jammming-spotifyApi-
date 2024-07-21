import React, { useState } from "react";
import SearchBar from "../SearchBar/searchBar";
import SearchResults from "../SearchResults/searchResults";
import PlayList from "../PlayList/playList";
import spotify from "../Spotify/spotify";
import "./App.css";

function App() {
  const [results, setResults] = useState([]);
  const [playList, setPlayList] = useState([]);
  const [term, setTerm] = useState();
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (term) {
      setIsLoading(true);
      spotify.getSearchResults(term).then((results) => {
        setResults(results);
        setIsLoading(false);
      });
    }
  }

  return (
    <div className="App">
      <h1>
        Ja<span className="highlight">mmm</span>ing
      </h1>
      <div style={{ textAlign: "center" }}>
        <SearchBar onSubmit={handleSubmit} setTerm={setTerm} />
      </div>
      <div className="container">
        <SearchResults
          className="containerItem"
          results={results}
          setPlayList={setPlayList}
          playList={playList}
          isLoading={isLoading}
        />
        <PlayList
          className="containerItem"
          playList={playList}
          setPlayList={setPlayList}
        />
      </div>
    </div>
  );
}

export default App;
