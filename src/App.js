import React from 'react';
import SearchBar from './components/searchbar'
import SearchList from './containers/search'
import './App.css';

function App() {
  return (
    <div className="App">
    <SearchBar/>
    <SearchList/>
    </div>
  );
}

export default App;
