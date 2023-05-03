function Header({ onClickFavorites, onInputFieldChange }) {

    return (
        <div className='headerWrapper'>
            <div className='headerButtons'>
                <button onClick={() => onClickFavorites('favorites')}>Favorites</button>
                <button onClick={() => onClickFavorites('all')}>All Characters</button>
            </div>
            <div className='headers'>
                <img className='titleImage' src='https://logos-world.net/wp-content/uploads/2022/01/Rick-And-Morty-Logo.png' alt='logo'></img>
            </div>
            <div className='searchBar'>
                <label>Search for a character in our database!</label>
                <input type="text" placeholder='Search for characters...' onChange={onInputFieldChange} />
            </div>
        </div>
    );
}

export default Header;
