import './App.css';
import Header from './components/Header';
import React, { useState } from 'react';

function App() {
  const [filteredChars, setFilteredChars] = useState(null);

  const mainCharArray = [
    {name: 'Morty Rick'},
    {name: 'Yo-yo Rick'},
    {name: 'Stacy'},
    {name: 'Redhead Rick'},
    {name: 'Tammy Guetermann'},
    {name: 'Shrimply Pibbles'},
  ]

  const handleSearchInputChange = (event) => {
    const searchValue = event.target.value.toLowerCase();
    searchValue === '' ? (
      setFilteredChars(null)
    ) : (
      setFilteredChars(mainCharArray.filter((character) => character.name.toLowerCase().startsWith(searchValue)))
    )
  };

  return (
    <div className="App">
      <Header onChange={handleSearchInputChange} />
      <br />
      {(filteredChars || mainCharArray) && (filteredChars || mainCharArray).map((char, index) => (
        <div key={index}>
          {char.name}
        </div>
      ))}
    </div>
  );
}

export default App;
