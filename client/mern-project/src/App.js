import './App.css';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import DisplayCharacters from './components/displayCharacters';


function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [characters, setCharacters] = useState([]);
  const [filteredChars, setFilteredChars] = useState(null);
  const [favCharacters, setFavCharacters] = useState(null);
  const [appState, setAppstate] = useState('all');
  const [addOrDelete, setAddOrDelete] = useState(null);

  const fetchFavourites = async () => {
    try {
      const res = await fetch('http://localhost:3000/api/favchar');
      const data = await res.json();
      setFavCharacters(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
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
      setIsLoaded(true);
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

  const handleFavorites = (state) => {
    setAppstate(state);
  }

  const handleAddToFavsButton = (event) => {
    let favouriteCharacter;
    characters.forEach((character) => {
      if (Number(event.target.parentNode.parentNode.id) === character.id) {
        favouriteCharacter = character;
      }
    });
    fetch('http://localhost:3000/api/favchar', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(favouriteCharacter)
    })
      .then(response => response.json())
      .then(data => {
        // setFavCharacters(data);
        fetchFavourites();
      })
      .catch(error => console.log(error));
  }

  const handleDeleteFromFavsButton = (event) => {
    const characterId = event.target.parentNode.parentNode.id;
    fetch(`http://localhost:3000/api/favchar/${characterId}`, {
      method: 'DELETE',
    })
      .then(response => response.json())
      .then(data => {
        // setFavCharacters(data);
        fetchFavourites();
      })
      .catch(error => console.log(error));
  }

  useEffect(() => {
    if (appState === 'all') {
      setAddOrDelete('ADD TO FAVOURITES');
    }
    if (appState === 'favorites') {
      setAddOrDelete('REMOVE FROM FAVOURITES');
    }
  }, [appState])

  console.log(isLoaded);

  if (isLoaded) {
    return (
      <div className="App">
        <Header onClickFavorites={handleFavorites} handleSearchInputChange={handleSearchInputChange} />
        <br />
        {appState === 'favorites' ? (favCharacters &&
          <DisplayCharacters
            characters={favCharacters}
            displayState={appState}
            handleAddOrDelete={handleDeleteFromFavsButton}
            addOrDelete={addOrDelete}
          />)
          :
          ((filteredChars || characters) &&
            <DisplayCharacters
              characters={(filteredChars || characters)}
              displayState={appState}
              handleAddOrDelete={handleAddToFavsButton}
              addOrDelete={addOrDelete}
            />)
        }
      </div>
    );
  } else {
    return (
      <div className="App">
        <div className="loadingContainer">
          <img className='loading' alt='loading' src="https://media.tenor.com/BgR83Df82t0AAAAi/portal-rick-and-morty.gif"></img>
        </div>
      </div>
    )
  }
}

export default App;
