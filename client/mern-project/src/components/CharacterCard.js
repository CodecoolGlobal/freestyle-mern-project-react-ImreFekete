const CharacterCard = ({ character }) => {

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
                    Placeholder section
                </div>
            </div>
        </article>
    )
}

export default CharacterCard;