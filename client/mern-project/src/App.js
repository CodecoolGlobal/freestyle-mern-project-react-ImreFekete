import './App.css';
import react, { useState, useEffect } from 'react';
function App() {
  const [characters, setCharacters] = useState([]);
  const [pages, setPages] = useState([]);
  const [loading, setLoading] = useState(false);

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

  return (
    <div className="App">
    </div>
  );
}

export default App;
