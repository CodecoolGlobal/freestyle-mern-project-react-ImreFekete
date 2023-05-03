import React from "react";
import { useState } from "react";
import CharacterCard from "./CharacterCard";
import Pagination from "./Pagination";

function DisplayCharacters({ characters, displayState, handleAddOrDelete, addOrDelete }) {
  
  //determine the data type
  let data = null;
  if (displayState === 'favorites') {
    data = characters.map(character => character.character);
  }
  else{
    data = characters;
  }
  // User is currently on this page
  const [currentPage, setCurrentPage] = useState(1);
  // Number of Char to be displayed on each page   
  const [charsPerPage] = useState(30);
  const indexOfLastChar = currentPage * charsPerPage;
  const indexOfFirstChar = indexOfLastChar - charsPerPage;

  // Chars to be displayed on the current page
  const currentChars = data.slice(indexOfFirstChar,
    indexOfLastChar);
  const nPages = Math.ceil(data.length / charsPerPage);

  return (
    <>
      <div className="displayCharacters">
        {
          currentChars.map((char) =>
            <CharacterCard
              key={char.id}
              character={char}
              handleAddOrDelete={handleAddOrDelete}
              addOrDelete={addOrDelete}
            />
          )
        }
      </div>
      <div>
        <Pagination nPages={nPages} currentPage={currentPage} handleCurrentPage={setCurrentPage}/>
      </div>
    </>
  );
};

export default DisplayCharacters;