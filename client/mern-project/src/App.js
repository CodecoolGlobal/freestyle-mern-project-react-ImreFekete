import logo from './logo.svg';
import './App.css';

function App() {
  const [characters, setCharacters] = useState([]);
  const [pages, setPages] = useState([]);

  useEffect(() => {
    const fetchPages = async (url) => {
      try {
        const res = await fetch(url)
        const data = await res.json();
        setCharacters(_characters => {
          return [...characters, ...data.results]
        })
        setPages(_pages => {
          return [...pages, data.results]
        })
        if (data.info && data.info.next) {
          fetchPages(data.info.next);
        }
      } catch (error) {
        console.log(error)
      }
    }
    fetchPages('https://rickandmortyapi.com/api/character')
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
