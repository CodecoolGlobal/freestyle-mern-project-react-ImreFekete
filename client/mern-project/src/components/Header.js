function Header({ onChange }) {

    return (
        <div className='header'>
            <div className='headerButtons'>
                <button>Placeholder button1</button>
                <button>Placeholder button2</button>
            </div>
            <h1>The Rick and Morty Site</h1>
            <h2>Wubba Lubba Dub-Dub</h2>
            <label>Search for a character in our database!</label>
            <div className='searchBar'>
                <input type="text" placeholder='Search for characters...' onChange={onChange} />
            </div>
        </div>
    );
}

export default Header;
