import React from "react";
import { useState } from "react";
import CharacterCard from "./CharacterCard";
import Pagination from "./Pagination";

function DisplayCharacters({ characters, favChar, handleSetFavChars, currentPage, setCurrentPage }) {
  // Number of Char to be displayed on each page   
  const [charsPerPage] = useState(30);

  const indexOfLastChar = currentPage * charsPerPage;
  const indexOfFirstChar = indexOfLastChar - charsPerPage;

  // Chars to be displayed on the current page
  const currentChars = characters.slice(indexOfFirstChar,
    indexOfLastChar);
  const nPages = Math.ceil(characters.length / charsPerPage);

  return (
    <>
      <div className="displayCharacters">
        {
          currentChars.map((char) =>
            <CharacterCard
              key={char.id}
              character={char}
              favChar={favChar}
              handleSetFavChars={handleSetFavChars}
            />
          )
        }
      </div>
      {
        nPages > 0 ?
          <Pagination nPages={nPages} currentPage={currentPage} handleCurrentPage={setCurrentPage} />
          :
          <h2>You have no favourites YET!</h2>
      }
    </>
  );
};

export default DisplayCharacters;
