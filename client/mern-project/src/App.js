import './App.css';
import react, { useState, useEffect } from 'react';
import Header from './components/Header';


function App() {
  const [characters, setCharacters] = useState([]);
  const [pages, setPages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filteredChars, setFilteredChars] = useState(null);

  useEffect(() => {
    setLoading(true);
    let fetchedCharacters = [];
    let fetchedPages = [];

    const fetchPages = async (url) => {
      try {
        const res = await fetch(url)
        const data = await res.json();
        fetchedCharacters = [...fetchedCharacters, ...data.results]

        fetchedPages = [...fetchedPages, data.results]

        if (data.info && data.info.next) {
          fetchPages(data.info.next);
        }
        else {
          setCharacters(fetchedCharacters);
          setPages(fetchedPages);
          setLoading(false);
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
      {(filteredChars || characters) && (filteredChars || characters).map((char, index) => (
        <div key={index}>
          {char.name}
        </div>
      ))}
    </div>
  );
}

export default App;
