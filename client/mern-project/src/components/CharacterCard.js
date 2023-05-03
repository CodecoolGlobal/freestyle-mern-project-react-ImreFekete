function CharacterCard({character}){
  return <>
  <p>{character.name}</p>
  <img src={character.image}></img>
  </>
};

export default CharacterCard;