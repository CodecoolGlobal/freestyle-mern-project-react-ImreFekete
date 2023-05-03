import React from "react";
import { useState} from "react";
import CharacterCard from "./CharacterCard";
import Pagination from "./Pagination";

function DisplayCharacters({ characters }) {
  // User is currently on this page
  const [currentPage, setCurrentPage] = useState(1);
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
          currentChars.map(char => 
            <CharacterCard
              key={char.id}
              character={char}
            />
          )
        }
        <Pagination nPages={nPages} currentPage={currentPage} handleCurrentPage={setCurrentPage}/>
      </div>
    </>
  );
};

export default DisplayCharacters;