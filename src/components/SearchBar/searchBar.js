import React, { useState } from "react";
import "./searchBar.css";

const SearchBar = ({ onSubmit }) => {
  const [search, setSearch] = useState("");

  return (
    <form onSubmit={onSubmit}>
      <input
        className="searchBar"
        type="text"
        onChange={(e) => setSearch(e.target.value)}
      />
      <br />
      <button type="submit" className="searchButton">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
