function Header({ onChange }) {

    return (
        <div className='headerWrapper'>
            <div className='headerButtons'>
                <button>Placeholder button1</button>
                <button>Placeholder button2</button>
            </div>
            <div className='headers'>
                <img className='titleImage' src='https://logos-world.net/wp-content/uploads/2022/01/Rick-And-Morty-Logo.png' alt='logo'></img>
                {/* <h1 className='title'>The Rick and Morty Site</h1> */}
                {/* <h2>Wubba Lubba Dub-Dub</h2> */}
            </div>
            <div className='searchBar'>
                <label>Search for a character in our database!</label>
                <input type="text" placeholder='Search for characters...' onChange={onChange} />
            </div>
        </div>
    );
}

export default Header;
