import headerPicture from '../Rick-And-Morty-Logo.png';

function Header({ appState, onFilterClick, handleSearchInputChange, setCurrentPage }) {

    return (
        <div className='headerWrapper'>
            <div className='headerButtons'>
                {appState === 'characters' && <button id='favBtn' onClick={() => { setCurrentPage(1); onFilterClick('favCharacters') }}>Favorites</button>}
                {appState === 'favCharacters' && <button id='mainBtn' onClick={() => { setCurrentPage(1); onFilterClick('characters') }}>Back to Main Page</button>}
            </div>
            <div className='headers'>
                <img className='titleImage' title="Go to main page" src={headerPicture} alt='logo' onClick={() => onFilterClick('characters')} />
            </div>
            <div className='searchBar' id="searchBar">
                <label>Search for a character in our database!</label>
                <input type="text" placeholder='Search for characters...' onChange={handleSearchInputChange} />
            </div>
        </div>
    );
}

export default Header;
