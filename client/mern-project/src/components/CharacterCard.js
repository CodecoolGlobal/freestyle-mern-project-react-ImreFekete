const CharacterCard = ({ character, favChar, handleSetFavChars }) => {
    const handleAddToFavButton = (character) => {
        console.log(character);
        fetch('http://localhost:3000/api/favchar', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(character)
        })
        .then(response => response.json())
        .then(data => handleSetFavChars([...favChar, data]))
        .catch(error => console.log(error));
    }

    const handleRemoveFromFavButton = () => {

    }


    return (
        <article className='charCard_Wrapper'>
            <div className='charCard_ImageWrapper'>
                <img className='profilePicture' src={character.image} alt={character.name} />
            </div>
            <div className='charCard_ContentWrapper'>
                <div className='section'>
                    <h2>{character.name}</h2>
                    <div className='status'>
                        <p>Status: {character.status}</p>
                        <p>Species: {character.species}</p>
                    </div>
                </div>
                <div className='section'>
                    <span>Last known location: {character.location.name}</span>

                </div>
                <div className='section'>
                    <button onClick={() => handleAddToFavButton(character)}>Add to Favorites</button>
                    <button onClick={handleRemoveFromFavButton}>Remove from Favorites</button>
                </div>
            </div>
        </article>
    )
}

export default CharacterCard;
