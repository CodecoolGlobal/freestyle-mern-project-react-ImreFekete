import portalrick from '../portal-rick-and-morty.gif';

const CharacterCard = ({ character, favChar, handleSetFavChars, setAppState, setLocation}) => {
    const handleAddToFavButton = (character) => {
        fetch('http://localhost:3000/api/favchar', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(character)
        })
            .then((response) => response.json())
            .then((data) => handleSetFavChars([...favChar, data]))
            .catch((error) => console.log(error));
    }

    const handleRemoveFromFavButton = (character) => {
        fetch(`http://localhost:3000/api/favchar/${character.id}`, {
            method: 'DELETE',
        })
            .then((response) => handleSetFavChars(favChar.filter(char => char.id !== character.id)))
            .catch((error) => console.log(error));
    }

    const isFav = (character, favChar) => {
        let isFav = false;
        favChar.forEach((char) => {
            if (char.id === character.id) {
                isFav = true;
            }
        })
        return isFav;
    }

    return (
        <article className='charCard_Wrapper'>
            <div className='charCard_ImageWrapper'>
                {
                    isFav(character, favChar) ?
                        <img className='removeB' title='Remove from favorites' alt='remove' src={portalrick} onClick={() => handleRemoveFromFavButton(character)}></img>
                        :
                        <img className='addB' title='Add to favorites' alt='add' src={portalrick} onClick={() => handleAddToFavButton(character)}></img>
                }
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
                <div className='locationSection' title="Click to go location">
                    <span onClick={()=>{setAppState('displayLocation'); setLocation(character.location)}}>Last known location: <p>{character.location.name}</p></span>
                </div>
                <div className='section'>
                </div>
            </div>
        </article>
    )
};

export default CharacterCard;
