import headerPicture from '../Rick-And-Morty-Logo.png';

function Header({ appState, onFilterClick, handleSearchInputChange }) {

    return (
        <div className='headerWrapper'>
            <div className='headerButtons'>
                {appState === 'characters' && <button id='favBtn' onClick={() => onFilterClick('favCharacters')}>Favorites</button>}
                {appState === 'favCharacters' && <button id='mainBtn' onClick={() => onFilterClick('characters')}>All Characters</button>}
            </div>
            <div className='headers'>
                <img className='titleImage' src={headerPicture} alt='logo'></img>
            </div>
            <div className='searchBar'>
                <label>Search for a character in our database!</label>
                <input type="text" placeholder='Search for characters...' onChange={handleSearchInputChange} />
            </div>
        </div>
    );
}

export default Header;
