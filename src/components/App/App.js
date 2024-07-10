import SearchBar from '../SearchBar/searchBar';
import SearchResults from '../SearchResults/searchResults';
import PlayList from '../PlayList/playList';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>
        Ja<span className="highlight">mmm</span>ing
      </h1>
      <div style={{textAlign: 'center'}}>
        <SearchBar/>
      </div>
      <div className='container'>
        <SearchResults/>
        <PlayList/>
      </div>
    </div>
  );
}

export default App;
