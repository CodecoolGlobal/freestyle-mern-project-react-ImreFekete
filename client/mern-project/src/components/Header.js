import headerPicture from '../Rick-And-Morty-Logo.png';

function Header({ onFilterClick, handleSearchInputChange }) {

    return (
        <div className='headerWrapper'>
            <div className='headerButtons'>
                <button onClick={() => onFilterClick('favCharacters')}>Favorites</button>
                <button onClick={() => onFilterClick('characters')}>All Characters</button>
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
