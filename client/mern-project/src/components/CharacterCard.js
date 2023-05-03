const CharacterCard = ({ character }) => {

    return (
        <div>
            <article className='charCard_Wrapper'>
                <div className='charCard_ImageWrapper'>
                    <img src={character.image} alt={character.name} />
                </div>
                <div className='charCard_ContentWrapper'>
                    <div className='section'>
                        {character.name}
                        <div className='status'>
                            <p>Status: {character.status}</p>
                            <p>Species: {character.species}</p>
                        </div>
                    </div>
                    <div className='section'>
                        <span>Last known location:</span>
                        {character.location.name}
                    </div>
                    <div className='section'>
                        Placeholder section
                    </div>
                </div>
            </article>
        </div>
    )
}

export default CharacterCard;
