import './App.css';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import DisplayCharacters from './components/displayCharacters';


function App() {
  const [characters, setCharacters] = useState([]);
  const [filteredChars, setFilteredChars] = useState(null);
  const [favCharacters, setFavCharacters] = useState(null);
  const [appState, setAppstate] = useState('all');

  useEffect(() => {
    const fetchFavourites = async () => {
      try {
        const res = await fetch('http://localhost:3000/api/favchar');
        const data = await res.json();
        setFavCharacters(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchFavourites();
  }, [])

  useEffect(() => {

    let fetchedCharacters = [];

    const fetchPages = async (url) => {
      try {
        const res = await fetch(url)
        const data = await res.json();
        fetchedCharacters = [...fetchedCharacters, ...data.results]

        if (data.info && data.info.next) {
          fetchPages(data.info.next);
        }
        else {
          setCharacters(fetchedCharacters);
        }
      } catch (error) {
        console.log(error)
      }
    }
    fetchPages('https://rickandmortyapi.com/api/character')
  }, []);


  const handleSearchInputChange = (event) => {
    const searchValue = event.target.value.toLowerCase();
    searchValue === '' ? (
      setFilteredChars(null)
    ) : (
      setFilteredChars(characters.filter((character) => character.name.toLowerCase().includes(searchValue)))
    )
  };

  return (
    <div className="App">
      <Header onChange={handleSearchInputChange} />
      <br />
      {
      appState =='favourites' ? (favCharacters && <DisplayCharacters characters={favCharacters} displayState={appState} />)
      :
       ((characters || filteredChars) && <DisplayCharacters characters={(characters || filteredChars)} displayState={appState} />)
    }
    </div>
  );
}

export default App;
