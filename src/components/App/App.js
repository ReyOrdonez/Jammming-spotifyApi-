import React, {useState} from 'react';
import SearchBar from '../SearchBar/searchBar';
import SearchResults from '../SearchResults/searchResults';
import PlayList from '../PlayList/playList';
import { list } from '../TrackListInvented/trackList';
import './App.css';

function App() {
  const [trackList, setTrackList] = useState([]);

  function handleSubmit(e){
    e.preventDefault();
    setTrackList(list)
  }





  return (
    <div className="App">
      <h1>
        Ja<span className="highlight">mmm</span>ing
      </h1>
      <div style={{textAlign: 'center'}}>
        <SearchBar onSubmit={handleSubmit}/>
      </div>
      <div className='container'>
        <SearchResults className='containerItem' results={trackList}/>
        <PlayList className='containerItem'/>
      </div>
    </div>
  );
}

export default App;
