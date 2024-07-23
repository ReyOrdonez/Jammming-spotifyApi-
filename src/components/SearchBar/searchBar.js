import React from "react";
import "./searchBar.css";

const SearchBar = ({ onSubmit, setTerm }) => {
  return (
    <form onSubmit={onSubmit}>
      <input
        className="searchBar"
        type="text"
        onChange={(e) => setTerm(e.target.value)}
      />
      <div className="searchLine"></div>
      <button type="submit" className="searchButton">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
